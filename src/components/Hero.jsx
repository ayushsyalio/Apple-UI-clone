import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {heroVideo, smallHeroVideo} from "../utils"
import { useState } from 'react';
const Hero = ()=>{
    const[videosrc, setVideosrc] = useState(window.innerWidth<760 ? smallHeroVideo:heroVideo)
    const handlevideosrcset = ()=>{
        if(window.innerWidth<760){
            setVideosrc(smallHeroVideo)
        }else{
            setVideosrc(heroVideo)
            
        }
    }

    useEffect(()=>{
        window.addEventListener('resize',handlevideosrcset)
        return ()=>{
            window.removeEventListener('resize',handlevideosrcset )
        }

    },[])

    useGSAP(()=>{
        gsap.to("#hero",{
            opacity:1,
            delay:1.3,
            animationDelay:1,
        })
        gsap.to("#cta", {
            opacity:1,
            delay:1.3,
            y:"-50px"
        })

    },[])
    return (
        <section className='w-full nav-height bg-black relative'>
            <div className="h-5/6 w-full flex-center flex-col">
            <p id='hero' className="hero-title">iphone 15</p>
            <div className="md:w-10/12 w-9/12">
            <video className='pointer-events-none' autoPlay muted playsInline={true} key={videosrc}>
                <source src={videosrc} type='video/mp4'/>
            </video>

            </div>

            </div>

            <div id='cta' className="flex flex-col items-center opacity-0 translate-y-20">
                <a href="#highlights"  className="btn">Buy</a>
                <p className="font-normal text-xl">From $199/month or $999</p>

            </div>

        </section>
    )
}
export default Hero;