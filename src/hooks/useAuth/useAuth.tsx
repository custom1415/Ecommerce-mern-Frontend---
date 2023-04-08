import axios from 'axios'
import { FormEvent } from 'react'
import { useMutation } from 'react-query'

interface FormData {
  name: string
  email: string
  password: string
}
export const useAuth = (data: FormData) => {
  const mutation = useMutation({
    mutationFn: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      return axios.post(
        'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/auth/register',
    {},{withCredentials:true}
      )
    }
  })

  return { mutation, isLoading: mutation.isLoading }
  //   return <form onSubmit={mutation.mutate}>...</form>
}

// // This will work
// const CreateTodo = () => {
//   const mutation = useMutation({
//     mutationFn: (formData) => {
//       return fetch('/api', formData)
//     }
//   })
//   const onSubmit = (event) => {
//     event.preventDefault()
//     mutation.mutate(new FormData(event.target))
//   }

//   return <form onSubmit={onSubmit}>...</form>
// }

// function App() {
//   const mutation = useMutation({
//     mutationFn: (newTodo) => {
//       return axios.post('/todos', newTodo)
//     }
//   })

//   return (
//     <div>
//       {mutation.isLoading ? (
//         'Adding todo...'
//       ) : (
//         <>
//           {mutation.isError ? (
//             <div>An error occurred: {mutation.error.message}</div>
//           ) : null}

//           {mutation.isSuccess ? <div>Todo added!</div> : null}

//           <button
//             onClick={() => {
//               mutation.mutate({ id: new Date(), title: 'Do Laundry' })
//             }}
//           >
//             Create Todo
//           </button>
//         </>
//       )}
//     </div>
//   )
// }
