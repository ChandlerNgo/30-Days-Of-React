import React from 'react'
import { createRoot } from 'react-dom/client';
import chandlerImage from './images/chandlerngo.jpg'
import frontendTechnologies from './images/frontend_technologies.png'

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
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

const user = (
  <div>
    <img className='profile-picture' src={chandlerImage} alt='Chandler Image'></img>
  </div>
)

const frontend_technologies = (
  <div>
    <img className='frontend' src={frontendTechnologies} alt='HTML/CSS/JS'></img>
  </div>
)

const subscribe = (
  <div className='subscribe-wrapper'>
    <div className='items'>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to recieve new and updates</p>
      <div className='inputbuttons'>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="email" placeholder="Email"></input>
      </div>
      <div className='subscribe'>
        <button type='submit'>Subscribe</button>
      </div>
      
    </div>
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

const skills = ['Python','RestAPI','React','HTML','CSS','JS','Django','Docker','Git','MySQL','FalconAPI']
const skillsFormatted = skills.map((skill) => <p className='skill' key={skill}>{skill}</p>)

const usercard = (
  <div className='user-card'>
    <img src={chandlerImage} alt='Chandler'></img>
    <h1>Chandler Ngo *checkmark*</h1>
    <p className='role'>Software Developer, Round Rock, Texas</p>
    <h1>Skills</h1>
    <div className='skills'>
      {skillsFormatted}
    </div>
    <p className='join-date'>Joined on Aug 18th, 2022</p>
  </div>
)

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const Colors = () => {
  let color = hexaColor()
  let style = {backgroundColor: color, textAlign: 'center', padding: '15px', margin: '2px', color:'white',fontWeight:'bold'};
  return <div className='color' style={style}>{color}</div>
}

const ListofColors = () => {
  return <div>
    <Colors/>
    <Colors/>
    <Colors/>
    <Colors/>
    <Colors/>   
  </div>
  
}

const App = () => (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const Exercise = () => (
    <div>
    <ListofColors/>
    {/* <App/>
    {subscribe}
    {usercard}
    {frontend_technologies} */}
  </div>
)
//   const jsxElement = <h1>This is a JSX element</h1>

root.render(<Exercise/>);