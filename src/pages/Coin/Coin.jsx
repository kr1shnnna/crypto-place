import './Coin.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext.jsx'
import LineChart from '../../components/LineChart/LineChart.jsx'

const Coin = () => {

  const {coinId}=useParams();
  const [coinData,setCoinData]=useState();
  const {currency}=useContext(CoinContext);
  const [historicalData,setHistoricalData]=useState();

  const fetchCoinData=async()=>{
    const options={
      method:'GET',
      headers:{
        accept:'application/json',
        'x-cg-demo-api-key':'CG-EnjTB7f18q7pUfK7F98rzf2h'
      }
    }

      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`,options)
      .then(res=>res.json())
      .then(data=>setCoinData(data))
      .catch(err=>console.error(err));
  }

  const fetchHistoricalData=async()=>{
     const options={
      method:'GET',
      headers:{
        accept:'application/json',
        'x-cg-demo-api-key':'CG-EnjTB7f18q7pUfK7F98rzf2h'
      }
    }

      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10}`,options)
      .then(res=>res.json())
      .then(data=>setHistoricalData(data))
      .catch(err=>console.error(err));


  }

  useEffect(()=>{

    fetchCoinData();
  },[currency])


  if(coinData && historicalData){

    return (
    <div className='coin'>
      <div className='coin-name'>
        <img src={coinData.image.large} />

        <p>
          <b>{coinData.name} ({coinData.symbol.toUpperCase()})</b>
        </p>

      </div>
       
       <div className="coin-chart">
        <LineChart  historicalData={historicalData}/>
       </div>

        
    </div>
  )

  }
  else{

    return(
      <div className="spinner">
        <div className="spin">

        </div>

      </div>
    )
  }

  
}

export default Coin