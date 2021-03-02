import logo from './logo.svg';
import './App.scss';
import {gsap,TweenMax,TimelineLite,Power3} from "gsap";
import {useRef,useEffect} from 'react';
import ScrollMagic from "scrollmagic";

import Navbar from './components/navBar'
import Header from './components/header'
import IntroOverlay from './components/introOverlay'
import AboutDeviceSection from './components/aboutDeviceSection'

function App() {
  let app = useRef(null);
  useEffect(()=>{
    const tl = gsap.timeline();
    tl.from ('.headerSection__title',1 , {
      y:100,
      opacity:0,
      ease: 'power4.out',
      delay:0.3,
      skewY:0.5,
      stagger: {
        amount:0.3
      }
    },{duration:1})
    .to ('.introOverlay__top__section',1,{
      height:0,
      ease:'expo.inOut',
      delay:1,
      stagger: {
        amount:1
      }
    },{duration:1})
    .to ('.introOverlay__bottom__section',1.6,{
      width:0,
      ease:'expo.inOut',
      delay:2,
      stagger: {
        amount:0.5
      }
    },{duration:1.6})
    .to('.introOverlay',4.5,{
      css:{display:'none'}
    },{duration:0})
    .from('.headerBottom__image img',1,{
      scale:2,
      ease:'expo.inOut',
      delay:2.5,
      stagger: {
        amount:0.5
      }
    },{duration:1})
  })

  return (
    <div className="App">
            <IntroOverlay></IntroOverlay>
      <Navbar></Navbar>
      <Header></Header>
      <AboutDeviceSection></AboutDeviceSection>
    </div>
  );
}

export default App;
