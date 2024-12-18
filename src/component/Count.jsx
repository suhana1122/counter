import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'





function Count() {

  const [amount,setAmount]=useState("")
  const {count}= useSelector(state=>state.counterReducer)
  const dispatch=useDispatch()         //for dispatch usedispatch is needed

  const handleincrementByAmount=()=>{

    if (amount) {
      dispatch(incrementByAmount(parseInt(amount)))
      
    }
    else{
      alert("please enter the value")
    }
  }
  return (
    <>

      <div className=' text-center bg-dark p-5' style={{ width: "100%", height: "100vh" }}>
        <h4 className='text-light  mt-4'>Counter</h4>
        <div className='card shadow d-flex align-items-center justify-content-between w-50 p-5 mx-auto mt-5' >

          <h6>{count}</h6>

          <div className='d-flex align-items-center justify-content-around gap-5  mt-5' >

            <button onClick={()=>dispatch(increment())} className='btn btn-warning'>Increment</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
            <button onClick={()=>dispatch(decrement())} className='btn btn-success'>Decrement</button>

          </div>

          <div className='mt-5 d-flex justify-content-center'>

            <input onChange={(e)=>setAmount(e.target.value)} className='rounded p-2' type="number" name="number" placeholder='enter the value' id="" />
            <button onClick={handleincrementByAmount} className='btn btn-primary ms-3 text-light' >Increment by Amount</button>

          </div>
        </div>
      </div>

    </>
  )
}

export default Count