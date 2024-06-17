import axios from "axios";

var data
console.log("env:", process.env.REACT_APP_ACCESS_TOKEN)
const axiosConfig = {   
    headers: {  
      'Authorization': process.env.REACT_APP_ACCESS_TOKEN
      } 
  };
console.log("env", process.env.access_token)
await axios.get('https://sheets.googleapis.com/v4/spreadsheets/18e6tF5alQG5_ApSkXxKZA4lja6Zp5EljRkIKrDP-wB0/values/sompo_results_sample', axiosConfig)
.then(
    (res) => {
        data = res.data.values
    })
.catch(
    (err) => {
        console.log("Axios Error: ", err);
    });
console.log("data:", data)
export default data