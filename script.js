// console.log("script is running");

document.querySelector('.cross').style.display='none';

document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');

    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        setTimeout(()=>{
            document.querySelector('.ham').style.display='inline';
            document.querySelector('.cross').style.display='none';
        },250)
       
    } else {
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';
            document.querySelector('.ham').style.display='none';
        },320)
        
    }
})



//js of mypic hover--------->



// setTimeout(mouseEnter,1000);
//I want to add slowly blurring effect of the backgorund of the mt image but this is not happening right now so try may be later
//but try surely

// document.querySelector("#mypic1").addEventListener("mouseenter",mouseEnter);
// function mouseEnter() {
//     // console.log("mouse is inside")
//     document.getElementById("mypic1").src = "./myimg2.png";
//   }



// document.querySelector("#mypic1").addEventListener("mouseleave",mouseLeave);
// function mouseLeave(){
//     // console.log("mouse outside");
//     document.getElementById("mypic1").src="./IMG_6172.jpg";
// }



//js of darkmode------------->

  document.querySelector("#click2").style.display="none";
  document.querySelector("#btn").addEventListener('click',()=>{
    if ( document.querySelector(".body").style.backgroundColor==="white") {

        // all of the below things happen when we are turnin dark mode

        document.querySelector(".body").style.backgroundColor="black";
        document.querySelector(".body").style.color="white";

        document.querySelector("#click1").style.display="none";
        document.querySelector("#click2").style.display="inline";
        document.querySelector("#click2").style.color="white";
        

        document.querySelector(".myinfo").style.color="white";
        document.querySelector(".ham").style.backgroundColor="royalblue";
        document.querySelector(".ham").style.border="2px solid royalblue"
        document.querySelector(".ham").style.borderRadius="7px";

        document.getElementById("mypic1").src="./IMG_6172.jpg";

        document.getElementById("name").style="inline";

        document.querySelector(".mypic img").style="inline";
        

       
        
        
    } else {
        // all of the below things happen when we are turnin light mode


        document.querySelector(".body").style.backgroundColor="white";
        document.querySelector(".body").style.color="black";

        document.querySelector("#click2").style.display="none";
        document.querySelector("#click1").style.color="black";
    
        document.querySelector("#click1").style.display="inline";

        document.querySelector(".myinfo").style.color="black";

        document.querySelector(".mypic img").style.boxShadow= "0";

        document.getElementById("mypic1").src = "./myimg2.png";

        document.getElementById("name").style.textShadow="0px 0px 0px white";
        document.getElementById("name").style.color="black";

        document.querySelector(".mypic img").style.boxShadow="0px 0px 0px white";
        document.querySelector(".mypic img").style.border="5px solid black";
        

    }
  })

  
