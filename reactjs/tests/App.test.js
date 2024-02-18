//JEST facebook testing framework to test

import React from "react";
import {render, screen} from '@testing-library/react'
import Form from '../test-components/Form';
import About from '../test-components/About';
import { MemoryRouter } from "react-router-dom";

describe('App routing', () => {
    it("renders the About component", () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <About/>
            </MemoryRouter>
        );
        //expect(screen.getByTestId('about-title')).toBeInTheDocument();
    });

    it("renders the Form component", () => {
        render(
            <MemoryRouter initialEntries={['/form']}>
                <Form/>
            </MemoryRouter>
        );
        //expect(screen.getByTestId('form-title')).toBeInTheDocument();
    });
});



// isWebTarget('render the button', ()=>{
    //     const {getByTestId}=render(<Button label="Click me"/>)

    //     const buttonElement=getByTestId('button')

    //     expect(buttonElement).toBeInTheDocument()

    //     expect(buttonElement).toHaveTextContent('Clicked me')
    // })