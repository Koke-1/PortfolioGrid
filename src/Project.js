import React from 'react'
import ProjectsAPI from './Local API/ProjectsAPI'

export default function Project() {
    return (
        <article className="Projects" >
        {
            ProjectsAPI.map((info)=>{
                const {title,link,id} = info
                return (
                    
                    <div className={`project${id}`} >
                    <h1>{title}</h1>
                    <a href={link}> link</a>
                    </div>
                )
            })
        }
        

        </article>
    )
}
