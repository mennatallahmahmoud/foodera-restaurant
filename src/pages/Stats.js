import './Stats.css';

function Stats() {
    return(
        <section className="stats-container">
            <div className="container row mx-auto text-light py-4 fw-bold">
                <div className='col-md-3 mb-4 mb-md-0'>
                    1287+<span className='d-block text-uppercase'>Savings</span>
                </div>
                <div className='col-md-3 mb-4 mb-md-0'>
                    5786+<span className='d-block text-uppercase'>Photos</span>
                </div>
                <div className='col-md-3 mb-4 mb-md-0'>
                    1440+<span className='d-block text-uppercase'>Rockets</span>
                </div>
                <div className='col-md-3 mb-4 mb-md-0'>
                    7110+<span className='d-block text-uppercase'>Globes</span>
                </div>
            </div>
        </section>
    )
}

export default Stats;