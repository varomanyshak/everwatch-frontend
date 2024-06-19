const newScan = (scans) => {
    let num = 0;
    for (let i = 0; i < scans.length - 1; i++) {
        if (scans[i].scans !== scans[i + 1].scans) {
            num = i
        }
    }
    if (num != 0) { num = scans.length - num + 1 }
    return num
}

export default newScan;