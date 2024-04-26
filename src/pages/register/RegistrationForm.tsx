import React, { useState } from 'react';
import './register.scss'; 

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const url = process.env.REACT_APP_API_URL + '/auth/users/';
    console.log(url);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); // Handle the response data as needed
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="container">
      <div className="title">Registration</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input type="text" name="firstName" placeholder="Enter your first name" required onChange={handleInputChange} />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input type="text" name="lastName" placeholder="Enter your last name" required onChange={handleInputChange} />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="email" name="email" placeholder="Enter your email" required onChange={handleInputChange} />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="password" name="password" placeholder="Enter your password" required onChange={handleInputChange} />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input type="password" name="rePassword" placeholder="Confirm your password" required onChange={handleInputChange} />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
