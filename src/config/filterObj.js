import axios from "axios";
var data;
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
            data = changeOBJ(res.data.values)
        })
    .catch(
        (err) => {
            console.log("Axios Error: ", err);
        });

export default data