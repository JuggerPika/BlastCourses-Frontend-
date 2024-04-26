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

  const [error, setError] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /\S+@\S+\.\S+/; // Регулярний вираз для перевірки електронної адреси
    const { value } = event.target;
    
    if (!emailRegex.test(value)) {
      console.error("Введіть правильну електронну адресу.");
    } else {
      setFormData(prev => ({
        ...prev,
        email: value
      }));
    }
  };
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    const url = 'https://blast-courses-cfqbzl23vq-lm.a.run.app/auth/users/';
    console.log(url);
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Network response was not ok');
      }
      console.log(data);
      setError(''); // Clear any previous errors on successful submission
    } catch (error) {
      setError(error.message);
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  

  return (
    <div className="container">
      <div className="title">Registration</div>
      {error && <div className="error-message">{error}</div>} {/* Display the error message if there is an error */}
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
