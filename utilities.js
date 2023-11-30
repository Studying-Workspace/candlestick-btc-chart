const DATA_PER_UPDATE = 50;

export const updateCandlestick = (series, setSeries, dataBatch) => {
    let updates = 0;

    const intervalId = setInterval(() => {
        const accumulated = accumulateFromBatch(dataBatch, DATA_PER_UPDATE * updates);
        const seriesCopy = series;
        const data = seriesCopy?.[0]?.data;
        const len = data.length;
        seriesCopy[0].data[len - 1] = {
            x: new Date(accumulated[0]),
            y: accumulated.slice(1)
        };
        setSeries(seriesCopy);
        updates++;
        if(updates === 6) {
            clearInterval(intervalId);
        }
    }, 1000 * 10);
}

const accumulateFromBatch = (dataBatch, startIndex) => {
    const result = new Array(5).fill(0); // [timestamp, low, high, open, close]

    result[3] = dataBatch[0][3];

    for(let i = startIndex; i < startIndex + DATA_PER_UPDATE; i++) {
        result[0] = dataBatch[i][0];
        result[1] = Math.min(result[1], dataBatch[i][1]);
        result[2] = Math.max(result[2], dataBatch[i][2]);
        result[4] = dataBatch[i][4];
    }

    return result;
}