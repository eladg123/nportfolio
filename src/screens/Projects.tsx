import React from 'react'
import './Projects.css'
import Project1 from '../images/footshop.png'
import Project2 from '../images/studentreact.png'
import Project3 from '../images/chicago.png'
import Project4 from '../images/studentsite.png'
import Project5 from '../images/tictactoe.png'
import Project6 from '../images/cinema.png'
import Project7 from '../images/shopping-cart-ts-react.png'
import Projcet8 from '../images/advanced.png'
import Project9 from '../images/books-api-ts.jpg'
import Project10 from '../images/books-restful.jpg'
import Project11 from '../images/mysql-node-react.jpg'

const Projects = () => {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading">My Projects</h1>
        <p className="heading p__color">
          See full projects cases on GitHub
          <svg
            onClick={() => window.open('https://github.com/eladg123', '_blank')}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Footstar ECommerce Shop</h5>
                <h4 className="project__text">MERN Project</h4>
                <a
                  href="https://github.com/eladg123/FootStareCommerce"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project9} className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Books restful API</h5>
                <h4 className="project__text">
                  API with MongoDB and Typescript
                </h4>
                <a
                  href="https://github.com/eladg123/NodeJS-MongoDB-Typescript"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project7} className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Shopping cart</h5>
                <h4 className="project__text">React JS with Typescript</h4>
                <a
                  href="https://github.com/eladg123/Shopping-Cart-with-TypeScript"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">School website</h5>
                <h4 className="project__text">
                  React JS - School management web
                </h4>
                <a
                  href="https://github.com/eladg123/College-site-Client-only-with-React-"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">
                  Chicago bulls - Subscribers Site
                </h5>
                <h4 className="project__text">MERN project</h4>
                <a
                  href="https://github.com/eladg123/Mern-Chicago-Bulls-Client"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Students site</h5>
                <h4 className="project__text">HTML and NodeJS</h4>
                <a
                  href="https://github.com/eladg123/Students-site"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project5} className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Tic Tac Toe Game</h5>
                <h4 className="project__text">HTML</h4>
                <a
                  href="https://github.com/eladg123/tictactoe"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project6} className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">
                  Cinema management site for employees
                </h5>
                <h4 className="project__text">MERN project</h4>
                <a
                  href="https://github.com/eladg123/Cinema-Site"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Projcet8} className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Advanced shopping cart</h5>
                <h4 className="project__text">
                  React JS with Typescript shopping cart
                </h4>
                <a
                  href="https://github.com/eladg123/Advanced-ShoppingCart-ReactJS-TypeScript"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project10} className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Books API</h5>
                <h4 className="project__text">
                  Restful API with MySQL and Typescript
                </h4>
                <a
                  href="https://github.com/eladg123/Restful-API-NodeJS-Express-Typescript-MySQL"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project11} className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Users management</h5>
                <h4 className="project__text">MySQL - NodeJS - ReactJS</h4>
                <a
                  href="https://github.com/eladg123/MySQL-Node-React"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
