// SelectMenu.test.js
import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { vi } from 'vitest';
import ChartContextProvider from '../context/ChartContext';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event'
import { SelectMenu } from '../components/SelectMenu';

const menuItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

describe('SelectMenu component', () => {
	it('should render with default value selected', () => {
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
});
