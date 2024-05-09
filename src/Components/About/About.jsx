import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile.png"

const About = ( ) => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className="about-sections">
            <div className='about-left'>
                <img src={profile_img} alt='' />
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am an experienced Graphic Designer with over a decade of professional expertise in the field. Throughtout my career, I have had the privilage of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>I'm very potential and very good when it comes to team work </p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>Adobe Photoshop</p><hr style={{width:"50%"}} /></div>
                    <div className='about-skill'><p>Adobe Illustrator</p><hr style={{width:"70%"}} /></div>
                    <div className='about-skill'><p>Creativity</p><hr style={{width:"60%"}} /></div>
                    <div className='about-skill'><p>Adobe Indesig & After effect</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>90+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About