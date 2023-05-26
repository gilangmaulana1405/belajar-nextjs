import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import ListItemSearch from '../components/ListItemSearch'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function SectionResult({ query }) {

    const { data, error } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
    const loading = !data && !error

    return (
        <div>
            <p className='text-lg mb-5'>Hasil Pencarian : <span className='font-bold'>{query}</span> </p>
            <div className='mt-10'>
                {loading && 'tunggu sebentar..'}
           
            {/* {data && JSON.stringify(data)} */}

            {data?.items.map((user,index)=>(
                <ListItemSearch key={index} name={user.login} imageUrl={user.avatar_url} repoUrl={user.repos_url} />
            ))}
            </div>
        </div >
    )


    // if( query === undefined && !data.items){
    //      return (
    //         <div>no data</div>
    //     )
    // }
    // else{
    //      return (
    //     <div>
    //         <p>hasil pencarian : {query}</p>
    //         <div>
    //             {loading && 'tunggu sebentar..'}
    //             {/* {data && JSON.stringify(data)} */}

    //             {
    //             data?.items.map((user, index) =>
    //             (
    //                 <ul key={user.id}>
    //                     <li>{index + 1} - <Link href={`/cari/${user.login}`}>{user.login}</Link> </li>
    //                 </ul>
    //             ))}
    //         </div>
    //     </div>  
    // )

    // }


}
