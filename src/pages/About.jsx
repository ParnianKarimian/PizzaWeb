import React from 'react'
import MultiplePizza from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ background: `url(${MultiplePizza})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, obcaecati enim voluptas sint optio itaque nesciunt fugit vero culpa tempora voluptate eligendi eius ducimus, dolorum aperiam non aspernatur ut sunt vitae, tenetur consequatur unde porro numquam tempore! Quisquam, id? Alias soluta quasi eius tempore odio recusandae rem reiciendis, saepe perspiciatis nulla impedit itaque dolorem assumenda praesentium! Laudantium laboriosam corrupti quas, repellat repellendus possimus placeat, esse quo quos delectus sit, earum perferendis necessitatibus voluptate. Harum cupiditate est alias placeat eum delectus facere libero nisi facilis, ducimus maiores explicabo qui? Odio repudiandae necessitatibus deleniti totam enim aperiam quia quo libero placeat expedita.</p>
        </div>
    </div>
  )
}

export default About