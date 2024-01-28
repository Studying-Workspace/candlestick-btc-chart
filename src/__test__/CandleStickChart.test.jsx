import { render } from "@testing-library/react";
import CandlestickChart from "../components/CandlestickChart";
import { beforeAll, test } from "vitest";
import { screen } from "@testing-library/dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChartContextProvider from "../context/ChartContext";

beforeAll(() => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <ChartContextProvider>
        <CandlestickChart />
      </ChartContextProvider>
    </QueryClientProvider>
  );
});

test("CandlestickChart component renders in the UI", () => {
  const element = screen.getByTestId("candlestick-chart");
  expect(element).toBeInTheDocument();
});
