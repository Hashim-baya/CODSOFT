import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import HeroSection from "./HeroSection";
import { BrowserRouter } from "react-router";
import userEvent from "@testing-library/user-event";

describe('Hero Section', () => {
    test('renders correctly', () => {
       const { container } = render(
       <BrowserRouter>
            <HeroSection />
       </BrowserRouter>
       );

        const heading = screen.getByRole('heading', {
            level: 2
        })
        expect(heading).toBeInTheDocument()
        expect(screen.getByAltText(/my image/i)).toBeInTheDocument()
        
        //Buttons

        const downloadCV = screen.getByRole('button', {
            name: 'Download CV'
        })
        expect(downloadCV).toBeInTheDocument()

        const getInTouch = screen.getByRole('button', {
            name: 'Get in Touch'
        })
        expect(getInTouch).toBeInTheDocument()
    })
 
    test('calls donwloadCV function when button is clicked', async () => {
        const user = userEvent.setup();
        const { container } = render(
            <BrowserRouter>
                <HeroSection />
            </BrowserRouter>
        );

        const downloadCV = screen.getByRole('button', {
            name: 'Download CV'
        })

        await user.click(downloadCV);

    })

    test('calls getInTouch function when button is clicked', async () => {
        const user = userEvent.setup();
        const { container } = render(
            <BrowserRouter>
                <HeroSection />
            </BrowserRouter>
        );

        const getInTouch = screen.getByRole('button', {
            name: 'Get in Touch'
        })

        await user.click(getInTouch);

    })
})