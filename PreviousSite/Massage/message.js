var OpenIcon=document.getElementById('firstmessage');
var OpenIcon2=document.getElementById('secondmessage');
var OpenIcon3=document.getElementById('thirdmessage');
var OpenIcon4=document.getElementById('forthmessage');
var thefirstcontentofenvelop=document.getElementById('thefirstcontentofenvelop');
var thesecondcontentofenvelop=document.getElementById('thesecondcontentofenvelop');
var thethirdcontentofenvelop=document.getElementById('thethirdcontentofenvelop');
var theforthcontentofenvelop=document.getElementById('theforthcontentofenvelop');
OpenIcon.addEventListener('click',()=>{
    thefirstcontentofenvelop.classList.toggle("thecontentofenvelop2");
});
OpenIcon2.addEventListener('click',()=>{
    thesecondcontentofenvelop.classList.toggle("thecontentofenvelop2");
});
OpenIcon3.addEventListener('click',()=>{
    thethirdcontentofenvelop.classList.toggle("thecontentofenvelop2");
});
OpenIcon4.addEventListener('click',()=>{
    theforthcontentofenvelop.classList.toggle("thecontentofenvelop2");
});

// tab
function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
  }

  // sidenav
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

