import Head from 'next/head'
import Link from 'next/link'
import { useStateContext } from '../components/HBOProvider';

export default function CreateUser() {
  const globalState = useStateContext();
  console.log(globalState)
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">
            Who is watching?
          </span>
        </div>

        <div className="create-user__form">
            <img className="create-user__user-img" src={globalState.defaultUserImg} />
            <div className="create-user__input-group">
                <label>Name</label>
                <input type="text" className="create-user__inputText" value={globalState.user} onChange={globalState.createUserAction} />
                <div className="create-user__colors">
                    <div className="create-user__color create-user__color--active" style={{
                    background: 'rgb(45,78,169)',
                    background: 'linear-gradient(135deg, rgba(45,78,169,1) 16%, rgba(222,180,188,1) 100%)'
                    }} />
                    <div className="create-user__color" style={{
                    background: 'rgb(131,203,92)',
                    background: 'linear-gradient(125deg, rgba(131,203,92,1) 16%, rgba(7,60,48,1) 100%, rgba(55,156,134,1) 100%)'
                    }} />
                    <div className="create-user__color" style={{
                    background: 'rgb(172,173,217)',
                    background: 'linear-gradient(125deg, rgba(172,173,217,1) 8%, rgba(191,8,21,1) 100%)'
                    }} />
                    <div className="create-user__color " style={{
                    background: 'rgb(186,63,63)',
                    background: 'linear-gradient(125deg, rgba(186,63,63,1) 12%, rgba(191,184,8,1) 100%)'
                    }} />
                    <div className="create-user__color" style={{
                    background: 'rgb(63,165,186)',
                    background: 'linear-gradient(125deg, rgba(63,165,186,1) 24%, rgba(129,126,57,1) 100%)'
                    }} />
                </div>
            </div>
        </div>

        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>

      </div>
    </div>
  )
}
