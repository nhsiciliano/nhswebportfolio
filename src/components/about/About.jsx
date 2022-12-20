import './about.css'
// import Award from '../../img/award.png'

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg" 
                        alt="" 
                        className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I am a passionate Front-End Engineer from Buenos Aires, Argentina who enjoys building interactive websites that run across platforms
                    and devices creating awesome dynamic user experiences.
                </p>
                <p className="a-desc">
                    I use technologies based in JavaScript like React, React Native and NextJS. Also I manage Redux, NodeJS,
                    ExpressJS, MongoDB and GraphQL. I build sites in HTML and CSS and also manage frameworks like Bootstrap and Tailwind CSS.
                </p>
                <div className="a-award">
                    <a target="_blank" rel='noopener noreferrer' href='https://www.codecademy.com/'>
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codecademy-512.png" alt="" className="a-award-img" />
                    </a>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Coding all the time</h4>
                        <p className="a-award-desc">
                            I got my <a target="_blank" rel='noopener noreferrer' href='https://www.codecademy.com/profiles/nhsiciliano/certificates/5f85dd867b67b60014ac9ea3'>
                                certificates</a> in CodeCademy and I continue learning to become a Full-Stack Engineer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About