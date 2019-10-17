import React from 'react';
import { render } from '@testing-library/react';
import { Login } from '../components/login/Login';

describe('Login Page', function () {
    it('Checks to see if Login Displays', () => {
        const { container } = render(<Login />)
        expect(container.textContent).toContain('Login')
    });
    it('Checks to see if Login With Your Phone displays', () => {
        const { container } = render(<Login />)
        expect(container.textContent).toContain('Login With Your Phone')
    });
    it(`Checks to see if We send you a text with a code. The text is free, you're not charge for it. displays`, () => {
        const { container } = render(<Login />)
        expect(container.textContent).toContain(`We send you a text with a code. The text is free, you're not charge for it.`)
    });
    it('Checks to see if Step 1: displays', () => {
        const { container } = render(<Login />)
        expect(container.textContent).toContain('Step 1:')
    });
    it('Checks to see if Step 2: displays', () => {
        const { container } = render(<Login />)
        expect(container.textContent).toContain('Step 2:')
    })
});

//Chris's tests