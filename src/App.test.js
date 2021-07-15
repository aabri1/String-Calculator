import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


describe('String Calculator', ()=>{
    test('renders header string calculator', () => {
      render(<App />);
      const linkElement = screen.getByText('STRING CALCULATOR');
      expect(linkElement).toBeInTheDocument();
    });

    test('renders label and input box', ()=> {
        render(<App />);
        const labelText= screen.getByLabelText('String Value:');
        expect(labelText).toBeInTheDocument();
    });

    describe ('Submit button', ()=> {

        test ('renders submit button', ()=> {
            render(<App/>);
            const submitButton = screen.getByText('Submit');
            expect(submitButton).toBeInTheDocument();
        });
    });
});
