import React from 'react'
import img from '../storage/grantut_logo.png'
import '../css/_header.css'

function Header(props) {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <img class="my-0 mr-md-auto" src={img}/>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="https://getbootstrap.com/docs/4.0/examples/pricing/#">Проекты</a>
        <a class="p-2 text-dark" href="https://getbootstrap.com/docs/4.0/examples/pricing/#">Мои проекты</a>
        <a class="p-2 text-dark" href="https://getbootstrap.com/docs/4.0/examples/pricing/#">Подать заявку</a>
      </nav>
      <a class="btn btn-outline-primary" href="https://getbootstrap.com/docs/4.0/examples/pricing/#">Sign up</a>
    </div>
  )
}

export default Header