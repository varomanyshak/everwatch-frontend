import axios from "axios";

var data;
var filterData = {}, resData = [], tableObj = {};
console.log("env:", process.env.REACT_APP_ACCESS_TOKEN)
const axiosConfig = {
    headers: {
        'Authorization': process.env.REACT_APP_ACCESS_TOKEN
    }
};
// console.log("env", process.env.access_token)
await axios.get('https://sheets.googleapis.com/v4/spreadsheets/18e6tF5alQG5_ApSkXxKZA4lja6Zp5EljRkIKrDP-wB0/values/sompo_results_sample', axiosConfig)
    .then(
        (res) => {
            data = res.data.values
        })
    .catch(
        (err) => {
            console.log("Axios Error: ", err);
        });

let ASN = data.filter(item => (item[14] == "ASN"))
ASN.unshift(data[0])
for (let i = 1; i < ASN.length; i++) {
    let obj = {}
    for (let j = 0; j < ASN[i].length; j++) {
        obj[ASN[0][j]] = ASN[i][j]
    }
    resData.push(obj)
}
filterData.ASN = resData;

export default filterData