import { render } from "@testing-library/react";
import CandlestickChart from "../components/CandlestickChart";
import { beforeAll, test } from "vitest";
import { screen } from "@testing-library/dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChartContextProvider from "../context/ChartContext";

beforeAll(() => {
  const queryClient = new QueryClient();
  const series = [
    {
      name: "series-1",
      data: { x: new Date(), y: [10, 20, 5, 15] },
    },
  ];
  render(
    <QueryClientProvider client={queryClient}>
      <ChartContextProvider>
        <CandlestickChart series={series} />
      </ChartContextProvider>
    </QueryClientProvider>
  );
});

test("CandlestickChart component renders in the UI", () => {
  const element = screen.getByTestId("candlestick-chart");
  expect(element).toBeInTheDocument();
});
