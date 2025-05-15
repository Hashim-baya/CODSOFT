import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import Experience from "./Experience";

describe('renders the experience section correctly', () => {
    test('renders the title correctly' , () => {
        render(<Experience />);

       const h3 = screen.getByRole('heading', {
            level: 3
        })
        expect(h3).toBeInTheDocument()
    })
})