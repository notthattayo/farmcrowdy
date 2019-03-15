var headerimages = ['h1.jpg', 'h3.jpg', 'h2.jpg'];
var changetext = ['Empowering farmers. <br>Together', "From subsistence farming <br> to farming as a business",'Growing our own food <br> for our children to eat',];
var arrowarea = document.getElementById("header-img");
var leftarrow = document.getElementById("left-arrow");
var rightarrow = document.getElementById("right-arrow");
var headertext = document.getElementById("texthead");
var playframe = document.getElementById('frameimg');
var playframeytb = document.getElementById('frame');
var testiarea = document.getElementById("testi");
var leftarroww = document.getElementById("left-arroww");
var rightarroww = document.getElementById("right-arroww");
var maintestimonial = document.getElementById("maintesti");
var testipic = document.querySelector("#testipic")
var testiname = document.getElementById("testiname")
var picmodal = document.getElementById("h2play")
var textmodal = document.getElementById("h2p")
var beforemodal = document.getElementById("before-modal")
var modal = document.getElementById("modal")
var closethemodal = document.getElementById("closemodal")
var header2 = document.getElementById("header2")
var asipic1 = document.getElementById("asi1")
var asipic2 = document.getElementById("asi2")
var asipic3 = document.getElementById("asi3")
var asipic4 = document.getElementById("asi4")
var asipic5 = document.getElementById("asi5")
var asipicstogether = document.querySelectorAll(".asipics")

var barclick = document.getElementById("bars");
var list = document.getElementById("listed");
var currentpic = 0;
var currenttext = 0;
var currenttestimonial = 0;
var i = 0;
var j = 0;
var time = 4000;
var time2 = 2000;
var mousein= false;
var testimonials =[{
    name:"julicit bali, Abuja",
    testi:"I have always wanted to invest in agriculture without getting my hands dirty and Farmcrowdy has given me the oppurtunity to do so.",
    image: "images/testi1.jpg"
},
{
    name:"Regina Blankson",
    testi:"I saw farm crowdy on linkedin and visited the website. Chatted with a customer care representative and got satisfactory answers to my questions. I am postively loving it and rooting for them. Go farm crowdy Go!!!",
    image: "images/testi2.jpg"
},
{
    name:"inih Essien, Abuja",
    testi:"A very competent and efficient company that does business with integrity. I Love farm crowdy and i would recommend them to others because i have been treated well",
    image: "images/testi3.jpg"
},
{
    name:"Adeyeye Oluwafemi",
    testi:"It's easy to sponsor a farm, and the bi weekly update is very good on the sponsored farm. Farm crowdy will reduce food importation and famine in Nigeria.",
    image: "images/testi4.jpg"
},
];

var asiimages=["asi1.jpg","asi2.jpg", "asi3.jpg", "asi4.jpg", "asi5.jpg", "asi6.jpg","asi7.jpg","asi8.jpg","asi9.jpg","asi10.jpg"]

arrowarea.addEventListener("mouseenter", mouse1)
arrowarea.addEventListener("mouseleave", mouse2)
leftarrow.addEventListener("click",previmage)
rightarrow.addEventListener("click",nextimage)
playframe.addEventListener("click", play)
testiarea.addEventListener("mouseenter", mouse11)
testiarea.addEventListener("mouseleave", mouse22)
leftarroww.addEventListener("click",prevtesti)
rightarroww.addEventListener("click",nexttesti)
picmodal.addEventListener("click", modalfunc)
textmodal.addEventListener('click', modalfunc)
closethemodal.addEventListener("click",closemodalfunc)
asipic1.addEventListener("mouseenter", asi1color)
asipic1.addEventListener("mouseleave", asi1uncolor)
asipic2.addEventListener("mouseenter", asi2color)
asipic2.addEventListener("mouseleave", asi2uncolor)
asipic3.addEventListener("mouseenter", asi3color)
asipic3.addEventListener("mouseleave", asi3uncolor)
asipic4.addEventListener("mouseenter", asi4color)
asipic4.addEventListener("mouseleave", asi4uncolor)
asipic5.addEventListener("mouseenter", asi5color)
asipic5.addEventListener("mouseleave", asi5uncolor)




slide();
asimove();
function mouse1() {
    leftarrow.style.opacity = "1";
    rightarrow.style.opacity = "1";
}
function mouse2() {
    leftarrow.style.opacity = "0";
    rightarrow.style.opacity = "0";
}
function previmage() {
    if(currentpic == 0){
        currentpic = 2;
        currenttext = 2;
        arrowarea.style.backgroundImage =  'url' + "(images/"+ headerimages[currentpic]+')'; 
        headertext.innerHTML = changetext[currenttext];
    }
    else {
        currentpic--;
        currenttext--;
        testipic.style.backgroundImage =  'url' + "(images/"+ headerimages[currentpic]+')';
        headertext.innerHTML = changetext[currenttext];
    }
}
function nextimage() {
    if(currentpic == 2){
        currentpic = 0;
        currenttext = 0;
        arrowarea.style.backgroundImage =  'url' + "(images/"+ headerimages[currentpic]+')'; 
        headertext.innerHTML = changetext[currenttext];
    }
    else {
        currentpic++;
        currenttext++;
        arrowarea.style.backgroundImage =  'url' + "(images/"+ headerimages[currentpic]+')';
        headertext.innerHTML = changetext[currenttext];
    }
}

