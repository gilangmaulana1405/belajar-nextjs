// blocking rendering in a route

const getDataRepository = async (param) => {
  const res = await fetch(`https://api.github.com/users/${param}/repos`)
  await new Promise(r => setTimeout(r, 3000))
  return res.json()
}


const RepoList = async ({slug}) => {
  const dataRepository = await getDataRepository(slug)
  return <>
      <h3>Repository :</h3>
      {dataRepository.map((user, i) => (
        <ul>
          <li>{JSON.stringify(user.full_name)}</li>
        </ul>
      ))}
  </>
}

export default RepoList