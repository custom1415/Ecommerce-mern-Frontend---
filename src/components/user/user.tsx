import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { BiLogOut } from 'react-icons/bi'
import useGoogleLogout from '../../hooks/useGoogleLogin/useGoogleLogout'
import { Link } from 'react-router-dom'

const links = [
  {
    name: 'Wishlist',
    description: 'Create your own targeted content',
    link: '/wishlist',
    icon: IconTwo
  },
  {
    name: 'Orders',
    description: 'Keep track of your growth',
    link: '/orderhistory',
    icon: IconThree
  }
]
type Props = {
  photo?: string
  name: string
}

export default function User({ photo, name }: Props) {
  const { logout } = useGoogleLogout()
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="ring-2 h-6 w-6 flex items-center ring-gray-300  ring-offset-2 rounded-full  ring-opacity-75 outline-none">
            <img
              src={
                photo
                  ? photo
                  : 'https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-1.jpg'
              }
              className="w-6 h-6 object-center  rounded-full"
              alt="profile"
              referrerPolicy="no-referrer"
            />
            <ChevronDownIcon
              className={`${open ? '' : 'text-opacity-70'}
                 h-5 w-5  transition duration-150 ease-in-out sm:inline-block hidden group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute  z-[1000] mt-3 shadow-sm rounded-xl border right-0 w-44 h-max overflow-hidden  sm:px-0 bg-white">
              <ul className="relative   bg-white ">
                <div className="p-2 flex justify-between items-center">
                  <div className="flex items-center gap-2  ">
                    <img
                      src={
                        photo
                          ? photo
                          : 'https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-1.jpg'
                      }
                      className="w-6 h-6 rounded-full"
                      alt="profile"
                      referrerPolicy="no-referrer"
                    />
                    <small className="max-w-[70%] line-clamp-1">{name}</small>
                  </div>
                  <Popover.Button
                    onClick={() => logout({ isSocialLogout: !!photo })}
                  >
                    <BiLogOut className="text-xl" />
                  </Popover.Button>
                </div>
                {links.map((item) => (
  

                  <li
                    key={item.name}
                    className="p-2 px-3 hover:bg-gray-100 cursor-pointer transition-all"
                  >
                    <Link className="block " to={item.link}>
                      <Popover.Button className="text-start block w-full h-full ">
                        {item.name}
                      </Popover.Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}
