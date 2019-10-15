import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '../components/landingPage/LandingPage';
import { InstructionsPage } from '../components/instructionsPage/InstructionsPage';

describe('Does Landing Page Render', function () {
    //before
    it('This countainer will display Landing', () => {
        console.log('here')
        const { container } = render(<LandingPage />)
        expect(container.textContent).toContain("WELCOME")
    })
});

describe('Does the Instruction page Render', function () {
    it('This container will display Enjoy your day', () => {
        const { container } = render(<InstructionsPage />)
        expect(container.textContent).toContain('Instructions');
    })
});

describe('Does LETs go button exist', function () {
    it('lets go button exists', () => {
        const { container } = render(<LandingPage />)
        expect(container.textContent).toContain(`LET'S GO!`)
    })
});

describe('Does Fast And Easy Pickup Exist', function () {
    it('Fast And Easy Pickup', () => {
        const { container } = render(<LandingPage />)
        expect(container.textContent).toContain('Fast And Easy Pickup')
    })
});

describe(`Just add your address and you'll see everything you need!`, function () {
    it(`Just add your address and you'll see everything you need!`, () => {
        const { container } = render(<LandingPage />)
        expect(container.textContent).toContain(`Just add your address and you'll see everything you need!`)
    })
});
