import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '../components/landingPage/LandingPage';
// import Payment from '../components/payment/Payment';
import { Login } from '../components/login/Login';

describe('Does Landing Page Render', function () {
    //before
    it('This countainer will display Landing', () => {
        console.log('here')
        const { container } = render(<LandingPage />)
        expect(container.textContent).toContain("WELCOME")
    })
    //after
    // it('checks the text content after clicking', function () {
    //     let renderObj = render(<Counter/>)
    //     let {container, getByTestId} = renderObj
    //     let btn  = getByTestId('counter-button')
    //     fireEvent.click(btn)
    //     expect(container.textContent).toContain("You've clicked 1 times!")
    // })
});

// describe('Does Payment Page Render', function () {
//     //before
//     it('This container will display Invoice', () => {
//         console.log('here')
//         const { container } = render(<Payment />)
//         expect(container.textContent).toContain("Invoice")
//     })
// });

// describe('Does Login Page Render', function () {
//     it('Verify code is Rendered', () => {
//         const { container } = render(<Login />)
//         expect(container.textContent).toContain('Verify code')
//     })
// })