import axios from "axios";
import filterTypeStr from "./config/filter";
import common from "./config/common";

var data;
var filterData = {};
const axiosConfig = {
    headers: {
        'Authorization': process.env.REACT_APP_ACCESS_TOKEN
    }
};

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

await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1_GxPa5ZDLRVscL3H0dXysMWRmA95PbOxmfzL2dKeimc/values/sompo_results_sample2', axiosConfig)
    .then(
        (res) => {
            data = res.data.values
        })
    .catch(
        (err) => {
            console.log("Axios Error: ", err);
        });

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
    filterData.OpenTcp = []
    filterData.Technology = []
    filterData.Gurl = []

} else {
    let ASN = data.filter(item => (item[14] == "ASN"));
    ASN.unshift(data[0]);
    filterData.ASN = common.asnExtractValues((asnData(changeOBJ(ASN))))
    let Azure = data.filter(item => (item[14] == "AZURE_TENANT"));
    Azure.unshift(data[0]); filterData.Azure = changeOBJ(Azure);
    filterData.Azure = (asnData(changeOBJ(Azure)));
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
    let OpenTcp = data.filter(item => (item[14] == "OPEN_TCP_PORT"))
    OpenTcp.unshift(data[0])
    filterData.OpenTcp = common.TcpPortExtractValues(changeOBJ(OpenTcp))
    let Technology = data.filter(item => (item[14] == "TECHNOLOGY"))
    Technology.unshift(data[0])
    filterData.Technology = asnData(changeOBJ(Technology))

    let Gurl = data.filter(item => (item[14] == "URL"))
    Gurl.unshift(data[0])
    filterData.Gurl = changeOBJ(Gurl)

    let Find = data.filter(item => (item[14] == "FINDING"))
    Find.unshift(data[0])
    filterData.Find = (changeOBJ(Find))

    let Org = data.filter(item => (item[14] == "ORG_STUB"))
    Org.unshift(data[0])
    filterData.Org = (changeOBJ(Org))
    
    let Scan = data.filter(item => (item[14] == "SCAN"))
    Scan.unshift(data[0])
    filterData.Scan = (changeOBJ(Scan))

}

export default filterData