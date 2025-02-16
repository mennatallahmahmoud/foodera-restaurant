import './About.css';
import './global.css';
import AboutImage from '../assets/about.png';
import { motion } from 'framer-motion';

function About() {

    return(
        <section id='about-us' className='container py-5 my-lg-5'>
            <div className='about-container row'>
                <motion.div className='about-img col-lg-6'
                    initial={{ x: -50, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.3}}
                    viewport={{ once:true, amount: 0.4 }}
                >
                    <img className='img-fluid rounded-3' src={AboutImage} alt='About Sector'/>
                </motion.div>
                <motion.div className='about-text col-lg-6 d-flex justify-content-center align-items-center flex-column mt-3 mt-lg-0'
                    initial={{ x: 50, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1}}
                    viewport={{ once:true, amount: 0.4 }}
                >
                    <h3 className='fw-bold pe-lg-5 text-center text-lg-start me-lg-auto mb-3'>We pride ourselves on making real food from the best ingredients.</h3>
                    <p className='pe-lg-5 text-center text-lg-start me-lg-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <a href='#about-2' className='custom-btn mt-3 mx-auto me-lg-auto ms-lg-0 fw-bold'>Learn More</a>
                </motion.div>
            </div>
        </section>
    )
}

export default About;