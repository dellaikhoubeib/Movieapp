import React, { useState } from 'react'
import {  v4 as uuidv4 } from 'uuid';

const AddMovie = ({handelAddmovie}) => {
    const {name,setName}=useState('')
    const {rate,setRate}=useState('')
    const {description,setDescription}=useState('')
    const {posterURL,setPosterURL}=useState('')
    const handelAdd=()=>{
        handelAddmovie(

            { id:uuidv4(),
             name:name,
             rate:rate,
             description:description,
             posterURL:posterURL
            }
        )
    }

  return (
    <div>
        <input placeholder='Title du film '  value={name} onChange={(e)=>setName(e.target.value)} />
        <input placeholder='rate du film '    value={rate} onChange={(e)=>setRate(e.target.value)}  />
        <input placeholder='description du film '   value={description} onChange={(e)=>setDescription(e.target.value)}  />
        <input placeholder='posterURL du film '  value={posterURL} onChange={(e)=>setPosterURL(e.target.value)}/>
        <button  onClick={()=>handelAdd} >Add Movie</button>
                

        
    </div>
  )
}

export default AddMovie