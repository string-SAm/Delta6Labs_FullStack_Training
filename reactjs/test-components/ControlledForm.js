import React, { useState } from 'react';
 
function ControlledForm() {
    const [inputValue, setInputValue] = useState("");  // input value from user
 
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
 
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // You can handle form submission logic here
        console.log("Form submitted with value:", inputValue);
    };
 
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}
 
export default ControlledForm