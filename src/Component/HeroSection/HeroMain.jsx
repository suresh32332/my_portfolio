import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'
import HeroGrandient from './HeroGrandient'

const HeroMain = () => {
  return (
    <div id='home' className='pt-48 pb-16  font-body'>
         <div className='flex md:flex-row sm:flex-col max-w-[1200%] mx-auto justify-between items-center relative px-4'>
            <HeroText/>
            <HeroPic/>
            <HeroGrandient/>
         </div>
        
    </div>
  )
}

export default HeroMain
