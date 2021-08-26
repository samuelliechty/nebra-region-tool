const fs = require('fs');
const csv = require('csvtojson');

console.log("hello world");

(async () => {
    const allData = await csv().fromFile("countryData.csv");
    console.log(allData);
})();