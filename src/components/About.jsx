import photo from './signal-2024-11-04-221228.png'
function About() {
    return(
        <>
        <div className="about-container" id='about'>
              
                <div className='photo' >
                    <img src={photo} alt="kavya photo" />
                </div>
                <div className='about-para' >
                <h1>About</h1>
                <br />
                <h2>I'm KAVYA Lab Technician    <i class="fa-solid fa-vial-virus"></i></h2>
                <p >Detail-oriented and skilled Lab Technician with [3 years] of experience in laboratory settings. Proficient in conducting tests, maintaining equipment, and ensuring compliance with safety protocols. Seeking to leverage expertise in [specific area, e.g., clinical research, quality control] to contribute to a dynamic team.</p>
                </div>
              
        </div>
        </>
    )
}
export default About;