function play(){
    playframe.style.display = 'none';
    playframeytb.style.display = 'block';

}
function mouse11() {
    leftarroww.style.opacity = "1";
    rightarroww.style.opacity = "1";
    mousein=true;
    console.log(mousein);
    
    
}
function mouse22() {
    leftarroww.style.opacity = "0";
    rightarroww.style.opacity = "0";
    mousein=false;
    slide();
   
}


function slide(){
    if(mousein == false){
    i++
    if(i >= testimonials.length){
        i=0;
    }
    testipic.setAttribute("src", testimonials[i].image); 
    maintesti.innerHTML = testimonials[i].testi;
    testiname.innerHTML = testimonials[i].name;
    setTimeout("slide()", time);
    console.log(i);
    }
        
    }


function prevtesti(){
    if(currenttestimonial == 0){
        currenttestimonial = 3 ;
        testipic.setAttribute("src", testimonials[currenttestimonial].image);  
        maintesti.innerHTML = testimonials[currenttestimonial].testi;
        testiname.innerHTML = testimonials[currenttestimonial].name;
    }
    else {
        currenttestimonial--;
        testipic.setAttribute("src",testimonials[currenttestimonial].image); 
        maintesti.innerHTML = testimonials[currenttestimonial].testi;;
        testiname.innerHTML = testimonials[currenttestimonial].name;;
}
}
function nexttesti(){
    if(currenttestimonial == 3){
        currenttestimonial = 0 ;
        testipic.setAttribute("src", testimonials[currenttestimonial].image);  
        maintesti.innerHTML = testimonials[currenttestimonial].testi;
        testiname.innerHTML = testimonials[currenttestimonial].name;
    }
    else {
        currenttestimonial++;
        testipic.setAttribute("src",testimonials[currenttestimonial].image); 
        maintesti.innerHTML = testimonials[currenttestimonial].testi;;
        testiname.innerHTML = testimonials[currenttestimonial].name;;
}
}

function modalfunc(){
    console.log("modal clicked")
    beforemodal.style.opacity="0.2";
    modal.style.display="inherit";
}

function closemodalfunc(){
    console.log("type")
    beforemodal.style.opacity="1";
    modal.style.display="none";
}

function asi1color(){
    asipic1.style.filter="grayscale(1%)";
}
function asi1uncolor(){
    asipic1.style.filter="grayscale(100%)";
}
function asi2color(){
    asipic2.style.filter="grayscale(1%)";
}
function asi2uncolor(){
    asipic2.style.filter="grayscale(100%)";
}
function asi3color(){
    asipic3.style.filter="grayscale(1%)";
}
function asi3uncolor(){
    asipic3.style.filter="grayscale(100%)";
}
function asi4color(){
    asipic4.style.filter="grayscale(1%)";
}
function asi4uncolor(){
    asipic4.style.filter="grayscale(100%)";
}
function asi5color(){
    asipic5.style.filter="grayscale(1%)";
}
function asi5uncolor(){
    asipic5.style.filter="grayscale(100%)";
}
function asimove(){
    j++
    if(j%2==1){
    asipic1.setAttribute("src", "images/" +asiimages[5]); 
    asipic2.setAttribute("src", "images/" +asiimages[6]); 
    asipic3.setAttribute("src", "images/" +asiimages[7]); 
    asipic4.setAttribute("src", "images/" +asiimages[8]); 
    asipic5.setAttribute("src", "images/" +asiimages[9]); 
    setTimeout("asimove()", time2);
    console.log(j);
    }
    else if(j%2==0){
        {
            asipic1.setAttribute("src", "images/" +asiimages[0]); 
            asipic2.setAttribute("src", "images/" +asiimages[1]); 
            asipic3.setAttribute("src", "images/" +asiimages[2]); 
            asipic4.setAttribute("src", "images/" +asiimages[3]); 
            asipic5.setAttribute("src", "images/" +asiimages[4]); 
            setTimeout("asimove()", time2);
            console.log(j);
            } 
    }
    barclick.addEventListener("click", showlist);
function showlist(){
    if(listed.style.display=="none"){
        listed.style.display = "block";
}
else if(listed.style.display!=="none") {
    listed.style.display ="none";
}
}
}
