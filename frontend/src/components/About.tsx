import React from 'react'

function About() {
    return (
    <div className='w-full my-[50px]'> 
        <div className='w-full h-[84px] text-[36px] font-medium leading-[42px] font-instrument flex justify-center items-center text-center'>BlessMed <br/> Check-in Ledger</div>
        <p className='text-[12px] font-mono font-500 flex items-center justify-center text-center' style={{ color: 'rgba(255, 240, 230, 0.7)' }}>A simple on-chain check-in counter for BlessMed, <br/> built on Stacks with Scaffold Stacks.</p>
    </div>

    );
  }

export default About