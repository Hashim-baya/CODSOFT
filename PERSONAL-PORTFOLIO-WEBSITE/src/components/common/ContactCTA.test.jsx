import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest'
import ContactCTA from './ContactCTA';

describe('ContactCTA Component', () => {
    test('renders the ContactCTA component', () => {
        render(<ContactCTA />);

       const headingElement = screen.getByRole('heading', {
            level: 3
        })
        expect(headingElement).toBeInTheDocument();

    })

    test('renders the h5', () => {
        render(<ContactCTA />);

        const headingElement5 = screen.getByRole("heading", {
            level: 5
         })
        expect(headingElement5).toBeInTheDocument()
    })
        
    test('renders the paragraph', () => {
        render(<ContactCTA />);

        const paragraph = screen.getByTestId('paragraph')
        expect(paragraph).toBeInTheDocument()
    })
       
    
})