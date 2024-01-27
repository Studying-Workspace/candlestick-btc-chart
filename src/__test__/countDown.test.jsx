import { screen, waitFor } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { beforeAll, test } from "vitest";
import { describe } from "node:test";
import { expect } from "chai";
import CountDownContainer from "../components/CountDown/CountDownContainer";
import ChartContextProvider from "../context/ChartContext";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { time } from "node:console";

describe("CountDown component", () => {
  beforeAll(() => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <ChartContextProvider>
          <CountDownContainer seconds={60} />
        </ChartContextProvider>
      </QueryClientProvider>
    );
  });

  test("countdown start from 1 m", () => {
    const element = screen.getByTestId("countDown");
    expect(element).toHaveTextContent("1m 00s");
  });

  test("countdown decrements correctly", async () => {
    const element = screen.getByTestId("countDown");
    expect(element).toHaveTextContent("1m 00s");
    await waitFor(
      () => {
        expect(screen.getByTestId("countDown").textContent).toBe("0m 59s");
      },
      { timeout: 1000 }
    );
  });
});

// test("countdown decrements correctly", async () => {
//   const queryClient = new QueryClient();
//   render(
//       <QueryClientProvider client={queryClient}>
//       <ChartContextProvider>
//         <CountDownContainer seconds={60} />
//       </ChartContextProvider>
//     </QueryClientProvider>
//   );
//   const element = screen.getByTestId("countDown");
//   expect(element).toHaveTextContent("1m 00s");
// //   await waitFor(() => {
// //     expect(screen.getByTestId("countDown").textContent).not.toBe("0m 59s");
// //   });
// await waitFor(() => {
//     expect(screen.getByTestId("countDown").textContent).toBe("1m 00s");
//   } , {timeout:0});
// });
