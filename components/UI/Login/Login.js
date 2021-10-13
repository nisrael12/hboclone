import Head from 'next/head'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {useStateContext} from '../../HBOProvider'
import { useRouter } from 'next/dist/client/router'
import ls from 'local-storage'
import { useMounted } from '../../Hooks/useMounted'

const Login = () => {

  const globalState = useStateContext();
  const router = useRouter();
  const [loadingUsers, setLoadingUsers] = useState(false);
  let users = ls('users') !== null ? ls('users') : [];
  let {hasMounted} = useMounted();
  useEffect(() => {
    if(users < 1){
      setLoadingUsers(false)
    }
    console.log('load effect', users)
  }, [])
  
  console.log('declared users', users)
  const selectUser = (id) => {
    console.log(id)
    ls('activeUID', id)
    router.push('/')
  }
  const showUsers = () => {
    // '!' means false (If loadingUser is false)
    if (!loadingUsers) {
      return users.map((user) => {
        return(
          <div onClick={() => selectUser(user.id)} className="login-user__user-box" key={user.id}>
            <img className="login-user__user-img" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=d5849d81af587a09dbcf3f11f6fa122f" />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        )
      })
    }
  }

  const CreateUser = () =>{
    router.push('/')
  }

  return (
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo" />
          <span className="login-user__title">
            Who is watching??
          </span>
        </div>

        <div className="login-user__form">
          {hasMounted ? showUsers() : ''}
        </div>

        <div className="login-user__buttons">
          <button className="login-user__adult" onClick={CreateUser}>Create User</button>
        </div>

      </div>
  )
}

export default Login
