import './FAQ.css';
import { fetchFAQ } from '../rtk/faq-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function FAQ() {

    const state = useSelector((state) => state.faq);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFAQ())
    }, [])

    return(
        <section id='faq' className="faq-container container py-5 mt-4">
            <h3 className="my-3 fw-bold mb-5">Frequently Asked Questions</h3>
            <div className='row mt-5 py-3 text-start'>
                {state && state.map((faq) => (
                <div className='col-md-6 mb-3' key={faq.id}>
                    <h4 className='fs-5'>
                        <span>&#126; </span>
                        {faq.question}
                    </h4>
                    <p>{faq.answer}</p>
                </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ;