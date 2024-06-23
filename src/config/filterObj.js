import axios from "axios";
var data;

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

await axios.get(`http://localhost:3001/api`)
    .then(
        (res) => {
            data = changeOBJ(res.data)
        })
    .catch(
        (err) => {
            console.log("Axios Error: ", err);
        });

export default data