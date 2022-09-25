import React from 'react'
import img from '../storage/grantut_logo.png'
import '../css/_header.css'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <Link class="my-0 mr-md-auto" to="/"><img class="" src={img}/></Link>
      <nav class="my-2 my-md-0 mr-md-3">
        <Link class="p-2 text-dark" to="/projects">Проекты</Link>
        <Link class="p-2 text-dark" to="/myprojects">Мои проекты</Link>
        <Link class="p-2 text-dark" to="/postproject">Подать заявку</Link>
      </nav>
      <Link class="btn btn-outline-primary" to="/login">Sign up</Link>
    </div>
  )
}

export default Header