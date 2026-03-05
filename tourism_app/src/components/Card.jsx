import { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {

    const [readmore, setreadmore] = useState(false);

    function readmoreHandler() {
        setreadmore(!readmore);
    }

    return (
        <div className="main-card">
            <img className="card-img" src={image} alt={name} />

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-name">{name}</h4>
                    <h4 className="tour-price">₹{price}</h4>
                </div>

                <div className="tour-description">
                    {readmore ? info : `${info.substring(0, 200)}...`}
                    <span className="readmore" onClick={readmoreHandler}>
                        {readmore ? " show less" : " read more"}
                    </span>
                </div>
            </div>

            <button className="btn" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;