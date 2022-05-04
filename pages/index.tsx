import type {NextPage} from 'next'
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form action="http://localhost:8000/auth/login" method="POST">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">Email address is used for login</div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"/>
              </div>

              <button type="submit" className="btn btn-primary">Register</button>
            </form>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Link href="/register-user">Don't have an account?</Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default HomePage;
