// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import DropdownMenu from './DropdownMenu'; // Import your dropdown menu component

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { beforeAll, describe } from "vitest";
import ChartContextProvider from "../context/ChartContext";
import SelectMenuContainer from "../components/SelectMenu/SelectMenuContainer";
import React, { useState } from "react";

describe("SelectMenu component", () => {
  let select;
  beforeAll(() => {
    const queryClient = new QueryClient();
    const intialState = "option1";
    function setState(newState) {
      intialState = newState;
    }
    render(
      <QueryClientProvider client={queryClient}>
        <ChartContextProvider>
          <SelectMenuContainer defaultValue={intialState} setValue={setState} helperText={"helper text"} menuItems={["option1" , "option2" , "option3"]} />
        </ChartContextProvider>
      </QueryClientProvider>
    );
    select = screen.getByTestId("select-menu");
  });

  test("assert that the select menu is initially closed", () => {
    expect(select).toBeNull();
  });

});
