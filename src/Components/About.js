import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full  md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About</p>
            </div>
            <p className='text-xl mt-20'>
              I am Anna Joy. I completed my Diploma in Computer Engineering from Government Polytechnic College Kothamangalam.
              Currently I am working at infosys Limited,Trivandrum  as System Assosicate.Now I am looking for a Job in development field.

            </p>
             <br/>
             <p className='text-xl'>I am outgoing,dedicated,and open-minded.I get across to people and adjust to changes with ease.
             I believe that a person should work on developing their professional skills and learning new things all the time.Currently ,I am looking for new career opportunities my current job position cannot provide.</p>

            </div>
    </div>
  )
}

export default About