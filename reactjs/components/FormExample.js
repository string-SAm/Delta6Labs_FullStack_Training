
import React, { useState } from 'react';
 
function FormExample() {

  const [formData, setFormData] = useState({

    firstName: '',

    lastName: '',

    email: '',

  });
 
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((prevData) => ({

      ...prevData,

      [name]: value,

    }));

  };
 
  const handleSubmit = (event) => {

    event.preventDefault();

    console.log('Form submitted with data:', formData);

    // You can perform further actions, like sending data to a server, here.

  };
 
  return (

    <div>

      <h2>Form Example</h2>

      <form onSubmit={handleSubmit}>

        <div>

          <label htmlFor="firstName">First Name</label>

          <input

            type="text"

            id="firstName"

            name="firstName"

            value={formData.firstName}

            onChange={handleChange}

            required

          />

        </div>

        <div>

          <label htmlFor="lastName">Last Name</label>

          <input

            type="text"

            id="lastName"

            name="lastName"

            value={formData.lastName}

            onChange={handleChange}

            required

          />

        </div>

        <div>

          <label htmlFor="email">Email</label>

          <input

            type="email"

            id="email"

            name="email"

            value={formData.email}

            onChange={handleChange}

            required

          />

        </div>

        <button type="submit">Submit</button>

      </form>

    </div>

  );

}
 
export default FormExample;
