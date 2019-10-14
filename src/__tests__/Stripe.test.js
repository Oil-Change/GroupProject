import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '../components/landingPage/LandingPage';
import { Payment } from '../components/payment/Payment';
import { Login } from '../components/login/Login';
import { InstructionsPage } from '../components/instructionsPage/InstructionsPage';
import { UserInfo } from '../components/admin/UserInfo';
 

describe('Does Landing Page Render', function () {
    //before
    it('This countainer will display Landing', () => {
        console.log('here')
        const { container } = render(<LandingPage />)
        expect(container.textContent).toContain("WELCOME")
    })
});

describe('Does Payment Page Render', function () {
    it('This container will display Invoice', () => {
        const { container } = render(<Payment />)
        expect(container.textContent).toContain("Invoice")
    })
});

describe('Does Login Page Render', function () {
    it('Verify code is Rendered', () => {
        const { container } = render(<Login />)
        expect(container.textContent).toContain('Verify code')
    })
});

describe('Does the Instruction page Render', function () {
    it('This container will display Enjoy your day', () => {
        const { container } = <InstructionsPage />
        expect(container.textContent).toContain('Instructions');
    })
});

describe('Does the UserInfo Page Render', function () {
    it('This container will display Pick Up', () => {
        const { container } = <UserInfo />
        expect(container.textContent).toContain('Pick Up')
    })
});