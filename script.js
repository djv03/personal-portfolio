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

onmouseenter=document.getElementsByClassName("mypic").src='./myimg2.png';

  onmouseout= document.querySelector(".mypic").src='./IMG_6172.jpg';



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
        document.querySelector(".ham").style.filter="none";

        document.querySelector(".myinfo").style.color="white";
        
       
   
        
    } else {
        // all of the below things happen when we are turnin light mode


        document.querySelector(".body").style.backgroundColor="white";
        document.querySelector(".body").style.color="black";

        document.querySelector("#click2").style.display="none";
        document.querySelector("#click1").style.color="black";
    
        document.querySelector("#click1").style.display="inline";

        document.querySelector(".mypic img").style.boxShadow= "0";
        document.querySelector(".mypic img").style.border= "2px solid red"
       

    
  
    }
  })

  
