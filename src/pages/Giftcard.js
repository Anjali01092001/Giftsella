import React from 'react'
import bg4 from '../images/bg4.avif';
const Giftcard = () => {
    return (
        <>
            <div className='cardbg' style={{ backgroundImage: `url(${bg4})` }}>
                <div className="card" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Giftcard
