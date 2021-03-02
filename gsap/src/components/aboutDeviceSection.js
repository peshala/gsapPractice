import React, { useRef, useEffect } from 'react';
import phone1 from '../assets/images/phone.png';
import phone2 from '../assets/images/phone2.png';
import { gsap, TweenMax, TimelineLite, Power3, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutDevice = () => {
    useEffect(() => {
        const tl1 = gsap.timeline();

        let t2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.headerBottom',
                start: "top 10%",
                markers: false,
                toggleActions: "play none none reverse"
            }, defaults: { ease: "power1.inOut" }
        })
        t2.from('.topSection div', { y: 100, opacity: 0, ease: 'power4.out', delay: 0.3, skewY: 0.5, stagger: { amount: 0.3 } })


        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.trigger1',
                start: "top 0%",
                markers: false,
                scrub: true,
                pin: true,
                toggleActions: "play pause pause reverse"
            }, defaults: { ease: "power1.inOut" }
        })
        tl.from('.phoneContainer', { scale: 1, y: 0 })
            .to('.phoneContainer', { scale: 1, y: 0 })
            .to('.phoneContainer__left', { x: '-50%', delay: 0, ease: 'power4.out', }, { duration: 0 })
            .to('.phoneContainer__right', { x: '50%', delay: 0, ease: 'power4.out', }, { duration: 0 })
    })
    return (
        <div className='aboutDevice trigger1'>
            <div className='topSection'>
                <div className='topSection__title--Top'>
                    iPhone 12 and iPhone 12 mini
                </div>
                <div className='topSection__title--Middle'>
                    Blast past fast.
                </div>
                <div className='topSection__title--Bottom'>
                    5G speed. A14 Bionic, the fastest chip in a smartphone.
                    An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.
                </div>
            </div>
            <div className='bottomSection'>
                <div className='bottomSection__content'>

                </div>
                <div className='bottomSection__content'>
                    <div className='phoneContainer'>
                        <img className='phoneContainer__left' src={phone2} alt="logo" />
                        <img className='phoneContainer__center' src={phone1} alt="logo" />
                        <img className='phoneContainer__right' src={phone2} alt="logo" />
                    </div>
                </div>
                <div className='bottomSection__content'>

                </div>
            </div>
        </div>
    );
}

export default AboutDevice