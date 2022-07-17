import React, { FormEvent, useRef } from 'react'
import './Contact.css'
import contactImg from '../images/emoji.png'
import emailjs from '@emailjs/browser'
import { EmailJSResponseStatus } from 'emailjs-com'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null!)
  const sendEmail = (e: FormEvent) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_c22awir',
        'template_zlmzods',
        form.current,
        'Dj9dz6YdzKXvDH__u',
      )
      .then(
        (result: EmailJSResponseStatus) => {
          alert(`Message sent, I will get back to you shortly.`)
        },
        (error) => {
          alert(`An error occurred, Please try again , ${error.text}`)
        },
      )
  }

  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact me .</h1>
              <p className="hire__text white">
                I'm available to work full-time . Contact me :
              </p>
              <p className="hire__text white">
                Phone :{' '}
                <strong style={{ color: '#3b44f6' }}>0526100351 </strong>
              </p>
              <p className="hire__text white">
                Email :{' '}
                <strong style={{ color: '#3b44f6' }}>
                  {' '}
                  ELAD28100@GMAIL.COM
                </strong>
              </p>
            </div>
            <div className="input__box">
              <form onSubmit={sendEmail} ref={form}>
                <input
                  name="user_name"
                  type="text"
                  className="contact name"
                  placeholder="Your name *"
                />
                <input
                  name="user_email"
                  type="text"
                  className="contact email"
                  placeholder="Your email *"
                />
                <input
                  type="text"
                  className="contact subject"
                  placeholder="Write a subject *"
                  name="subject"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your message"
                ></textarea>
                <button
                  className="btn contact pointer"
                  type="submit"
                  value="Send"
                  style={{ color: '#3b44f6' }}
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  )
}

export default Contact
