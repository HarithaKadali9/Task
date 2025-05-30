import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    businessType: '',
    targetAudience: '',
    keySellingPoints: '',
    templateSection: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/Form', formData);
      setMessage(response.data);
    } catch (error) {
      setMessage('Error occured ' + error.response?.data || error.message);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', fontFamily: 'Arial' }}>
      <h2>Business Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Business Type:
          <input
            type="text"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%' }}
          />
        </label>

        <label>
          Target Audience:
          <input
            type="text"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%' }}
          />
        </label>

        <label>
          Key Selling Points:
          <textarea
            name="keySellingPoints"
            rows="4"
            value={formData.keySellingPoints}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%' }}
          />
        </label>

        <label>
          Template Selection:
          <select
            name="templateSection"
            value={formData.templateSection}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%' }}
          >
            <option value="">-- Select a template --</option>
            <option value="Minimal">Minimal</option>
            <option value="Modern">Modern</option>
            <option value="Creative">Creative</option>
          </select>
        </label>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
          Submit
        </button>
      </form>

      {message && <p style={{ marginTop: '20px', color: 'blue' }}>{message}</p>}
    </div>
  );
};

export default Form;
