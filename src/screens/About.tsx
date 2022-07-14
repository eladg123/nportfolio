import React from 'react'
import './About.css'
import logo from '../images/emoji4.png'
import CV from '../images/Elad Gabay CV.pdf'

const About = () => {
  window.addEventListener('scroll', function () {
    const upToTop = document.querySelector('.bottom__to__top')
    upToTop?.classList.toggle('active', window.scrollY > 0)
  })
  return (
    <div
      className="about component__space"
      id="About"
      style={{ marginTop: 35 }}
    >
      <div className="container">
        <div className="row">
          <div className="col__2" id="img__col">
            <img src={logo} alt="logo" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I'm Elad, a passionate full-stack developer.
                <br />
                Since I was a child, I've always loved computers, gaming and I
                started programming as a teenager at the school .
                <br />
                Finally, I could use my logical side to code and my creative
                side to design.
              </p>
              <p className="about__text p__color">
                Out of the office you will find me playing basketball and
                surfing :)
              </p>
              <div className="about__button d__flex align__items__center">
                <a href={CV} download="Elad Gabay CV.pdf">
                  <button
                    className="about btn pointer"
                    style={{ color: '#3b44f6' }}
                  >
                    Download CV
                  </button>
                </a>
                <a href="#Contact">
                  <button
                    className="about btn pointer"
                    style={{ color: '#3b44f6' }}
                  >
                    Contact me
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default About
