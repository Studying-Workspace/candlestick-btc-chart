
export const updateCandlestick = (series, setSeries, dataBatch) => {
    let updates = 1;
    let accumulated = accumulateFromBatch(dataBatch, 0);
    const DATA_PER_UPDATE = 50;

    const updateRoutine = () => {
        accumulated = accumulateFromBatch(dataBatch, DATA_PER_UPDATE * updates);
        makeUpdate(accumulated, series, setSeries);
        updates++;
        if (updates < 6) {
            setTimeout(updateRoutine, 1000 * 10);
        }
    }

    setTimeout(updateRoutine, 1000 * 10);
}

export const accumulateFromBatch = (dataBatch, startIndex, DATA_PER_UPDATE = 50) => {
    let result = new Array(5).fill(0); // [timestamp, low, high, open, close]
    // chart: open - high - low - close

    result[3] = dataBatch?.[startIndex][3];
    result[1] = Number.MAX_SAFE_INTEGER;

    for (let i = startIndex; i < Math.min(300, startIndex + DATA_PER_UPDATE); i++) {
        result[0] = dataBatch[i][0];
        result[1] = Math.min(result[1], dataBatch[i][1]);
        result[2] = Math.max(result[2], dataBatch[i][2]);
        result[4] = dataBatch[i][4];
    }

    // changing from [timestamp, low, high, open, close]
    // to [timestamp, open, high, low, close]
    result = [result[0] * 1000, result[3], result[2], result[1], result[4]];

    return result;
}

const makeUpdate = (accumulated, series, setSeries) => {
    // update the last candlestick in the series with the new data
    let newSeries = [...series];
    const len = newSeries[0].data.length;
    newSeries[0].data[len - 1] = {
        x: new Date(accumulated[0]),
        y: accumulated.slice(1)
    };
    setSeries(newSeries);
}