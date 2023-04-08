import { useMutation, useQuery } from 'react-query'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginValidationSchema } from '../../types/validationSchema'
import { useUserStore } from '../../zustand/userStore'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import useGoogleLogin from '../../hooks/useGoogleLogin/useGoogleLogin'
import logoImg from "../../assets/logo.png"

interface FormData {
  email: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()
  const setUser = useUserStore((state) => state.setUser)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginValidationSchema)
  })

  const { login, data } = useGoogleLogin()
  const mutation = useMutation({
    mutationFn: (userData: FormData) => {
      return axios.post(
        'https://ecommerce-mern-backend-rdu7.onrender.com/api/v1/auth/login',
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
    mutation.mutate(data)
  }


  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-8 w-auto"
            src={logoImg}
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                    type="email"
                    autoComplete="email"
                    {...register('email')}
                    required
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
                    {...register('password')}
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Sign in
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
                  Don't have an account?
                </span>
              </div>
              <div className="text-sm">
                <Link
                  to="/register"
                  className="font-medium text-red-500 hover:text-red-600"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
