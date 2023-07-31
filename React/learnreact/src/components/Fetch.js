import React, { useEffect, useState } from 'react'

export const Fetch = () => {
     const [quotes,setQuotes]=useState([])

     useEffect(()=>{
          fetch('https://dummyjson.com/quotes')
          .then(response => response.json())           
          .then(quotes => setQuotes(quotes.quotes.splice(0,10)))
     },[])
     
  return (
     <div className="container mt-4">
     <div className="row">
       {quotes.map(quote => (
         <div key={quote.id} className="col-md-12 mb-4">
           <div className="card bg-dark border-primary border-4 shadow">
             <div className="card-body">
               <h1 className="text-white card-title">{quote.quote}</h1>
               <p className=" text-danger">- {quote.author}</p>
             </div>
           </div>
         </div>
       ))}
     </div>
   </div>
  )
}
