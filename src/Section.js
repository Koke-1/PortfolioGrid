import React, { useContext,useEffect} from 'react'
import Footer from './Footer'
import {navInputs} from './Main'
import AboutMe from './AboutMe'
import Skill from './Skill'
import Project from './Project'
export default function Section() {
    const [index,setIndex] = useContext(navInputs);


    return (
        <>
        <section className="Content" >

            {
                index === 0 && 
                <article className="Home" >
                <h1 className="Home0" >Jorge</h1>
                <h1 className="Home1" >Inspiring Front End Web Developer </h1>
                <h1 className="Home2" >San Juan</h1>
                </article>
            }
            {
                index === 1 && 
                <>
                <Project/>
                </>
            }
            {
                index === 2 && 
                <>
                <Skill/>
                </>
            }
            {
                index === 3 && 
                <>
                <AboutMe/>
                </>
            }
            <Footer/>
        </section>

        </>
    )
}
