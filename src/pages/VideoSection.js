import './VideoSection.css';

function VideoSection() {
    return(
        <div className='video-container py-5 d-flex align-items-center'>
            <div className='container mx-auto py-3'>
                <h2 className='fw-bold pb-3 fs-2 fs-lg-5 w-75 mx-auto'>
                    When a man's stomach is full it makes no difference whether he is rich or poor.
                </h2>
                <p className='mb-5 w-75 mx-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                </p>
                <a href='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-play-fill me-1" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                    </svg>
                Watch Our Story</a>
            </div>
        </div>
    )
}

export default VideoSection;