import React from 'react'
import './Token.css'

const Token = ({image,name,price,volume,pricechange,marketcap}) => {
    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    return (
        <div className="token-container">
            <div className="token-row">
                <div className="token">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="token-symbol"></p>
                </div>
                <div className="token-data">
                    <div>
                    <p className="token-price">Price: {currencyFormat(price)} USD</p>
                    </div>
                    <div>
                    <p className="token-volume">Volume: {volume.toLocaleString()}</p>
                    </div>
                    <div>
                    {pricechange<0 ? (
                        <p className="token-percent red">{pricechange.toFixed(2)}%</p>
                    ):(
                        <p className="token-percent green">{pricechange.toFixed(2)}%</p>
                    )
                    }
                    </div>
                    <div>
                    <p className="token-marketcap">
                        Mkt Cap: {marketcap.toLocaleString()}
                    </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Token