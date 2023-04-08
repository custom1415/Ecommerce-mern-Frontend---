import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoImg from "../../../assets/logo.png"

type Props = {}

const Logo = (props: Props) => {
  const navigate = useNavigate()
  return (
    <div className="ml-4 flex lg:ml-0" onClick={() => navigate('/')}>
      <Link to="/">
        <span className="sr-only">Chor bazar</span>
        <img className="sm:h-6 h-5 w-auto" src={logoImg} alt="" />
      </Link>
    </div>
  )
}

export default Logo
