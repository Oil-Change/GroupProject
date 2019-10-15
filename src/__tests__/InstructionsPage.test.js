import React from 'react';
import { render } from '@testing-library/react';
import { InstructionsPage } from '../components/instructionsPage/InstructionsPage';

describe('Instructions Page', function () {
    it('Checks to see if Login Displays', () => {
        const { container } = render(<InstructionsPage />)
        expect(container.textContent).toContain('Login')
    });
    it('Checks to see if first instruction displays', () => {
        const { container } = render(<InstructionsPage />)
        expect(container.textContent).toContain('Have your car available for pick up from 7-11am.')
    });
    it('Checks to see if second instruction displays', () => {
        const { container } = render(<InstructionsPage />)
        expect(container.textContent).toContain('Either be home or have your keys hidden in a previously designated location with your driver.')
    });
    it('Checks to see if fourth instructions displays', () => {
        const { container } = render(<InstructionsPage />)
        expect(container.textContent).toContain('Your Car will be dropped off before 5pm that day.')
    });
    it('Checks to see if fifth instruction displays', () => {
        const { container } = render(<InstructionsPage />)
        expect(container.textContent).toContain('The driver can drop the keys off directly to you or stash them in the same location they were picked up.(Discuss options with driver)')
    })
});