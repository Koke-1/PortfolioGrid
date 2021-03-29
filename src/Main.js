import React, {useState} from 'react'
import NavBar from './NavBar'
import Section from './Section'
import './css/index.css'
export const navInputs = React.createContext();
  const Main = () => {
    const [index, setIndex] = useState(0)
    return (
        <main>
      <navInputs.Provider value={[index,setIndex]} >
        <NavBar/>
        <Section/>
      </navInputs.Provider>
        </main>
    )
}

export default Main