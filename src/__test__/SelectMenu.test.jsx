// SelectMenu.test.js
import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { vi } from 'vitest';
import ChartContextProvider from '../context/ChartContext';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { SelectMenu } from '../components/SelectMenu';

const menuItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

describe('SelectMenu component', () => {
	it('should render with default value and helper text', () => {
		// Arrange
		const defaultValue = 'Banana';
		const helperText = 'Select a fruit';
		const handleChange = vi.fn();

		const queryClient = new QueryClient();
		render(
			<QueryClientProvider client={queryClient}>
				<ChartContextProvider>
					<SelectMenu
						defaultValue={defaultValue}
						helperText={helperText}
						menuItems={menuItems}
						isDark={false}
						handleChange={handleChange}
					/>
				</ChartContextProvider>
			</QueryClientProvider>
		);

		const select = screen.getByRole('combobox');
		expect(select).toBeInTheDocument();
		expect(select.textContent).toBe(defaultValue);
		expect(screen.getByText(helperText)).toBeInTheDocument();
	});

	it('should display the items on click', () => {
		// Arrange
		const defaultValue = 'Banana';
		const helperText = 'Select a fruit';
		const handleChange = vi.fn();

		const queryClient = new QueryClient();
		render(
			<QueryClientProvider client={queryClient}>
				<ChartContextProvider>
					<SelectMenu
						defaultValue={defaultValue}
						helperText={helperText}
						menuItems={menuItems}
						isDark={false}
						handleChange={handleChange}
					/>
				</ChartContextProvider>
			</QueryClientProvider>
		);

		const select = screen.getByRole('combobox');
		fireEvent.mouseDown(select);
		const options = screen.getAllByRole('option');
		expect(options.length).toBe(menuItems.length);
	});

	it('should invoke the callback function on select', () => {
		// Arrange
		const defaultValue = 'Banana';
		const helperText = 'Select a fruit';
		const handleChange = vi.fn();

		const queryClient = new QueryClient();
		render(
			<QueryClientProvider client={queryClient}>
				<ChartContextProvider>
					<SelectMenu
						defaultValue={defaultValue}
						helperText={helperText}
						menuItems={menuItems}
						isDark={false}
						handleChange={handleChange}
					/>
				</ChartContextProvider>
			</QueryClientProvider>
		);

		const select = screen.getByRole('combobox');
		fireEvent.mouseDown(select);
		const option = screen.getByTestId('Cherry');
		expect(option.textContent).toBe('Cherry');
		fireEvent.click(option);
		expect(handleChange).toHaveBeenCalled();
		expect(handleChange).toHaveBeenCalledTimes(1);
	});

	it('should change the value shown on select', () => {
		// Arrange
		let defaultValue = 'Banana';
		const helperText = 'Select a fruit';
		const handleChange = vi.fn(e => defaultValue = e.target.value);

		const queryClient = new QueryClient();
		render(
			<QueryClientProvider client={queryClient}>
				<ChartContextProvider>
					<SelectMenu
						defaultValue={defaultValue}
						helperText={helperText}
						menuItems={menuItems}
						isDark={false}
						handleChange={handleChange}
					/>
				</ChartContextProvider>
			</QueryClientProvider>
		);

		const select = screen.getByRole('combobox');
		fireEvent.mouseDown(select);
		const option = screen.getByTestId('Cherry');
		fireEvent.click(option);
		expect(defaultValue).toBe('Cherry');
	});
});
