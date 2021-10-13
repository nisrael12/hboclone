import Head from 'next/head'
import Link from 'next/link'
import { useStateContext } from '../components/HBOProvider';
import ls from 'local-storage'
import {v4} from 'uuid'
import { useRouter } from 'next/dist/client/router';
import Login from '../components/UI/Login/Login';

const LoginPage = () => {
  

  return (
    <Login />
  )
}

export default LoginPage;
