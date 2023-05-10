import React, { useState } from 'react'
import Item from './Item';

const Search = ({coins}) => {
  const [searchText, setSearchText]=useState('')
  // console.log(coins)
  return (
    <div className='rounded-div my-4 '>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-2xl font-bold my-2'>Search Crypto</h1>
        <form >
          <input className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl' onChange={(e)=>setSearchText(e.target.value)} type="text" placeholder='Search a coin' />
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins.filter((value)=>{
            if(searchText===''){
              return value;
            }else if(value.name.toLowerCase().includes(searchText.toLowerCase())){
              return value;
            }
          }).map((coin)=>(
           <Item key={coin.id} coin={coin}/>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default Search
