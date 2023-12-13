//fucntion to include html popup code
function includePopupHTML(){
    let html='<div id="vis-popup"><span id="close"><img id="npop" onclick="closePopUp()"  src="images/cross.png" alt=""></span><img src="images/left-arrow.png" alt="" id="leftarrow"><img src="images/right-arrow.png" alt="" id="rightarrow"><img src="images/mountain.jpg" alt="" id="mainPopImage"></div>'

    let popdiv=document.createElement("div");
    popdiv.innerHTML=html;
    document.body.insertBefore(popdiv,document.body.firstChild);
}
//function to init plugin
let image;
let current=1;
function imagePopupInit(target){
    //select all images with class target
    includePopupHTML();
    image=document.getElementsByClassName(target);
    
    //add event listener on all selected images
    for(var i=0;i<image.length;i++){
        image[i].style.cursor='pointer';
        //add event listner
        image[i].addEventListener("click",function(){
            current=i;
            document.getElementById("mainPopImage").src=this.src;
            document.getElementById("vis-popup").style.display='block';
            checkArrow();
        });
        
    }

    //next button
    document.getElementById('rightarrow').addEventListener('click',function(){
        nextimg();
    });

    //previous button
    document.getElementById('leftarrow').addEventListener('click',function(){
        previousimg()
    });

}

function closePopUp(){
    document.getElementById("mainPopImage").src="";
    document.getElementById("vis-popup").style.display='none';
}

function getCurrentImage(){
    for(var i=0;i<image.length;i++){
        if(image[i].src==document.getElementById("mainPopImage").src){
            current=i;
        }
    }
}


//next image

function nextimg(){
    getCurrentImage();
    current++;
    if(current<image.length){
        document.getElementById("mainPopImage").src=image[current].src; 
    }
    checkArrow();
    
}


//previous image

function previousimg(){
    getCurrentImage();
    current--;
    if(current>=0){
        document.getElementById("mainPopImage").src=image[current].src;
    }
    checkArrow();
}

//hide and show left and right arrow
function checkArrow(){
    getCurrentImage();
    if(current==0){
        document.getElementById("leftarrow").style.display='none';
        document.getElementById("rightarrow").style.display='block';
    }
    else if(current==image.length-1){
        document.getElementById("leftarrow").style.display='block';
        document.getElementById("rightarrow").style.display='none';
    }
    else{
        document.getElementById("leftarrow").style.display='block';
        document.getElementById("rightarrow").style.display='block';
    }        
    
}

