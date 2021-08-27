const fs = require('fs');
const csv = require('csvtojson');

console.log("hello world");
var allData;

(async () => {
    allData = await csv().fromFile("./countryData.csv");
    console.log(allData[244]);
})();
//max index for json is 244

function hereWeGo() {
    var v = document.getElementById("countryList");
    var fq;
    (async () => {
        allData = await csv().fromFile("./countryData.csv");
        for(let i = 0; i < 245; i++){
            if(allData[i].countryCode.toLowerCase() == v.options[v.selectedIndex].value){
                fq = allData[i].frequency;
            }
        }
        console.log(fq);
    })();
};