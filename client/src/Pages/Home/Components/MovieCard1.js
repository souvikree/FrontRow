import React from 'react';
const MovieCard1 = (props) => {
  return (
    <div className='h-[200px] w-[150px] rounded-xl overflow-hidden mb-10 group mx-3'>
        <img src={props.posterurl} alt="" className='bg-cover rounded-lg'/>
        
    </div>
  )
}

export default MovieCard1;
