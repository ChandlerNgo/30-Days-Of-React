import React from 'react'
import { createRoot } from 'react-dom/client';
import chandlerImage from './images/chandlerngo.jpg'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
    firstName: 'Chandler',
    lastName: 'Ngo',
}
const date = 'Aug 18, 2022'

const header = (
    <header>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{author.firstName} {author.lastName}</p>
            <small>{date}</small>
        </div>
    </header>
)

const yearBorn = 2004
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
    <p>
        {' '}
        {author.firstName} {author.lastName} is {age} years old
    </p>
)
const techs = ['HTML','CSS','JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

const user = (
  <div>
    <img className='profile-picture' src={chandlerImage} alt='Chandler Image'></img>
  </div>
)

const main = (
    <main>
        <div className='main-wrapper'>
            <p>
                Prerequsites to get started with {' '}
                <strong>
                    <em>React</em>
                </strong>
                :
            </p>
            <ul>{techsFormatted}</ul>
            {personAge}
            {user}
        </div>
    </main>
)

const copyRight = 'Copyright 2022'

const footer = (
    <footer>
        <div className='footer-wrapper'>
            <p>{copyRight}</p>
        </div>
    </footer>
)

const app = (
    <div className='app'>
        {header}
        {main}
        {footer}
    </div>
)
//   const jsxElement = <h1>This is a JSX element</h1>

root.render(app);