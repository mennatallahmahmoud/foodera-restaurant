import './About2.css';
import './global.css';
import AboutImage from '../assets/about2.png';
import { motion } from 'framer-motion';

function About2() {
    return(
        <section id='about-2' className='container py-5'>
            <div className='about-container row'>
                <motion.div className='col-lg-6 d-flex justify-content-center align-items-center flex-column mt-3 mt-lg-0'
                    initial={{ x: -50, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.3}}
                    viewport={{ once:true, amount: 0.4 }}
                >
                    <h3 className='fw-bold pe-lg-5 text-center text-lg-start me-lg-auto mb-3'>We make everything by hand with the best possible ingredients.</h3>
                    <p className='pe-lg-5 text-center text-lg-start me-lg-auto mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul className='text-start me-lg-auto'>
                        <li className='mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check-lg me-3" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Etiam sed dolor ac diam volutpat.
                        </li>
                        <li className='mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check-lg me-3" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            Erat volutpat aliquet imperdiet.
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check-lg me-3" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                            purus a odio finibus bibendum.
                        </li>
                    </ul>
                    <a href='https://example.com'className='custom-btn mt-3 mx-auto me-lg-auto ms-lg-0 fw-bold'>Learn More</a>
                </motion.div>
                <motion.div className='col-lg-6'
                    initial={{ x: 50, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1}}
                    viewport={{ once:true, amount: 0.4 }}
                >
                    <img className='img-fluid rounded-3' src={AboutImage} alt='About Image'/>
                </motion.div>
            </div>
        </section>
    )
}

export default About2;