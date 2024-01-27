// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import DropdownMenu from './DropdownMenu'; // Import your dropdown menu component

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { beforeAll, describe } from "vitest";
import ChartContextProvider from "../context/ChartContext";
import SelectMenuContainer from "../components/SelectMenu/SelectMenuContainer";
import React, { useState } from "react";

// test('Dropdown menu opens and closes correctly', () => {
//   // Render the component containing the dropdown menu
//   render(<DropdownMenu />);

//   // Assert that the dropdown menu is initially closed
//   expect(screen.queryByTestId('dropdown-menu')).toBeNull();

//   // Open the dropdown menu (e.g., by clicking on the toggle button)
//   fireEvent.click(screen.getByTestId('dropdown-toggle'));

//   // Assert that the dropdown menu is open
//   expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();

//   // Assert that the dropdown menu displays the expected options
//   expect(screen.getByText('Option 1')).toBeInTheDocument();
//   expect(screen.getByText('Option 2')).toBeInTheDocument();

//   // Select an option from the dropdown menu (e.g., by clicking on an option)
//   fireEvent.click(screen.getByText('Option 1'));

//   // Assert that the selected option is displayed or the appropriate action is taken
//   expect(screen.getByTestId('selected-option')).toHaveTextContent('Option 1');

//   // Close the dropdown menu (e.g., by clicking outside the dropdown)
//   fireEvent.click(document);

//   // Assert that the dropdown menu is closed
//   expect(screen.queryByTestId('dropdown-menu')).toBeNull();
// });

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
