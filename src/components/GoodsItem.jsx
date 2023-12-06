import React from "react";

function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets
    } = props;

    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName}/>
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button className='btn'>Buy</button>
                <span className='right' style={{fontSize: '1.8rem'}}>{price.regularPrice} руб.</span>
            </div>
        </div>
    );

}

export {GoodsItem}