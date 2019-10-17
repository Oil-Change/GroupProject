import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '../components/landingPage/LandingPage';

// Grant's Tests
describe('Does Landing Page Render', function () {
    //before
    it('This countainer will display Landing', () => {
        console.log('here')
        const { container } = render(<LandingPage />)
        expect(container.textContent).toContain("WELCOME")
    })
});

describe('Does Professional Service Exist', function () {
    it('This container will display Professional Service', () => {
        const { container } = render(<LandingPage />)
        expect(container.textContent).toContain('Professional Service');
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
