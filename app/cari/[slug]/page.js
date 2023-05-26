// fetching pattern

import React, { Suspense } from 'react'
import RepoList from './sectionRepository'

// parallel data fetching
// const getDataUser = async (param) => {
//   const res = await fetch(`https://api.github.com/users/${param}`)
//   return res.json()
// }

// const getDataRepository = async (param) => {
//   const res = await fetch(`https://api.github.com/users/${param}/repos`)
//   await new Promise(r=> setTimeout(r,3000))
//   return res.json()
// }

// export default async function DetailCari({ params }) {

//   const dataUser = getDataUser(params.slug)
//   const dataRepository = getDataRepository(params.slug)

//   const [user, repository] = await Promise.all([dataUser, dataRepository])

//   return (
//     <div>

//         <h3>Data User : {params.slug}</h3>
//         <ul>
//           <li>{JSON.stringify(user.name)}</li>
//           <li>{JSON.stringify(user.company)}</li>
//         </ul>

//         <h3>Repository :</h3>
//         {repository.map((user,i)=>(
//         <ul>
//           <li>{JSON.stringify(user.full_name)}</li>
//         </ul>
//         ))}

//     </div>
//   )
// }


// sequencial data fetching
// const getDataUser = async (param) => {
//   const res = await fetch(`https://api.github.com/users/${param}`)
//   return res.json()
// }

// const getDataRepository = async (param) => {
//   const res = await fetch(`https://api.github.com/users/${param}/repos`)
//   await new Promise(r => setTimeout(r, 3000))
//   return res.json()
// }

// const RepoList = async ({slug}) => {
//   const dataRepository = await getDataRepository(slug)
//   return <>
//       <h3>Repository :</h3>
//       {dataRepository.map((user, i) => (
//         <ul>
//           <li>{JSON.stringify(user.full_name)}</li>
//         </ul>
//       ))}
//   </>
// }

// export default async function DetailCari({ params }) {

//   const dataUser = await getDataUser(params.slug)

//   return (
//     <div>

//       <h3>Data User : {params.slug}</h3>
//       <ul>
//         <li>{JSON.stringify(dataUser.name)}</li>
//         <li>{JSON.stringify(dataUser.company)}</li>
//       </ul>


//       <Suspense fallback={<h4>Sedang mengambil repository...</h4>}>
//         <RepoList slug={params.slug} />
//       </Suspense>

//     </div>
//   )
// }


// blocking rendering in a route
// masuk ke halaman sectionRepository.js

const getDataUser = async (param) => {
  const res = await fetch(`https://api.github.com/users/${param}`)
  return res.json()
}

export default async function DetailCari({ params }) {

  const dataUser = await getDataUser(params.slug)

  return (
    <div>
      
      {/* <h3>Data User : {params.slug}</h3> */}
     
      <div className='my-4'>
        <div class="px-4 sm:px-0">
          <h3 class="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
        </div>
        <div class="mt-6 border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{dataUser.name}</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Company</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{dataUser.company}</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Location</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{dataUser.location ? (dataUser.location) : '-'}</dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> {dataUser.bio} </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <Suspense fallback={<h4>Sedang mengambil repository...</h4>}>
                <RepoList slug={params.slug} />
              </Suspense>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
