const fromSecondsToMilliseconds = (seconds) => seconds * 1000;
export const reorderDataRecord = (data, index) => {
    let result = [...data[index]]; // api response: [timestamp in seconds, low, high, open, close]
    // chart accepts: open - high - low - close

    // changing from [timestamp in seconds, low, high, open, close]
    // to [timestamp in milliseconds, open, high, low, close]
    result = [fromSecondsToMilliseconds(result[0]), result[3], result[2], result[1], result[4]];

    return result;
}

export const processDateRepresentation = (date) => {
    let options = {
        // Specify the locale as English
        locale: "en",
        // Specify the time zone as EEST
        timeZone: "Europe/Bucharest",
        // Specify the format of the date components
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };

    return new Date(date).toLocaleDateString(undefined, options);
}

let processData = (rawData, rowsToExtract) => {
    const processedData = [];
    rawData.forEach((_record, i) => {
        processedData.push(reorderDataRecord(rawData, i));
    });
    const len = processedData.length;
    return processedData.reverse().slice(len - rowsToExtract);
}

export const getStateFormat = (data) => {
    // To show the last 60 records (as candlesticks) initially in the chart
    return processData(data, 60).map((item) => {
        return {
            x: processDateRepresentation(item[0]),
            y: [...item.slice(1)]
        }
    })
};