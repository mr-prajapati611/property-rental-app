import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div id='contact'>
        <form action="">
            <span id='contacttitle'>Contact Page</span>
            <div className="list">
                <label htmlFor="name1">Username</label>
                <input type="text" id='name1' required/>
            </div>
            <div className="list">
                <label htmlFor="mail">Email</label>
                <input type="text" id='mail' required/>
            </div>
            <div className="list">
                <label htmlFor="mess">Message</label>
                <textarea id="mess"></textarea>
            </div>
            <button id='contactbtn'>Submit</button>
        </form>
    </div>
  )
}

export default Contact