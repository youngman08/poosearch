export const handleAdvancedButtonClick = () => {
  const BASICBUTTONDIV = document.getElementById("BasicButtonDiv");
  const ADVANCEDBUTTONDIV = document.getElementById("AdvancedButtonDiv");
  const ADVANCEDINPUTSEARCHDIV = document.getElementById("AdvancedInputSearchDiv");
  const advTab = document.getElementById("advTab");
  const BABody3 = document.getElementById("body3");
  const inputInSearchbar = document.getElementById("BAFirstINPUT");

  BASICBUTTONDIV.classList.add('myanimationB');
  ADVANCEDBUTTONDIV.classList.add('myanimationA');
  ADVANCEDINPUTSEARCHDIV.classList.add('myanimationI');
  ADVANCEDINPUTSEARCHDIV.classList.add('AdvancedInputSearchDivInAnimation');
  advTab.style.display = "flex";
  BABody3.style.height = "150px";
  inputInSearchbar.disabled = true;
  inputInSearchbar.style.backgroundColor = "rgba(15, 39, 65, 0.315)";
};