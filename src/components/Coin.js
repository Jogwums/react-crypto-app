import React from 'react'

import img from './img/loading-arrow.gif'

const Coin = ({ name, price, symbol, volume, image, priceChange, marketcap, loading }) => {

    return (loading) ? <div className="coin-container">
                         <img src={img} alt="loader" />
                    </div> : ( 
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
                    {`\u20A6`}{price}
                    </p>
                    <p className="coin-volume">
                        Volume:<br ></br>
                        {volume.toLocaleString()}
                    </p>
                    <p>
                        Variation: 
                    {priceChange <= 0 ? (
                        <p className="coin-percent red">
                            {priceChange}%
                        </p>
                    ): (
                        <p className="coin-percent green">
                            {priceChange.toLocaleString()}%
                        </p>
                    )}
                    </p>
                    <p className="coin-marketcap">
                        Mkt Cap:<br ></br> {`\u20A6`}{marketcap}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
