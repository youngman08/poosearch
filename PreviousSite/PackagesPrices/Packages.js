var OpenIcon=document.getElementById('openFirstContent');
// var OpenIcon2=document.getElementById('opensecondFQ');
// var OpenIcon3=document.getElementById('openthirdFQ');
var thefirstcontent=document.getElementById('thefirstcontent');
// var thesecondcontentFQ=document.getElementById('thesecondcontentFQ');
// var thethirdcontentFQ=document.getElementById('thethirdcontentFQ');
OpenIcon.addEventListener('click',()=>{
    thefirstcontent.classList.toggle("firstcontent2");
});

// sidenav
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }