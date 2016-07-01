/*
     Name: Alexandria Strawter
     Date: 06-28-2016
     Class & Section:  WIA-1607
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
 
PART 1
Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.
********************************************/

if(Modernizr.canvas){
    var Canvas1 = document.getElementById("Canvas1").getContext("2d");
    Canvas1.strokeStyle = 'black';
    Canvas1.fillStyle = 'blue';
    Canvas1.lineWidth = 5;
    Canvas1.strokeRect(0,0,50,100);
    Canvas1.fillRect(0,0,50,100);
    };

/**************** ***************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/

if(Modernizr.canvas){
    var Canvas2 = document.getElementById("Canvas2").getContext("2d");
    Canvas2.strokeStyle= "black";
    Canvas2.fillStyle = "rgba(230, 20, 51, .5)";
    var degrees = 360;
    var radians = (degrees/180)*Math.PI;
    Canvas2.beginPath();
    Canvas2.arc(50, 50, 20, 0, radians);
    Canvas2.fill();
    Canvas2.stroke();

};

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)
********************************************/

if(Modernizr.canvas){
    var Canvas3 = document.getElementById("Canvas3").getContext("2d");
    Canvas3.strokeStyle = "black";
    Canvas3.fillStyle= "rgba(64, 164, 226, 0.75)";
    Canvas3.lineWidth = 5;
    Canvas3.beginPath();
    Canvas3.moveTo(100,100);
    Canvas3.lineTo(80,45);
    Canvas3.lineTo(60,100);
    Canvas3.lineTo(15,115);
    Canvas3.lineTo(50,140);
    Canvas3.lineTo(40,190);
    Canvas3.lineTo(80,160);
    Canvas3.lineTo(130,190);
    Canvas3.lineTo(120,140);
    Canvas3.lineTo(150,110);
    Canvas3.closePath();
    Canvas3.fill();
    Canvas3.stroke();
};

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.
********************************************/

if(Modernizr.canvas){
    var Canvas4 = document.getElementById("Canvas4").getContext("2d");
    Canvas4.strokeStyle = "black";
    Canvas4.fillStyle= "rgba(66, 76, 118, .75)";
    Canvas4.lineWidth = 2;
    Canvas4.beginPath();
    Canvas4.arc(100,90,80, 0, 1 * Math.PI, true);
    Canvas4.stroke();
    Canvas4.fill();
    Canvas4.fillStyle= "rgba(255, 255, 255, 1)";
    Canvas4.beginPath();
    Canvas4.moveTo(19,90);
    Canvas4.quadraticCurveTo(80,75, 100, 90);
    Canvas4.fill();
    Canvas4.bezierCurveTo(100,90, 180, 75, 180, 90);
    Canvas4.fill();
};

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.
********************************************/
if(Modernizr.canvas){
    var Canvas5 = document.getElementById("Canvas5").getContext("2d");

    var text = "Using canvas is fun!";
    Canvas5.font="40pt Raleway";
    Canvas5.fillStyle = "rgba(43, 188, 233, 1)";
    Canvas5.strokeStyle = "rgba(107, 154, 168, 1)";
    Canvas5.fillText(text, 0, 50);
    Canvas5.strokeText(text, 0, 50);
};

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.
********************************************/
if(Modernizr.canvas){
    var Canvas6 = document.getElementById("Canvas6").getContext("2d");
    var imgSrc = document.getElementById("logo");
    Canvas6.drawImage(imgSrc,-200,-100);

    Canvas6.drawImage(imgSrc, 0, 1000, 1650, 544);

    Canvas6.drawImage(imgSrc,0 , 0 , 1088, 517, -130, 1500, 1088, 517 );
};

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.
********************************************/
if(Modernizr.canvas){
    var Canvas7 = document.getElementById("Canvas7").getContext("2d");
    //tank
    Canvas7.strokeStyle = 'rgba(94, 161, 181, 1)';
    Canvas7.fillStyle = 'rgba(47, 186, 228, 0.88)';
    Canvas7.lineWidth = 8;
    Canvas7.strokeRect(0,0,400,200);
    Canvas7.fillRect(0,0,400,200);

    //body
    Canvas7.fillStyle = 'rgba(245, 120, 25, 1)';
    Canvas7.beginPath();
    Canvas7.arc(200, 100, 60, 0, radians);
    Canvas7.fill();
    //eye
    Canvas7.fillStyle = 'white';
    Canvas7.strokeStyle= 'rgba(176, 176, 176, 0.99)';
    Canvas7.lineWidth = 2;
    Canvas7.beginPath();
    Canvas7.arc(220, 80, 20, 0, radians);
    Canvas7.fill();
    Canvas7.stroke();
    //eyeball
    Canvas7.fillStyle = 'black';
    Canvas7.beginPath();
    Canvas7.arc(225, 80, 10, 0, radians);
    Canvas7.fill();
    //tail
    Canvas7.fillStyle= 'rgba(215, 98, 9, 1)';
    Canvas7.lineWidth = 5;
    Canvas7.beginPath();
    Canvas7.moveTo(100,40);
    Canvas7.lineTo(150,100);
    Canvas7.lineTo(100,160);
    Canvas7.closePath();
    Canvas7.fill();
    //mouth
    Canvas7.strokeStyle= 'black';
    Canvas7.beginPath();
    Canvas7.moveTo(255,120);
    Canvas7.quadraticCurveTo(220,135, 200, 120);
    Canvas7.stroke();
};


