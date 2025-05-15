import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, test,expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import Footer from './Footer'
import { BrowserRouter } from 'react-router'

describe('Footer', () => {
    test('renders correctly', () => {
       const{ container } = render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
       );

       const headings = screen.getAllByRole('heading', { level: 5 });
  
    // Check each heading is in the document
    headings.forEach(heading => {
        expect(heading).toBeInTheDocument();
    });

    // Or check specific headings
    expect(screen.getByText('Discover')).toBeInTheDocument();
    expect(screen.getByText('📞 Contact')).toBeInTheDocument();
    expect(screen.getByText('🌍 Social Media')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    const links  = screen.getAllByRole('link')
    expect(links).toHaveLength(10)

    expect(links[0]).toHaveAttribute('href', '/')
    expect(links[1]).toHaveAttribute('href', '/about')
    expect(links[2]).toHaveAttribute('href', '/projects')
    expect(links[3]).toHaveAttribute('href', '/contact')
    expect(links[4]).toHaveAttribute('href', 'mailto:bayahashim40@gmail.com')
    expect(links[5]).toHaveAttribute('href', 'https://x.com/hashim_baya')
    expect(links[6]).toHaveAttribute('href', 'https://instagram.com/l.i.l__savage')
    expect(links[7]).toHaveAttribute('href', 'https://linkedin.com/in/hashim-baya')
    expect(links[8]).toHaveAttribute('href', 'https://github.com/Hashim-baya')
    expect(links[9]).toHaveAttribute('href', 'https://discord.com/channels/@HASHIM NASSORO')
    
    });
})