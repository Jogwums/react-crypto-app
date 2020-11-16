import React from 'react'
import axios from 'axios'
import Coin from './Coin'



// API_URL_ngn = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false';
//API_URL_usd = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function  CryptoCurrency() {
    const [crypto, setCrypto] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    

    // setLoading(true);
    React.useEffect(() => { 
        setLoading(true);
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => setCrypto(res.data))
        .catch(error => console.log(error))
        .then(() => setLoading(false))

    }, [])
        
    const handleChange = (e) => {
        setSearch(e.target.value.trim()) //ensure spaces do not affect entry 
    }

    const handleSubmit = (e) => {e.preventDefault();}

    const filteredCrypto = crypto.filter(item => 
        item.name.trim().toLowerCase().includes(search.toLowerCase()))


        return (
            <>
                <div className="container">
                    <div className="search-container">
                        <h1 className="coin-text">
                            Crypto World 
                        </h1>
                        <form action="" onSubmit={handleSubmit}
                              className="search-form">
                                  <input type="text" placeholder="Search" 
                                  className="coin-input" onChange={handleChange}/>
                        </form>
                        {
                            
                        }
                    </div>
                </div>
                {filteredCrypto.map(item => {
                    return (
                        <Coin key={item.id} name={item.name} price={item.current_price} symbol={item.symbol}
                        marketcap={item.market_cap} image={item.image}
                        priceChange={item.price_change_percentage_24h}
                        volume={item.total_volume} loading={loading} />
                    )
                })}
            </>
        )
    }

    export default CryptoCurrency;