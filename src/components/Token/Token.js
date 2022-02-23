import React from 'react'
import './Token.css'

const Token = ({image,name,price,volume,pricechange24,high,low,marketcap,rank}) => {
    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    return (
        <div className="token-container">

               

            <div className="token-row">
                 <div className='token-rank'>
                    <p>{rank}</p>
                    </div>
                <div className="token">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="token-symbol"></p>
               </div>

                    <div>
                    <p className="token-price">Price: {currencyFormat(price)} USD</p>
                    </div>
                
    

                    <div>
                    <p>High: {currencyFormat(high)}</p>
                    </div>

                    <div>
                    <p>Low: {currencyFormat(low)}</p>
                    </div>

                    <div className='price-change'>
                    {pricechange24<0 ? (
                        <>
                        <p className="token-percent">24h:</p> <p className="token-percent red"> {pricechange24.toFixed(2)}%</p>
                        </>
                    ):(
                        <>
                        <p>24h:</p> <p className="token-percent green"> {pricechange24.toFixed(2)}%</p>
                        </>
                    )
                    }
                    </div>

                    <div>
                    <p className="token-volume">Volume: ${volume.toLocaleString()}</p>
                    </div>

                    <div>
                    <p className="token-marketcap">
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                    </div>
                    
                </div>
               
          </div>
            
        
    )
}

export default Token