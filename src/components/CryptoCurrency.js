import React from 'react'
import axios from 'axios'
import Coin from './Coin'

// API_URL_ngn = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false';
//API_URL_usd = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function  CryptoCurrency() {
    const [crypto, setCrypto] = React.useState([])
    const [search, setSearch] = React.useState('')
    
    
    React.useEffect(() => { 
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => setCrypto(res.data))
        .catch(error => console.log(error))
    }, [])
        
    const handleChange = (e) => {
        setSearch(e.target.value)
    }


    const filteredCrypto = crypto.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase()))


        return (
            <>
                <div className="container">
                    <div className="search-container">
                        <h1 className="coin-text">
                            Crypto World 
                        </h1>
                        <form action="" 
                              className="search-form">
                                  <input type="text" placeholder="Search" 
                                  className="coin-input" onChange={handleChange}/>
                              </form>
                    </div>
                </div>
                {filteredCrypto.map(item => {
                    return (
                        <Coin key={item.id} name={item.name} price={item.current_price} symbol={item.symbol}
                        marketcap={item.market_cap} image={item.image}
                        priceChange={item.price_change_percentage_24h}
                        volume={item.total_volume} />
                    )
                })}

                {/* {crypto.map(item => (
                    <>
                        <div className="table">
                            <h1>Coin: {item.name}</h1>
                            <p>Price: {`\u20A6`}{item.current_price}</p>
                        </div>
                    </>
                ))} */}
            </>
        )
    }

    export default CryptoCurrency;