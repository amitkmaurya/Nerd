import React from 'react'

export default function Hero() {
    return (
        <div className='container'>
           
        <div className='header'>
           <h1><span className='case'>Data's</span> Collection</h1>
           <p>Your home base for viewing and analyzing your <br/> NFT collection.</p>
        </div>
        
        <div className='grid'>
        <div className='card'>
           <p><span className='bold'>03/04/22</span> <br/>Joined NC</p>
        </div>
        <div className='card'>
        <p><span className='bold'>12/1/21</span> <br/>First NFT</p>
        </div>
        <div className='card'>
        <p> <span className='bold'>09 </span><br/>Logins/Day</p>
        </div>
        <div className='card'>
        <p><span className='bold'>Top 6%</span> <br/>Nerd</p>
        </div>
   
        </div>



        </div>
    )
}