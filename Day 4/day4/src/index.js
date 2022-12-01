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

const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
  return num > 1;
}

var backgroundColor = {}
const Number = ({number}) => {
  if(isPrime(number) === true){
    backgroundColor = {backgroundColor:"#ace1e8"}
  }
  else if (number % 2 === 0){
    backgroundColor = {backgroundColor:"#aaa5f2"}
  }
  else{
    backgroundColor = {backgroundColor:"#7aa7f0"}
  }
  return <div id="square" style={backgroundColor}>{number}</div>
}

const Numbers = ({ numbers }) => {
  const numberList = numbers.map((number) => (<Number key = {number} number = {number}/>))
  return <div id="calendar">{numberList}</div>
} 

const Color = ({ color }) => {
  backgroundColor = {backgroundColor:color}
  return <div id="square" style={backgroundColor}>{color}</div>
}

const ColorSquare = ({ numbers }) => {
  const colorList = numbers.map((number) => (<Color key={number} color={hexaColor()}/>))
  return <div id="calendar">{colorList}</div>
}

// const countries = [
//   { name: 'Finland', city: 'Helsinki' },
//   { name: 'Sweden', city: 'Stockholm' },
//   { name: 'Denmark', city: 'Copenhagen' },
//   { name: 'Norway', city: 'Oslo' },
//   { name: 'Iceland', city: 'Reykjavík' },
// ]

// // Country component
// const Country = ({ country: { name, city } }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <small>{city}</small>
//     </div>
//   )
// }

// // countries component
// const Countries = ({ countries }) => {
//   const countryList = countries.map((country) => (
//     <Country key={country.name} country={country} />
//   ))
//   return <div>{countryList}</div>
// }
const numbers = [0,1,2,3,4,5,6,7]
const number1 = [8,9,10,11,12,13,14,15]
const number2 = [16,17,18,19,20,21,22,23]
const number3 = [24,25,26,27,28,29,30,31]

const Exercise = () => (
  <div>
    {/* day 5 stuff */}
    
    {/* <h1 id="title">Numbers</h1>
    <div id="number"> */}
      {/* <Numbers numbers={numbers}/>
      <Numbers numbers={number1}/>
      <Numbers numbers={number2}/>
      <Numbers numbers={number3}/> */}
      {/* <ColorSquare numbers={numbers}/>
      <ColorSquare numbers={number1}/>
      <ColorSquare numbers={number2}/>
      <ColorSquare numbers={number3}/>

    </div> */}
    
    {/* <Countries countries={countries} /> */}
    {/* <ListofColors/>

    // day 4 stuff
    <App/>
    {subscribe}
    {usercard}
    {frontend_technologies}  */}
  </div>
)
//   const jsxElement = <h1>This is a JSX element</h1>

root.render(<Exercise/>);