import Head from 'next/head'
import {useEffect} from 'react'
import Link from 'next/link'
import {useStateContext} from '../components/HBOProvider'
import Login from '../components/UI/Login/Login';
import { useRouter } from 'next/dist/client/router';

export default function Home() {

  const globalState = useStateContext();
  const router = useRouter()
  useEffect(() => {
    const loggedIn = false;
    if(loggedIn === false){
      router.push('/create')
    }
  },[])

  return (
    <div>
      <Login />
    </div>
  )
}
