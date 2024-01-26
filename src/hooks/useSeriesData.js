import {useQuery} from "@tanstack/react-query";
import {fetchCandlestickData} from "../services";

export function useSeriesData(coin, timeUnit) {
    const {isLoading: isSeriesDataLoading, data: seriesData} = useQuery({
        queryKey: ["price-1m", coin, timeUnit],
        queryFn: async () => {
            return await fetchCandlestickData(coin, timeUnit);
        },
        refetchInterval: 60 * 1000,
        refetchIntervalInBackground: true,
        refetchOnWindowFocus: true,
    });

    return {isSeriesDataLoading, seriesData};
}
