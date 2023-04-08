import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useMutation } from 'react-query'
import { signupValidationSchema } from '../../types/validationSchema'
import { Link, useNavigate } from 'react-router-dom'
import { useUserStore } from '../../zustand/userStore'
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function Register() {
  const navigate = useNavigate()
  const setUser = useUserStore((state) => state.setUser)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(signupValidationSchema)
  })

  const mutation = useMutation({
    mutationFn: (userData: FormData) => {
      return axios.post(
        'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/auth/register',
        userData
      )
    },
    onSuccess(data) {
      const { name, userId } = data.data.user

      if (name && userId) {
        setUser({ name, userId })
        navigate('/')
      }
    }
  })
  const onSubmit = (data: FormData) => {
    console.log('called')

    console.log(data)

    mutation.mutate(data)
  }
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-8 w-auto"
            src="../../../assets/logo.png"
            alt="Chorbazar Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Register your account
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    type="text"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    {...register('name')}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="text"
                    autoComplete="email"
                    required
                    {...register('email')}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    {...register('password')}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirm-password"
                    type="password"
                    autoComplete="current-password"
                    {...register('confirmPassword')}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Register
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <button
                    onClick={() =>
                      window.open(
                        'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/auth/github',
                        '_self'
                      )
                    }
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Github</span>
                    <BsGithub className="h-5 w-5" />
                  </button>
                </div>

                <div>
                  <button
                    onClick={() =>
                      window.open(
                        'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/auth/google',
                        '_self'
                      )
                    }
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <FcGoogle className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm">
                <span className="font-medium text-gray-400">
                  Already have an account?
                </span>
              </div>
              <div className="text-sm">
                <Link
                  to="/login"
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
