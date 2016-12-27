function Draw() {
    this.drawLine = function(xpos1, ypos1, xpos2, ypos2, width, color, cap) {
        var temp_line = canvas.getContext('2d');
        temp_line.beginPath();
        temp_line.moveTo(xpos1, ypos1);
        temp_line.lineTo(xpos2, ypos2);
        if (width == undefined) {
            temp_line.lineWidth = 5;
        } else {
            temp_line.lineWidth = width;
        }
        if (color == undefined) {
            temp_line.strokeStyle = 'black';
        } else {
            temp_line.strokeStyle = color;
        }
        if (cap == undefined) { //this part does not seem to work currently
            temp_line.lineCap = cap; //'butt' and 'square also work'
        } else {
            temp_line.lineCap = 'round';
        }
        temp_line.stroke();
    }

    this.drawCircle = function(centerX, centerY, radius, width, color, fill, fill_color) {
        var temp_circle = canvas.getContext('2d');
        temp_circle.beginPath();
        temp_circle.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        if (width == undefined) {
            temp_circle.lineWidth = 5;
        } else {
            temp_circle.lineWidth = width;
        }
        if (color == undefined) {
            temp_circle.strokeStyle = 'purple';
        } else {
            temp_circle.strokeStyle = color;
        }
        if (fill == true) {
            if (fill_color == undefined) {
                temp_circle.fillStyle = 'yellow';
            } else {
                temp_circle.fillStyle = fill_color;
            }
            temp_circle.fill();
        }
        temp_circle.stroke();
    }

    this.writeText = function(text, xpos, ypos, align, size, text_font, style, color) {
        //maybe usetags in a string to get the info /t /x /y /a /s /f /s /c or type them out
        var temp_text = canvas.getContext('2d');
        var font = "";
        if (align == undefined) {
            context.textAlign = 'left'; //start, end, left right and center work
        } else {
            context.textAlign = align;
        }
        if (style != undefined) {
            font += style;
        }
        if (size == undefined) {
            font += " 40pt";
        } else {
            font += " " + parseInt(size) + "pt";
        }
        if (text_font == undefined) {
            font += ' Calibri';
        } else {
            font += text_font;
        }
        temp_text.font = font;
        if (color == undefined) {
            temp_text.fillStyle = 'blue';
        } else {
            temp_text.fillStyle = color;
        }
        temp_text.fillText(text, xpos, ypos);
    }
    this.elements = [];

    this.clickBox = function() {
        var elem = document.getElementById('myCanvas');
        // Add event listener for `click` events.
        var elements = this.elements;
        elem.addEventListener('click', function(event) { //the function that detects the click
            var x = event.pageX - elem.offsetLeft;
            var y = event.pageY - elem.offsetTop;
            // Collision detection between clicked offset and element.
            elements.forEach(function(element) { //THIS line is shit
                if (y > element.top && y < element.top + element.height &&
                    x > element.left && x < element.left + element.width) {
                    document.getElementById("myCanvas").style.background = "rgb(" + Math.floor((Math.random() * 255) + 1) + ",200, 90)";
                }
            });

        }, false);
        this.elements.forEach(function(element) { //THIS
            context.fillStyle = element.colour;
            context.fillRect(element.left, element.top, element.width, element.height);
        });
    }
}
