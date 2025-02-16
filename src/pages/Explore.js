import { useEffect } from 'react';
import './Explore.css';
import './global.css';
import { motion } from 'framer-motion';
import { fetchExplore } from '../rtk/explore-foods-slice';
import { useDispatch, useSelector } from 'react-redux';

function Explore() {

    const state = useSelector((state) => state.explore)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExplore());
    }, [dispatch])
    
    return(
        <section id='explore-foods' className="container explore-container my-5 py-4">
            <h3>Explore Our Foods</h3>
            <p className="mx-auto mt-3 px-lg-5 w-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            <div className='row mt-5'>
                {state && state.map((item) => (
                <motion.div className='col-12 col-lg-4 mb-3 mb-lg-0' key={item.id}
                    initial={{ opacity: 0, y: 200}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.8}}
                    viewport={{ once:true, amount: 0.2 }}
                >
                    <div className="card border-0">
                        <img src={item.img} className="card-img-top rounded-3" alt={item.title} />
                        <div className="card-body text-start">
                            <h5 className="card-title mt-4">{item.title}</h5>
                            <div className='details mb-3'>
                                <span>Time: {item.time}</span> | 
                                <span> Serves: {item.serves}</span>
                            </div>
                            <div className='price mb-4 pb-3'>
                                <span className='price-after fs-4'>${item.priceAfterDiscount}</span>
                                <span className='price-before fs-4 ms-3 text-decoration-line-through'>${item.price}</span>
                            </div>
                            <a href="https://example.com/" className="custom-btn fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Order Now</a>
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" >
                                <div className="modal-dialog">
                                    <div className="modal-content p-3">
                                        <div className="modal-header border-0">
                                            <h1 className="modal-title fs-4 mx-auto" id="staticBackdropLabel">Make Your Order Now!</h1>
                                            <button type="button" className="btn-close mx-0" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={(e) => e.preventDefault()}>
                                                <div className="mb-3 d-flex gap-3">
                                                    <input type="text" className="form-control"  placeholder='Your Name' required/>
                                                    <input type="email" className="form-control" placeholder='Email Address' id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                                </div>
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder='Address' required/>
                                                </div>
                                                <div className="mb-3">
                                                    <input type="number" className="form-control" placeholder='Zip Code' required/>
                                                </div>
                                                <div className="mb-3">
                                                    <input type="number" className="form-control" placeholder='Mobile No.' required/>
                                                </div>
                                                <div className="mb-3">
                                                    <select required>
                                                        {state && state.map((i) => (
                                                            <option key={i.id}>{i.title}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer border-0">
                                            <button type="button" className="custom-btn mx-auto fw-bold">Send Message
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send ms-2" viewBox="0 0 16 16">
                                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Explore;