import React, {FC, useState} from 'react'
import PropTypes from 'prop-types'

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <input type='text' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type='text' placeholder='Пароль' value={password} onChange={e => setPassword(e.target.value)}/>
      <button>Логин</button>
      <button>Регистрация</button>

    </div>
  )
}

LoginForm.propTypes = {}

export default LoginForm