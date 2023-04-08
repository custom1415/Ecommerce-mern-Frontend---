import React from 'react'
import { Link } from 'react-router-dom'
import { useUserStore } from '../../../zustand/userStore'
import { Popover } from '@headlessui/react'
import User from '../../user/user'
import { AiOutlineUser } from 'react-icons/ai'

type Props = {}

const AuthLinks = (props: Props) => {
  const { name, userId, photo } = useUserStore((state) => state.user)

  return (
    <div className="">
      {!name && !userId ? (
        <>
          {' '}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-gray-800"
            >
              Log in
            </Link>
            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            <Link
              to="/register"
              className="text-sm font-medium text-gray-700 hover:text-gray-800"
            >
              Create account
            </Link>
          </div>
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            <AiOutlineUser className="sm:hidden cursor-pointer w-6 h-6 text-gray-400 " />
          </Link>
        </>
      ) : (
        <>
          {/* {photo ? (
            <img
              src={photo}
              className="w-6 h-6 rounded-full"
              alt="profile"
              referrerPolicy="no-referrer"
            />
          ) : (
            <img
              src={
                'https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-1.jpg'
              }
              className="w-6 h-6 rounded-full"
              alt="profile"
              referrerPolicy="no-referrer"
            />
          )} */}
          {/* <img
            src={
              photo
                ? photo
                : 'https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-1.jpg'
            }
            className="w-6 h-6 rounded-full"
            alt="profile"
            referrerPolicy="no-referrer"
          /> */}
          <User photo={photo} name={name} />
        </>
      )}
    </div>
  )
}

export default AuthLinks
