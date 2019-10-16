import React from 'react';
import { render } from '@testing-library/react';
import { InstructionsPage } from '../components/instructionsPage/InstructionsPage';

describe('Instructions Page', function () {
    it('Checks to see if Login Displays', () => {
        const { container } = render(<InstructionsPage />)
        expect(container.textContent).toContain('Instructions')
    });
    it('Checks to see if first instruction displays', () => {
        const { container } = render(<InstructionsPage />)
        expect(container.textContent).toContain('Have your car available for pick up from 7-11am.')
    });
    it('Checks to see if second instruction displays', () => {
        const { container } = render(<InstructionsPage />)
        expect(container.textContent).toContain('Either be home or have your keys hidden under your front door mat.')
    });
    it('Checks to see if fourth instructions displays', () => {
        const { container } = render(<InstructionsPage />)
        expect(container.textContent).toContain('Your Car will be dropped off before 5pm that day.')
    });
    it('Checks to see if fifth instruction displays', () => {
        const { container } = render(<InstructionsPage />)
        expect(container.textContent).toContain('The driver can drop the keys off directly to you or stash them where we picked them up.')
    })
});