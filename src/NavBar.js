import React,{useContext} from 'react'
import Nav from './Local API/nav.json'
import {navInputs} from './Main'
export default function NavBar() {
  const [index,setIndex] = useContext(navInputs)
    return ( 
        <nav className="nav-bar" >
            <ul>
              <li><button onClick={()=>setIndex(0)}>{Nav[0].Title}</button></li>
              <li><button onClick={()=>setIndex(1)}>{Nav[1].Title}</button></li>
              <li><button onClick={()=>setIndex(2)}>{Nav[2].Title}</button></li>
              <li><button onClick={()=>setIndex(3)}>{Nav[3].Title}</button></li>
            </ul>
          </nav>
    )
}
