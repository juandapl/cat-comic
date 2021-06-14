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

$(".uparrow").click(function () {
    window.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth'
    });
});

$(".uparrow2").click(function () {
    window.scrollBy({
        top: -window.innerHeight * 4,
        behavior: 'smooth'
    });
});

var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");

function playMain() {
    audio1.play();
    audio1.volume=0.5;
}

function volumeControl() {
    audio1.play();
    if (audio1.volume>0) {
        audio1.pause();
        audio1.volume=0;
        document.getElementById("audioicon").src="soundoff.svg";
    }
    else if (audio1.volume==0) {
        audio1.volume=0.2;
        audio1.play();
        document.getElementById("audioicon").src="soundon.png";
    }
}

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

function catWalk3() { //function to animate cat walking
    var s=0;
    var movingCatClass3 = document.getElementsByClassName("moving-cat-img-3"); //container with images
    var xVal = -200; //horizontal position of image
    var i=0; //image number
    var time = setInterval (frame, 150);
    function frame() {
        if (s>=25 && s<=50 || s>=60 && s<=95 || s>=120 && s<=155 || s>=190 && s<=215 || s>=225 && s<=565) { //if got to the needed x coordinate -> reset vals
            s+=1;
            if (s>=260) {
                document.getElementById("panel6-img").src="assets/panel6-final.png";
                document.getElementById("text61").style.opacity=0;
                document.getElementById("text62").style.opacity=0;
                document.getElementById("text63").style.opacity=0;
                document.getElementById("text64").style.opacity=0;
                document.getElementById("title6").innerHTML="It was all a dream. Cat was safe and well in the house."
                audio1.play();
            }
            if (s>=245) {
                document.getElementById("sitting-cat-img-2").style.opacity=1;
                movingCatClass3[i-1].style.display="none";
            }
        }
        else if (s>565) {
            clearInterval(time);
        }
        else {
            var x = xVal + "px";
            movingCatClass3[i].style.left=x; //x placement of image

            xVal += 10; //update x
            s+=1;

            if (i==0) { //image display properties update
                movingCatClass3[i].style.display="inline-flex";
                movingCatClass3[3].style.display="none";
            }
            else {
                movingCatClass3[i-1].style.display="none";
                movingCatClass3[i].style.display="inline-flex";
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
var overlay4 = document.getElementById("overlay4");
var overlay5 = document.getElementById("overlay5");
var overlay6 = document.getElementById("overlay6");
var textBubble = document.getElementsByClassName("textbubble");
// var coverLayer = document.getElementsByClassName("cover-layer");
var panelContainer = document.getElementsByClassName("panelcontainer");
// panelContainer.addEventListener("mouseover")
panel1.addEventListener("mouseover",showPanel1);
panel2.addEventListener("mouseover",showPanel2);
panel3.addEventListener("mouseover",showPanel3);
panel4.addEventListener("mouseover",showPanel4);
panel5.addEventListener("mouseover",showPanel5);
panel6.addEventListener("mouseover",showPanel6);

panel1Shown = false;
function showPanel1() {
    if(!panel1Shown)
    {
        audio1.play();
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
        panel1Shown = true;
    }
}

panel2shown = false;
function showPanel2() {
    if(!panel2shown)
    {
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
        panel2shown = true;
        catWalk();
        
    }
}

panel3shown = false;
function showPanel3() {
    if(!panel3shown)
    {
        opacityVal=0.9;
        opacityVal2=-2.5;
        var time = setInterval (frame, 150);
        function frame() {
            if (opacityVal2>=14) {
                audio1.pause();
                audio2.play();
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
    panel3shown = true;
    catWalk2();
    }
}

panel4shown = false;
function showPanel4() {
    if(!panel4shown)
    {
        opacityVal=0.9;
        opacityVal2=-3.5;
        var time = setInterval (frame, 100);
        function frame() {
            if(opacityVal2>=17) {
                clearInterval(time);
            }
            else {
                overlay4.style.opacity=opacityVal;
                opacityVal=opacityVal-0.1;
                document.getElementById("catface").style.opacity=opacityVal2+1;
                document.getElementById("text43").style.opacity=opacityVal2-2;
                document.getElementById("text42").style.opacity=opacityVal2-6;
                document.getElementById("text44").style.opacity=opacityVal2-10;
                document.getElementById("text45").style.opacity=opacityVal2-14;
                opacityVal2+=0.1;
            }
        }
    panel4shown = true;
    }
}

panel5shown = false;
function showPanel5() {
    if(!panel5shown)
    {
        opacityVal=0.9;
        opacityVal2=-3.5;
        var time = setInterval (frame, 100);
        function frame() {
            if(opacityVal2>=17) {
                clearInterval(time);
            }
            else {
                overlay5.style.opacity=opacityVal;
                opacityVal=opacityVal-0.1;
                document.getElementById("title5").style.opacity=opacityVal2;
                document.getElementById("cat-stairs").style.opacity=opacityVal2;
                document.getElementById("text51").style.opacity=opacityVal2-2;
                document.getElementById("text52").style.opacity=opacityVal2-6;
                document.getElementById("text53").style.opacity=opacityVal2-10;
                opacityVal2+=0.1;
            }
        }
    panel5shown = true;
    }
}


panel6shown = false;
function showPanel6() {
    if(!panel6shown)
    {
        opacityVal=0.9;
        opacityVal2=-2.5;
        var time = setInterval (frame, 150);
        function frame() {
            if(opacityVal2>=20) {
                clearInterval(time);
            }
            else {
                overlay6.style.opacity=opacityVal;
                opacityVal=opacityVal-0.1;
                document.getElementById("text61").style.opacity=opacityVal2;
                document.getElementById("text62").style.opacity=opacityVal2-4.5;
                document.getElementById("text63").style.opacity=opacityVal2-12;
                document.getElementById("text64").style.opacity=opacityVal2-21;
                opacityVal2+=0.1;
            }
        }
        panel6shown = true;
        catWalk3();
    }
}
