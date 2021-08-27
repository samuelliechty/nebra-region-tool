function hereWeGo(){
    console.log(allData[244]);
    var v = document.getElementById("countryList");
    var fq;
    var countryName;
    for(let i = 0; i < 245; i++){
        if(allData[i].countryCode.toLowerCase() == v.options[v.selectedIndex].value){
            fq = allData[i].frequency;
            countryName = allData[i].countryName;
            break;
        }
    }
    console.log(fq);
    document.getElementById("finalString").innerHTML = "The region for " + countryName + " is " + fq;
    document.getElementById("finalValue").innerHTML = "The proper frequency for your selected region is " + fq.slice(2,5);
}

window.hereWeGo = hereWeGo;