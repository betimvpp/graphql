/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql, useQuery } from "@apollo/client"
import { NewUserForm } from "./components/NewUserForm";

type User = {
  id: string;
  name?: string;
}

export const GET_USER = gql`
  query{
    users {
      id
      name
    }
  }
`
function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USER)

  console.log(data)
  return (
    <div>
      <ul>
        {loading ? <p>Carregando ...</p> :
          data?.users.map((user: any) => <li key={user.id}>{user.name}</li>)}
      </ul>

      <NewUserForm />
    </div>
  )
}

export default App
