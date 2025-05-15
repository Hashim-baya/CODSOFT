import React from "react";
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from "vitest";
import '@testing-library/jest-dom/vitest'
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

describe('renders the form correctly', () => {
    test('renders the title correctly', () => {
        render(<ContactForm />);

        const formH3 = screen.getByRole('heading', {
            level: 3
        })
        expect(formH3).toBeInTheDocument()
    })

    test('renders the paragraph', () => {
        render(<ContactForm />);

        const formText = screen.getByTestId('form-text')
        expect(formText).toBeInTheDocument()
    })

    test('renders the name input', () => {
        render(<ContactForm />);

        const name = screen.getByPlaceholderText(/Your name/i)
        expect(name).toBeInTheDocument()
    })

    test('renders the label name', () => {
        render(<ContactForm />);

        const nameLabel = screen.getByText('Name');
        expect(nameLabel).toBeInTheDocument()
    })

     test('renders the email input', () => {
        render(<ContactForm />);

        const email = screen.getByPlaceholderText(/Your email/i)
        expect(email).toBeInTheDocument()
    })

     test('renders the label email', () => {
        render(<ContactForm />);

        const emailLabel = screen.getByText('Email');
        expect(emailLabel).toBeInTheDocument()
    })

     test('renders the message input', () => {
        render(<ContactForm />);

        const message = screen.getByPlaceholderText(/Your message/i)
        expect(message).toBeInTheDocument()
     })

      test('renders the label message', () => {
        render(<ContactForm />);

        const messageLabel = screen.getByText('Message');
        expect(messageLabel).toBeInTheDocument()
    })

    test('renders submit button' ,() => {
        render(<ContactForm />);

        const submitButton = screen.getByRole('button', {
            name: /submit/i
        })
        expect(submitButton).toBeInTheDocument()
    })

    test('renders the subject input', () => {
        render(<ContactForm />);

        const subject = screen.getByRole('combobox')
        expect(subject).toBeInTheDocument()
    })

    test('renders the label subject', () => {
        render(<ContactForm />);

        const subjectLabel = screen.getByText('Subject');
        expect(subjectLabel).toBeInTheDocument()
    })

    
})