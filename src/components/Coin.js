import React from 'react'

const Coin = ({ name, price, symbol, volume, image, priceChange, marketcap }) => {
    
    return  ( 
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="coin" />
                    <h2>{name}</h2>
                    <p>
                      <button className="coin-symbol">{symbol}</button>
                    </p>
                    
                </div>
                <div className="coin-data">
                    <p className="coin-price">
                        Price:<br ></br>
                    {price.toLocaleString('en-NG', {
                                            style: 'currency',
                                            currency: 'NGN',})}
                    </p>
                    <p className="coin-volume">
                        Volume:<br ></br>
                        {volume.toLocaleString('volume')}
                    </p>
                    <p>
                        Variation: 
                    {priceChange <= 0 ? (
                        <p className="coin-percent red">
                            {priceChange.toLocaleString()}%
                        </p>
                    ): (
                        <p className="coin-percent green">
                            {priceChange.toLocaleString()}%
                        </p>
                    )}
                    </p>
                    <p className="coin-marketcap">
                        Mkt Cap:<br ></br>{marketcap.toLocaleString('en-NG', {
                                            style: 'currency',
                                            currency: 'NGN',})}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
