export const fetchCandlestickData = async (coinId, interval) => {
    let url = `https://api.pro.coinbase.com/products/${coinId}-USD/candles/${interval}`;
    const response = await fetch(url);
    return await response.json();
}