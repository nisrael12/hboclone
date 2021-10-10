import Head from 'next/head'
import Link from 'next/Link'

export default function Home() {
  return (
    <div>
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo" />
          <span className="login-user__title">
            Who is watching??
          </span>
        </div>

        <div className="login-user__form">
          <div className="login-user__user-box">
            <img className="login-user__user-img" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=d5849d81af587a09dbcf3f11f6fa122f" />
            <div className="login-user__user-name">Cindy</div>
          </div>
        </div>

        <div className="login-user__buttons">
          <button className="login-user__adult">Add Adult</button>
          <button className="login-user__kid">Add Kid</button>
        </div>

      </div>
    </div>
  )
}
