"use client"
import React, { useState } from 'react'

export default function Calculator() {

    const [angka1,setAngka1] = useState(0)
    const [angka2,setAngka2] = useState(0)
    const [hasil, setHasil] = useState(0)

  return (
    <div>
      <div div className = 'mt-10' >
        <form>
            <div>
              <input className = 'bg-zinc-100 px-3 w-1/5 rounded-sm' placeholder="angka 1" value={angka1} onChange={(e)=> setAngka1(Number(e.target.value))} />
            </div>
            <div className='mt-3'>
              <input className = 'bg-zinc-100 px-3 w-1/5 rounded-sm' placeholder="angka 2" value={angka2} onChange={(e)=> setAngka2(Number(e.target.value))} />
            </div>
            <button type="button" className='bg-blue-600 text-white rounded-md py-2 px-3 w-20 mt-3' onClick={()=> setHasil(angka1+angka2)}>Hitung</button>
            <p className='my-5'>Hasil : <span className='font-bold'>{hasil}</span></p>
        </form>
      </div>
    </div>
  )
}
