import React from 'react'

const App = () => {
const name ='Aryan Singh'
const a= 12
const b =45
const login = true
const name1 =['sam', 'karan','pintu','mohit','sara']



  return (
    <>

    <div className='text-5xl'>App {name}</div><br />

    <p style={{color:'red',fontSize:'24px'}}>The Sum of {a} and {b} is {a+b} </p>

    <ul>
      {name1.map((name , index)=> (
        <li key={index}>{name}</li>
      ))}
    </ul>

        {login ? <h1>Hello {name}</h1>:<h1>Hello guest</h1>}

    </>
  )
}

export default App