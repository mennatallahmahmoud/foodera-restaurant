import './Header.css';

function Header() {
    return(
        <header id='home' className="main-container d-flex align-items-center justify-content-center">
            <div className='row container'>
                <div className="col-md-5 text-start content">
                    <h2 className='fw-bold mb-4'>Good food choices are good investments.</h2>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                    <div className='main-btns'>
                        <button className='order-btn fw-bold mb-3 mb-lg-0 me-3'>
                            <a href='#explore-foods' className='d-flex align-items-center'> Order Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket2 ms-3" viewBox="0 0 16 16">
                                    <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0z"/>
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6z"/>
                                </svg>
                            </a>
                        </button>
                        <button className='learn-btn'>
                            <a href='#about-us' className='d-flex align-items-center'> Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right ms-3" viewBox="0 0 16 16">
                                    <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                                </svg>
                            </a>
                        </button>
                    </div>
                </div>
                <div className='col-md-7'></div>
            </div>
        </header>
    )
}

export default Header;