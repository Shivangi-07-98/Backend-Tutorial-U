import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contactNumber: ''
  });

  // The spread operator (...formData) ensures that all existing properties are copied, and the computed property name ([name]: value) ensures that only the specific property is updated or added. This avoids duplicating keys and ensures that the latest value for each key is maintained.

//   Computed Property Name ([name]: value):

// This adds or updates the property name in the new object with the value value.
// If name matches an existing key in the formData object, its value will be updated.
// If name does not exist in the formData object, a new key-value pair will be added.

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.value);
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData);
      console.log('Signup successful:', response.data);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Contact Number: </label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>address: </label>
        <input
          type="text"
          name="address"
          value={formData.address || ''}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
