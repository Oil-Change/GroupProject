import React from 'react';
import { render } from '@testing-library/react';
import Login from '../components/login/Login';

describe('Does Login Page Render', function () {
    //before
    it('This countainer will display Login', () => {
        console.log('here')
        const { container } = render(<Login />)
        expect(container.textContent).toContain("Login")
    })

    it('This container will display Professional Service', () => {
        const { container } = render(<Login />)
        expect(container.textContent).toContain('Professional Service');
    })

    it('lets go button exists', () => {
        const { container } = render(<Login />)
        expect(container.textContent).toContain(`LET'S GO!`)
    })

    it('lets go button exists', () => {
        const { container } = render(<Login />)
        expect(container.textContent).toContain(`LET'S GO!`)
    })
    
    it('Fast And Easy Pickup', () => {
        const { container } = render(<Login />)
        expect(container.textContent).toContain('Fast And Easy Pickup')
    })
});

