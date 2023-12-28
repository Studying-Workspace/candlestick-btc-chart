import { useQuery } from "@tanstack/react-query";
import { fetchCandlestickData } from "../services";

export function useInitialData(coin, timeUnit) {
  const { isLoading: isInitialDataLoading, data: initialData } = useQuery({
    queryKey: ["initial-price", coin, timeUnit],
    queryFn: async () => {
      return await fetchCandlestickData(coin, timeUnit);
    },
  });

  return { isInitialDataLoading, initialData };
}
