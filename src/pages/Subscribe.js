import './Subscribe.css';
import './global.css';

function Subscribe() {
    return(
        <section className="subscribe-container container py-5 my-5">
            <h2 className="px-5">Hurry up! Subscribe our newsletter<br/> and get 25% Off</h2>
            <p className='mt-4 mb-5 fs-5'>Limited time offer for this month. No credit card required.</p>
            <div className="mb-3 d-flex align-items-center justify-content-center flex-column flex-lg-row">
                <input type="text" className="px-3 py-2 me-lg-4 mb-3 mb-lg-0 fw-bold" placeholder='Email Address here'/>
                <a href='#' className='custom-btn fw-bold'>Subscribe</a>
            </div>
        </section>
    )
}

export default Subscribe;