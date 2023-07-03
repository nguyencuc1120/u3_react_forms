import { useState } from 'react'

import './App.css'

function App() {

    const initialState = {
      issueType: '',
      subject: '',
      message: ''
    }
    const [formState, setFormState] = useState(initialState)


// Event Handler: a callback function to
// be run when the event is observed
const handleSubmit = (event) => {
  // we always need to stop the browser
  // from submitting the form or the page
  // will be refreshed.
  event.preventDefault();
  // do something with the data in the component state
  console.log(formState);
  // clear the form by:
  setFormState(initialState);
};

// Event Listener: tells the browser
// which event to listen for on which
// element and what to do when the event
// happens

const handleChange = (event) => {
  //whenever something changes need to:
  setFormState({...formState, [event.target.id] : event.target.value})
}


return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="issueType">Type of Issue:</label>
      <select id="issueType"
              onChange={handleChange}
              value={formState.issueType}>
        <option value="default">Select Issue</option>
        <option value="outage">Service Outage</option>
        <option value="billing">Billing</option>
        <option value="cancel">Cancel Service</option>
      </select>
    <label htmlFor="subject">Subject:</label>
    <input type="text" 
            id="subject" 
            onChange={handleChange}
            value={formState.subject}/>
    <label htmlFor="message">Message</label>
    <textarea id="message" cols="30" rows="10"
              onChange={handleChange}
              value={formState.message}></textarea>
    <button type="submit">Send</button>
  </form>
  )
}

export default App
