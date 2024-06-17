import axios from "axios";

var data;
var filterData = {};
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


const changeOBJ = (ary) => {
    let resData=[];
    for (let i = 1; i < ary.length; i++) {
        let obj = {}
        for (let j = 0; j < ary[i].length; j++) {
            obj[ary[0][j]] = ary[i][j]
        }
        resData.push(obj)
    }
    return resData
}

let ASN = data.filter(item => (item[14] == "ASN")); ASN.unshift(data[0]); filterData.ASN = changeOBJ(ASN);
let Azure = data.filter(item => (item[14] == "AZURE_TENANT")); Azure.unshift(data[0]); filterData.Azure = changeOBJ(Azure);
let GEOLOCATION = data.filter(item => (item[14] == "GEOLOCATION")); GEOLOCATION.unshift(data[0]); filterData.GEOLOCATION = changeOBJ(GEOLOCATION);
let CodeRepo = data.filter(item => (item[14] == "CODE_REPOSITORY")); CodeRepo.unshift(data[0]); filterData.CodeRepo = changeOBJ(CodeRepo);
    console.log(changeOBJ(CodeRepo));


export default filterData