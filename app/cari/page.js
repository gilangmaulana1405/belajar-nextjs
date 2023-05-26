
"use client"
import React, { useState } from 'react'
import SectionResult from './sectionResult';

export default function Cari() {

    const [query, setQuery] = useState('')

    const onSearch = (e) => {
        // agar halaman ketika di klik tidak refresh
        e.preventDefault();
        const inputQuery = e.target[0].value
        setQuery(inputQuery)
    }

    return (
        <div>
            <form onSubmit={onSearch} className='w-full flex space-x-2 mt-5'>
                <input className='bg-zinc-100 px-3 w-5/6 rounded-sm' placeholder='Cari User Github' />
                <button className='bg-blue-500 text-white rounded-md py-2 px-3 w-1/6'>Cari Orang</button>
            </form>
            <br />

            {/* {query && query !== 0 ? (<SectionResult query={query}/>) :  (<p>tidak ada data</p>)}  */}
            {query && query !== undefined ? (<SectionResult query={query} />) : (<p>Tidak ada Data</p>)}
            <br />
            <br />

        </div>
    )
}
