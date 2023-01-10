import React from 'react';
import './aboutme.css';
const AboutMe = () => {
    return (
        <div className='container'>
            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <h2 className='text-center'>About Me</h2>
                        <p>I'm a passionate full stack developer from India.I'm 19 year old and persue my computer science degree
                        from Mahatma Jyotiba Phulle Rohilkhand University.I love hot coffee.I know many technologies like C/C++,Java,JavaScript,
                        Html/Css etc.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="https://pbs.twimg.com/profile_images/1596710147254018050/mPnnzS9h_400x400.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Full Stack Developer</h3>
                            <p className="fst-italic">
                                I'm a full stack developer.I can work on both technologies wheather it is front end or back end.
                                I also familiar with software engineering.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 March</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.Itsnik.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+915584856146</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Uttar Pradesh ,India</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>19</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>itsnik@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default AboutMe;