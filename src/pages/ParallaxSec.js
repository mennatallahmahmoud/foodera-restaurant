import './ParallaxSec.css';
import './global.css';

function ParallaxSec() {
    return(
        <section className='para-container position-relative py-5'>
            <div className='container py-3 d-flex justify-content-evenly align-items-center'>
                <h4 className='text-white fw-bold fs-3'>Baked fresh daily by bakers with passion.</h4>
                <a href='#' className='custom-btn'>Learn More</a>
            </div>
        </section>
    )
}

export default ParallaxSec;