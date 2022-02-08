import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '.';

describe('Header', () => {
    test('it renders a nav tag', () => {
        render(<Header />, { wrapper: MemoryRouter });
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})