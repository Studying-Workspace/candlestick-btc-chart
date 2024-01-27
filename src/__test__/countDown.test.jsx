import { screen, waitFor } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { beforeAll, test } from "vitest";
import { describe } from "node:test";
import { expect } from "chai";
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
    counter = screen.getByTestId('countDown');
  });

  test("countdown start from 1 m", () => {
    expect(counter).toHaveTextContent("1m 00s");
  });

  test("countdown decrements correctly", async () => {
    await waitFor(
      () => {
        expect(screen.getByTestId("countDown").textContent).toBe("0m 59s");
      },
      { timeout: 1000 }
    );
  });
});
