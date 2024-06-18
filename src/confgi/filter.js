



const filterTypeStr = (data, type) => {
    switch (type) {
        case 'scans':
            for (let i = 0; i < type.length; i++) {
                let temp = data[i][type]
                // console.log(temp);
                let new_data = temp.replaceAll("['SCAN:", "");
                new_data = new_data.replaceAll("']", "")
                data[i][type] = new_data
                // console.log(data[i][type]);
            }
            return data;

        default:
            break;
    }

}

export default filterTypeStr;