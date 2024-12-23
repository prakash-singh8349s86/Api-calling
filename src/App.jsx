import React, { useState } from 'react'
import axios from "axios";


const App = () => {
  const [userData, setuserData] = useState([])

 const linkHandler= async() =>{
   const response= await axios.get('https://picsum.photos/v2/list')
  setuserData(response.data)
 
  }
 
  return (
    <div>
      <button onClick={linkHandler}  className='px-8 py-4 bg-green-600 text-2xl font-semibold active:scale-95 text-white m-10 '  > Get Data </button>

      <div className='bg-slate-200 w-100'>{userData.map((elem)=>{
        
        return <div className='flex items-center justify-between'>
              <img className="w-60 h-40 rounded mt-2" src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
              </div>
        
      })}
      </div>




    
      
    </div>
    
  )
}

export default App  