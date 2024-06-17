import axios from "axios";

var data;
var filterData = {};
const axiosConfig = {
    headers: {
        'Authorization': process.env.REACT_APP_ACCESS_TOKEN
    }
};
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
    let resData = [];
    for (let i = 1; i < ary.length; i++) {
        let obj = {}
        for (let j = 0; j < ary[i].length; j++) {
            obj[ary[0][j]] = ary[i][j]
        }
        resData.push(obj)
    }
    return resData
}
const asnData = (ary) => {
    for (let i = 0; i < ary.length; i++) {
        let str = ary[i]._data;
        let jsonStr = str.replaceAll("'", '"')
        ary[i]._data = JSON.parse(jsonStr);
    }
    return ary
}

if (data === undefined) {
    filterData.ASN = []
    filterData.Azure = []
    filterData.GEOLOCATION = []
    filterData.CodeRepo = []
    filterData.DNS = []
    filterData.EmailAddress = []
} else {
    let ASN = data.filter(item => (item[14] == "ASN"));
    ASN.unshift(data[0]);
    filterData.ASN = (asnData(changeOBJ(ASN)));
    let Azure = data.filter(item => (item[14] == "AZURE_TENANT"));
    Azure.unshift(data[0]); filterData.Azure = changeOBJ(Azure);
    let GEOLOCATION = data.filter(item => (item[14] == "GEOLOCATION"))
    GEOLOCATION.unshift(data[0])
    filterData.GEOLOCATION = changeOBJ(GEOLOCATION);
    let CodeRepo = data.filter(item => (item[14] == "CODE_REPOSITORY"))
    CodeRepo.unshift(data[0])
    filterData.CodeRepo = changeOBJ(CodeRepo);
    let DNS = data.filter(item => (item[14] == "DNS_NAME"))
    DNS.unshift(data[0])
    filterData.DNS = changeOBJ(DNS);
    let EmailAddress = data.filter(item => (item[14] == "EMAIL_ADDRESS"))
    EmailAddress.unshift(data[0])
    filterData.EmailAddress = changeOBJ(EmailAddress);
}

export default filterData