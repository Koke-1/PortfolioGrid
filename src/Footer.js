import React,{useState,useEffect,useRef} from 'react'
import footerInfo from './Local API/footer'

export default function Footer() {
    const [Hover1, setHover1] = useState(false)
    const [Hover2, setHover2] = useState(false)
    const hover = useRef()
    const info = useRef()
    const info1 = useRef()

    useEffect(() => {
        const hoverOver = hover.current.getBoundingClientRect().y
        const hoverSide = hover.current.getBoundingClientRect().x
        if (Hover1) {
            const changeY = info.current.getBoundingClientRect().y = hoverOver - 70 
            const changeX = info.current.getBoundingClientRect().x = hoverSide - 70
            info.current.style.top = `${changeY}px`
            info.current.style.left = `${changeX}px`
            info.current.style.opacity = 1 
        } else {
            
        }
    }, [Hover1])
    useEffect(() => {
        const hoverOver = hover.current.getBoundingClientRect().y
        const hoverSide = hover.current.getBoundingClientRect().x
        if (Hover2) {
            const changeY = info1.current.getBoundingClientRect().y = hoverOver - 70 
            const changeX = info1.current.getBoundingClientRect().x = hoverSide - 70
            info1.current.style.top = `${changeY}px`
            info1.current.style.left = `${changeX}px`
            info1.current.style.opacity = 1 
        } else {
            
        }
    }, [Hover2])
    return (
        <section className="Footer">
            {Hover1 && <p className="hover" ref={info}>**********************</p> }
            {Hover2 && <p className="hover1" ref={info1} >12345</p> }
            <h2 className="Contact" >{footerInfo[0].Title}</h2>
            <a className="Test1" target="_blank"  href="https://github.com/Koke-1" ><img  src={footerInfo[0].Image[0].img}  /></a>
            <a className="Test2"ref={hover} onMouseLeave={()=>setHover1(false)} onMouseOver={()=>setHover1(true)} ><img src={footerInfo[0].Image[1].img}/></a>
        </section>
    )
}
