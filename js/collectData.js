function hereWeGo() {
    var v = document.getElementById("countryList");
    document.getElementById("finalValue").innerHTML = v.options[v.selectedIndex].value;
    document.getElementById("finalString").innerHTML = v.options[v.selectedIndex].text;
  };