$(".arrow").click(function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});
$(".arrow2").click(function () {
    window.scrollBy({
        top: window.innerHeight * 4,
        behavior: 'smooth'
    });
});

function catWalk() { //function to animate cat walking
    var movingCatClass = document.getElementsByClassName("moving-cat-img"); //container with images
    var xVal = -80; //horizontal position of image
    var i=0; //image number
    var time = setInterval (frame, 150);
    function frame() {
        if (xVal==0) { //if got to the needed x coordinate -> reset vals
            clearInterval(time); 
            xVal = -220;
        }
        else {
            var x = xVal + "%";
            movingCatClass[i].style.left=x; //x placement of image

            xVal += 5; //update x

            if (i==0) { //image display properties update
                movingCatClass[i].style.display="inline-flex";
                movingCatClass[3].style.display="none";
            }
            else {
                movingCatClass[i-1].style.display="none";
                movingCatClass[i].style.display="inline-flex";
            }

            i=i+1; //update image number

            if (i==4) { //if image number > actual number of images -> start over
                i=0;
            }
        }
    }   
}

function catWalk2() { //function to animate cat walking
    var movingCatClass2 = document.getElementsByClassName("moving-cat-img-2"); //container with images
    var xVal = 0; //horizontal position of image
    var i=0; //image number
    var time = setInterval (frame, 150);
    function frame() {
        if (xVal==915) { //if got to the needed x coordinate -> reset vals
            clearInterval(time); 
            // movingCatClass2[i-1].style.display="none";
            // movingCatClass2[i].style.display="flex";
            var opacityVal=4;
            var opacityVal2=-4.6;
            var time2 = setInterval (frame2, 25);
            function frame2() {
                if (opacityVal2==1) {
                    clearInterval(time2);
                }
                else {
                    movingCatClass2[i-1].style.opacity=opacityVal;
                    opacityVal-=0.1;
                    document.getElementById("sitting-cat-img").style.opacity=opacityVal2;
                    opacityVal2+=0.1;
                }
            }
        }
        else {
            var x = xVal + "px";
            movingCatClass2[i].style.left=x; //x placement of image

            xVal += 15; //update x

            if (i==0) { //image display properties update
                movingCatClass2[i].style.display="flex";
                movingCatClass2[3].style.display="none";
            }
            else {
                movingCatClass2[i-1].style.display="none";
                movingCatClass2[i].style.display="flex";
            }

            i=i+1; //update image number

            if (i==4) { //if image number > actual number of images -> start over
                i=0;
            }
        }
    }   
}

// function freeFall() {
//     var opacityVal=5;
//     var opacityVal2=-5;

//     var time = setInterval (frame, 150);

//     function frame() {
//         if (opacityVal2>=1) {
//             clearInterval(time);
//             var yVal=40;
//             var degreeTurn=0;
//             var time2 = setInterval (frame2, 25);
//             function frame2() {
//                 if (yVal>=300) {
//                     clearInterval(time2);
//                 }
//                 else {
//                     degree="rotate("+degreeTurn+"deg)";
//                     document.getElementById("falling-cat-img").style.transform="rotate(45deg)";
//                     degreeTurn+=45;
//                     y=yVal+"px";
//                     document.getElementById("falling-cat-img").style.top=y;
//                     yVal+=10;
//                 }
//         }
//         else {
//             document.getElementById("sitting-cat-img").style.opacity=opacityVal;
//             opacityVal-=0.1;
//             document.getElementById("falling-cat-img").style.opacity=opacityVal2;
//             opacityVal2+=0.1;
//         }
//     }
// }

var panel1 = document.getElementById("panel1");
var panel2 = document.getElementById("panel2");
var panel3 = document.getElementById("panel3");
var panel4 = document.getElementById("panel4");
var panel5 = document.getElementById("panel5");
var panel6 = document.getElementById("panel6");

var overlay1 = document.getElementById("overlay1");
var overlay2 = document.getElementById("overlay2");
var overlay3 = document.getElementById("overlay3");
var textBubble = document.getElementsByClassName("textbubble");
// var coverLayer = document.getElementsByClassName("cover-layer");
var panelContainer = document.getElementsByClassName("panelcontainer");
// panelContainer.addEventListener("mouseover")
panel1.addEventListener("mouseover",showPanel1);
panel2.addEventListener("mouseover",showPanel2);
panel3.addEventListener("mouseover",showPanel3);


function showPanel1() {
    var opacityVal=0.9;
    var opacityVal2=-1.5;
    var time = setInterval (frame, 100);
    function frame() {
        if (opacityVal==0) {
            clearInterval(time);
        }
        else {
            overlay1.style.opacity=opacityVal;
            opacityVal-=0.1;
            document.getElementById("text1").style.opacity=opacityVal2;
            document.getElementById("text2").style.opacity=opacityVal2-2;
            opacityVal2+=0.1;
        }
    
    }
    
}

function showPanel2() {
    opacityVal=0.9;
    opacityVal2=-1.5;
    var time = setInterval (frame, 150);
    function frame() {
        overlay2.style.opacity=opacityVal;
        opacityVal=opacityVal-0.1;
        document.getElementById("text3").style.opacity=opacityVal2;
        document.getElementById("text4").style.opacity=opacityVal2-1.5;
        document.getElementById("text6").style.opacity=opacityVal2-3;
        opacityVal2+=0.1;
    }
    catWalk();
}

function showPanel3() {
    opacityVal=0.9;
    opacityVal2=-2.5;
    var time = setInterval (frame, 150);
    function frame() {
        if (opacityVal2>=14) {
            var yVal = 40;
            var degreeTurn = 0;
            clearInterval(time);
            time=setInterval(frame2, 50);
            function frame2() {
                if (yVal>=600) {
                    clearInterval(time);
                }
                else {
                    y=yVal+"%";
                    document.getElementById("falling-cat-img").style.opacity=1;
                    document.getElementById("title3").style.opacity=0;
                    overlay3.style.opacity=0.9;
                    document.getElementById("falling-cat-img").style.top=y;
                    window.scrollBy({
                        top: window.innerHeight*2.5+75,
                        behavior: 'smooth'
                    });
                    degree="rotate("+degreeTurn+"deg)";
                    document.getElementById("falling-cat-img").style.transform=degree;
                    degreeTurn+=45;

                    yVal+=10;
                }
            }
        }
        else {
            overlay3.style.opacity=opacityVal;
            opacityVal=opacityVal-0.1;
            document.getElementById("text31").style.opacity=opacityVal2;
            document.getElementById("text32").style.opacity=opacityVal2-3.75;
            document.getElementById("text33").style.opacity=opacityVal2-7.75;
            document.getElementById("text34").style.opacity=opacityVal2-11.25;
            opacityVal2+=0.1;
        }
    }
    catWalk2();
}

function showPanel4() {}
