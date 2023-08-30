function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
    }
    document.getElementById(cityName).style.display = "block";
   
  }


// FQ content
var OpenIcon=document.getElementById('openfirstFQ');
var OpenIcon2=document.getElementById('opensecondFQ');
var OpenIcon3=document.getElementById('openthirdFQ');
var thefirstcontentFQ=document.getElementById('thefirstcontentFQ');
var thesecondcontentFQ=document.getElementById('thesecondcontentFQ');
var thethirdcontentFQ=document.getElementById('thethirdcontentFQ');
OpenIcon.addEventListener('click',()=>{
  thefirstcontentFQ.classList.toggle("thefirstcontentFQ2");
});
OpenIcon2.addEventListener('click',()=>{
  thesecondcontentFQ.classList.toggle("thefirstcontentFQ2");
});
OpenIcon3.addEventListener('click',()=>{
  thethirdcontentFQ.classList.toggle("thefirstcontentFQ2");
});

// sidenav
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "180px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}