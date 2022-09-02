import React from 'react'
import Hero from '../Components/MainPage/Main/Index'
import Testimonial from '../Components/MainPage/Info/index'
import Statistics from '../Components/MainPage/Statistics/Index'
import Image from '../Components/MainPage/Image/Index'
function Home() {
  return (
    <div>
            
            <Hero/>
      <Testimonial/>
      <Statistics/>
      <Image/>

    </div>
  )
}

export default Home