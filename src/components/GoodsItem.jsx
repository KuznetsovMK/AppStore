function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={displayAssets.length === 0 ? null : displayAssets[0].full_background} alt={displayName}/>
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            mainId,
                            displayName,
                            price
                        })
                    }
                >
                    Купить
                </button>
                <span className="right" style={{fontSize: '1.8rem'}}>
          {price.regularPrice} руб.
        </span>
            </div>
        </div>
    );
}

export {GoodsItem};
