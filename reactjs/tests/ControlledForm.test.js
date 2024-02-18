import React from "react";
import {render,fireEvent, screen} from '@testing-library/react';
import ControlledForm from "../test-components/ControlledForm";
 
 
test('input value updates on change',()=>{
    const{getByRole}=render(<ControlledForm/>);
    const input = screen.getByRole('textbox');
 
    fireEvent.change(input,{target:{value:'test value'}});
    //expect(input).toHaveValue('test value');
});