function hereWeGo(){
    var v = document.getElementById("countryList");
    var fq;
    var countryName;
    var isSupported;
    for(let i = 0; i < 245; i++){
        if(allData[i].countryCode.toLowerCase() == v.options[v.selectedIndex].value){
            fq = allData[i].frequency;
            countryName = allData[i].countryName;
            isSupported = allData[i].supported;
            break;
        }
    }
    if(!fq || fq.length === 0){
        document.getElementById("finalValue").innerHTML = "Region data unavailable for " + countryName;
        document.getElementById("finalString").innerHTML = "";
    }
    else{
        document.getElementById("finalString").innerHTML = "The region for " + countryName + " is " + fq;
        if(isSupported){
            document.getElementById("finalValue").innerHTML = "This frequency of " + fq.substr(2,fq.length) + " is supported by Nebra";
        }
        else{
            document.getElementById("finalValue").innerHTML = "This frequency of " + fq.substr(2,fq.length) + " is not supported by Nebra";
        }
    }
}

window.hereWeGo = hereWeGo;