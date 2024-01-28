import { screen, waitFor } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { test } from "vitest";
import CountDownContainer from "../components/CountDown/CountDownContainer";
import ChartContextProvider from "../context/ChartContext";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";

describe("CountDown component", () => {
  let counter;
  beforeEach(() => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <ChartContextProvider>
          <CountDownContainer seconds={60} />
        </ChartContextProvider>
      </QueryClientProvider>
    );
    counter = screen.getByTestId("countDown");
  });

  it("should start initially from 1 m", () => {
    expect(counter).toHaveTextContent("1m 00s");
  });

  it("should decrease the number each second correctly", async () => {
    await waitFor(
      () => {
        expect(screen.getByTestId("countDown").textContent).toBe("0m 59s");
      },
      { timeout: 1000 }
    );
  });

  it("should end the minute at 1m 00s", async () => {
    await waitFor(
      () => {
        expect(screen.getByTestId("countDown").textContent).toBe("1m 00s");
      },
      { timeout: 60 * 1000 }
    );
  });
});
