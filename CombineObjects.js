let a = {
    "data": [
        {
            "name": "Examination",
            "totPat": "2",
            "parameterVal": "Poor"
        },
        {
            "name": "Examination",
            "totPat": "1",
            "parameterVal": "Average"
        },
        {
            "name": "Examination",
            "totPat": "7",
            "parameterVal": "Good"
        },
        {
            "name": "Examination",
            "totPat": "10",
            "parameterVal": "Very Good"
        },
        {
            "name": "Examination",
            "totPat": "0",
            "parameterVal": "Excellent"
        },
        {
            "name": "Treatment",
            "totPat": "0",
            "parameterVal": "Poor"
        },
        {
            "name": "Treatment",
            "totPat": "0",
            "parameterVal": "Average"
        },
        {
            "name": "Treatment",
            "totPat": "0",
            "parameterVal": "Good"
        },
        {
            "name": "Treatment",
            "totPat": "0",
            "parameterVal": "Very Good"
        },
        {
            "name": "Treatment",
            "totPat": "0",
            "parameterVal": "Excellent"
        },
        {
            "name": "BedSide Manner",
            "totPat": "0",
            "parameterVal": "Poor"
        },
        {
            "name": "BedSide Manner",
            "totPat": "0",
            "parameterVal": "Average"
        },
        {
            "name": "BedSide Manner",
            "totPat": "0",
            "parameterVal": "Good"
        },
        {
            "name": "BedSide Manner",
            "totPat": "0",
            "parameterVal": "Very Good"
        },
        {
            "name": "BedSide Manner",
            "totPat": "0",
            "parameterVal": "Excellent"
        },
        {
            "name": "WaitTime",
            "totPat": "0",
            "parameterVal": "Poor"
        },
        {
            "name": "WaitTime",
            "totPat": "0",
            "parameterVal": "Average"
        },
        {
            "name": "WaitTime",
            "totPat": "0",
            "parameterVal": "Good"
        },
        {
            "name": "WaitTime",
            "totPat": "0",
            "parameterVal": "Very Good"
        },
        {
            "name": "WaitTime",
            "totPat": "0",
            "parameterVal": "Excellent"
        },
        {
            "name": "Facility Hygiene",
            "totPat": "0",
            "parameterVal": "Poor"
        },
        {
            "name": "Facility Hygiene",
            "totPat": "0",
            "parameterVal": "Average"
        },
        {
            "name": "Facility Hygiene",
            "totPat": "0",
            "parameterVal": "Good"
        },
        {
            "name": "Facility Hygiene",
            "totPat": "0",
            "parameterVal": "Very Good"
        },
        {
            "name": "Facility Hygiene",
            "totPat": "0",
            "parameterVal": "Excellent"
        },
        {
            "name": "Convenience",
            "totPat": "0",
            "parameterVal": "Poor"
        },
        {
            "name": "Convenience",
            "totPat": "0",
            "parameterVal": "Average"
        },
        {
            "name": "Convenience",
            "totPat": "0",
            "parameterVal": "Good"
        },
        {
            "name": "Convenience",
            "totPat": "0",
            "parameterVal": "Very Good"
        },
        {
            "name": "Convenience",
            "totPat": "0",
            "parameterVal": "Excellent"
        }
    ],
    "message": "Data Received",
    "status": "success"
}

const op = [];

// console.log(a.data.findIndex((obj) => obj.name == "Convenience"))
for (let i = 0; i < a.data.length; i++) {
    const { parameterVal, totPat, name } = a.data[i];
    const ind = op.findIndex((obj) => obj.name == name)
    ind >= 0 ? op[ind][parameterVal] = totPat : op.push({
        name,
        [parameterVal]: totPat
    })
}
console.log(op)