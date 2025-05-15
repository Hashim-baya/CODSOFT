import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest'
import ContactMethods from "./ContactMethods";

describe('renders contact methods correctly', () => {
    test('renders the title correctly', () => {
        render(<ContactMethods />);

       const h3 = screen.getByRole('heading', {
            level: 3
        })
        expect(h3).toBeInTheDocument()
    })

    test('renders the email correctly', () => {
        render(<ContactMethods />);

        const email =screen.getByTestId("Email")
        expect(email).toBeInTheDocument()
    })

    test('renders the phone numbers correctly', () => {
        render(<ContactMethods />);

        const phone = screen.getByTestId("Phone")
        expect(phone).toBeInTheDocument()
    })

    test('renders the title meeting', () => {
        render(<ContactMethods />);

       const bookMeeting = screen.getByRole('heading', {
            level: 4
        })
        expect(bookMeeting).toBeInTheDocument()
    })

    test('renders the paragraph', () => {
        render(<ContactMethods />);

        const paragraph = screen.getByTestId('paragraph')
        expect(paragraph).toBeInTheDocument()
    })

    test('renders the button send email', () => {
        render(<ContactMethods />);

        const sendEmailButton = screen.getByRole('button', {
            name: 'Send Email'
        })
        expect(sendEmailButton).toBeInTheDocument()
    })

     test('renders the button schedule meeting', () => {
        render(<ContactMethods />);

        const scheduleMeetingButton = screen.getByRole('button', {
            name: 'Schedule Meeting'
        })
        expect(scheduleMeetingButton).toBeInTheDocument()
    })
})