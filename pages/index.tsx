import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <form action="http://localhost:8000/auth/register" method="POST">
        <ul>
          <li className="test-li">
            <input type="email" name="email"/>
          </li>
          <li>
            <input type="text" name="first_name"/>
          </li>
          <li>
            <input type="text" name="last_name"/>
          </li>
          <li>
            <input type="password" name="password"/>
          </li>
          <li>
            <input type="password" name="password_confirm"/>
          </li>
        </ul>
      </form>
    </>
  )
}

export default Home
