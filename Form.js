import React from 'react'

const Form = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Businesstype</label>
        <input type='text' id="businesstype" name="businesstype"/>
        <label>Target Audience</label>
        <input type='text'/>
        <label>Key Selling points</label>
        <textarea rows="4" cols="50" placeholder="Enter your business description here..."></textarea>
        <label>Template Section</label>
        <button type='submit'>Submit</button>
      </form>
      <div>
        <h1>Preview: </h1>
        <p>document.getElementById('businesstype').value</p>
      </div>
    </div>
  )
}

export default Form
