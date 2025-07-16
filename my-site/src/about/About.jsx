import './About.css'
import skills from './skills.json'

function About() {
    return (
        <div id='about_page'>
            <div className="about-container"  id='about_jump'>
                <h2 className='about-subheader'>About Me</h2>
                <p className='about-summary'>
                    Hi! I'm Muhammad Alafifi, an aspiring software engineer with a passion for learning new technologies and seeing my creations come to fruition for the public.
                    I graduated from Rensselaer Polytechnic Institute with a B.S. in Computer Science in 2025.
                    I'm currently most interested in - and researching - distributed systems and cloud computing. I have hands-on experience in building scalable fault-tolerant systems, working with virtualization technologies like Docker, and building cloud based solutions. I also worked extensively with web development, creating responsive and user-friendly interfaces using React and other modern frameworks on both the front-end and back-end.
                </p>
                <p className='about-summary'>
                    I started my journey in programming and development at a young age, initially exploring HTML and CSS then later Java to create simple games. I was driven with the hope of building the same types of creations that captivated me as a child, especially seeing how they brought together families and friends with ease.


                    Over the years, I've expanded my skill set to include C, C++, Python, and various web technologies as my passion for computers grew.
                    I've carried that same drive, of seeing my builds coming to life, towards more complex projects and the infrastructure behind much of the software we use daily, where I am exploring now.
                    In my free time, I enjoy playing football (American soccer), mountain biking, and working out.
                </p>
            </div>
            <div className='about-skills-section'>
                <h2 className='about-subheader'>Skills</h2>
                <div className='about-skills-group'>
                    <h3>Programming Languages</h3>
                    <div className='about-skills-subsection'>
                    {skills.Prog.map(skill => (
                        <span className='about-skill' key={skill}>{skill}</span>
                    ))}
                    </div>
                </div>

                <div className='about-skills-group'>
                    <h3>Software/Tools</h3>
                    <div className='about-skills-subsection'>
                    {skills['Soft:'].map(skill => (
                        <span className='about-skill' key={skill}>{skill}</span>
                    ))}
                    </div>
                </div>

                <div className='about-skills-group'>
                    <h3>Libraries</h3>
                    <div className='about-skills-subsection'>
                    {skills.Libraries.map(skill => (
                        <span className='about-skill' key={skill}>{skill}</span>
                    ))}
                    </div>
                </div>

                <div className='about-skills-group'>
                    <h3>Concepts/Paradigms</h3>
                    <div className='about-skills-subsection'>
                    {skills.Paradigms.map(skill => (
                        <span className='about-skill' key={skill}>{skill}</span>
                    ))}
                    </div>
                </div>

                <div className='about-skills-group'>
                    <h3>Spoken Languages</h3>
                    <div className='about-skills-subsection'>
                    {skills.Lang.map(lang => (
                        <span className='about-skill' key={lang}>{lang}</span>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About