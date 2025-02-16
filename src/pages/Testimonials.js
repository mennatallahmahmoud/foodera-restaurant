import { useDispatch, useSelector } from 'react-redux';
import './Testimonials.css';
import { useEffect } from 'react';
import { fetchReviews } from '../rtk/reviews-slice';

function Testimonials() {

    const state = useSelector((state) => state.reviews);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReviews())
    }, [])
    
    return(
        <section id='reviews' className="reviews-container py-5">
            <h3 className='my-3 text-light fw-bold fs-2'>Testimonials</h3>
            <div className='container mt-5'>
                <div id="carouselExampleIndicators" className="carousel slide bg-light p-5 rounded-4 my-5">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {state && state.map((review, i)=> (
                        <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={review.id}>
                            <img src={review.img} className="d-block rounded-circle mx-auto" alt={review.name} />
                            <p className='fs-4 px-lg-5 mt-4 w-75 mx-auto mb-5'>{review.review}</p>
                            <span className='d-block fw-bold mb-3'>{review.name}</span>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;