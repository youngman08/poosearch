/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  } 

  // animation of searchbar
  var BASICBUTTONDIV = document.getElementById("BasicButtonDiv");
  var ADVANCEDBUTTONDIV=document.getElementById("AdvancedButtonDiv");
  var ADVANCEDINPUTSEARCHDIV=document.getElementById("AdvancedInputSearchDiv");
  var advTab=document.getElementById("advTab");
  var BABody3=document.getElementById("body3");
  var inputInSearchbar=document.getElementById("BAFirstINPUT");
  ADVANCEDBUTTONDIV.addEventListener("click",()=>{
   
       BASICBUTTONDIV.classList.add('myanimationB');
    ADVANCEDBUTTONDIV.classList.add('myanimationA');
    ADVANCEDINPUTSEARCHDIV.classList.add('myanimationI');
    ADVANCEDINPUTSEARCHDIV.classList.add('AdvancedInputSearchDivInAnimation');
    advTab.style.display="flex";
    BABody3.style.height="150px";
    inputInSearchbar.disabled=true;
    inputInSearchbar.style.backgroundColor="rgba(15, 39, 65, 0.315)";
  });

  // tab&tabcontent
  function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  } 

  // switch button in header
  let headerDayNight=document.getElementById("headerDayNight");
let darkmood=document.getElementById("darkmood");
let iconofimginday=document.getElementById("iconofimginday");
iconofimginday.classList.toggle('iconOfImgInDayy');
// get the id of header to change its style
let HeaderDayBa=document.getElementById('headerdayba'); 
let Body1NameLogoDayBa=document.getElementById('body1namelogodayba'); 
let Body1DayBa=document.getElementById('body1dayba'); 
let Body1AdvancedSearchBarDayBa=document.getElementById('body1advancedsearchbardayba'); 
let BasicSearchDayBa=document.getElementById('basicsearchdayba'); 
let AdvancedSearchDayBa=document.getElementById('advancedsearchdayba'); 
let Body2DayBa=document.getElementById('body2'); 
let Body4DayBa=document.getElementById('body4'); 
// get the id of body4 to delete the img in day mood
let ImgInbody4=document.getElementById('ImgInBody4'); 
// get the id of footer to to change its style
let BaFooterDayBa=document.getElementById('bafooterdayba'); 
// get the id of links in header 
let menuInDayMood = document.getElementById('menuInDayMood');
let ContactUsInDayMood = document.getElementById('ContactUsInDayMood');
let FQInDayMood = document.getElementById('F&QInDayMood');
let PackagesPricesInDayMood = document.getElementById('Packages&PricesInDayMood');
let SigninInDayMood = document.getElementById('SigninInDayMood');
let BookmarksInDayMood = document.getElementById('BookmarksInDayMood');
// get the id of links in footer 
let PrivacyPolicyInDaymood = document.getElementById('PrivacyPolicyInDaymood');
let divInfooterInDaymood = document.getElementById('divInfooterInDaymood');
let TermsOfInDaymood = document.getElementById('TermsOfInDaymood');

headerDayNight.addEventListener("click",()=>{
  darkmood.classList.toggle('lightmood');
  // change the style of header
  HeaderDayBa.classList.toggle('HEADERDAYBA');
  Body1NameLogoDayBa.classList.toggle('BODY1NAMELOGODAYBA');
  Body1DayBa.classList.toggle('BODY1DAYBA');
  Body1AdvancedSearchBarDayBa.classList.toggle('BODY1ADVANCEDSEARCHBARDAYBA');
  inputInSearchbar.classList.toggle('INPUTINSEARCHBAR');
  BASICBUTTONDIV.classList.toggle('BASICBUTTONDIVDAYBA');
  BasicSearchDayBa.classList.toggle('BASICSEARCHDAYBA');
  ADVANCEDBUTTONDIV.classList.toggle('ADVANCEDBUTTONDIVDAYBA');
  AdvancedSearchDayBa.classList.toggle('ADVANCEDSEARCHDAYBA');
  Body2DayBa.classList.toggle('BODY2DAYBA');
  BABody3.classList.toggle('BODY3DAYBA');
  Body4DayBa.classList.toggle('BODY4DAYBA');
  ImgInbody4.style.display="none";
  BaFooterDayBa.classList.toggle('BAFOOTERDAYBA');
  menuInDayMood.classList.toggle('headerlinkDay');
  ContactUsInDayMood.classList.toggle('headerlinkDay');
  FQInDayMood.classList.toggle('headerlinkDay');
  PackagesPricesInDayMood.classList.toggle('headerlinkDay');
  SigninInDayMood.classList.toggle('headerlinkDay');
  BookmarksInDayMood.classList.toggle('headerlinkDay');
  PrivacyPolicyInDaymood.classList.toggle('headerlinkDay');
  divInfooterInDaymood.classList.toggle('divInDayMood');
  TermsOfInDaymood.classList.toggle('headerlinkDay');
  
});


