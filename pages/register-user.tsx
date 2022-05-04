import type { NextPage } from 'next';
import Link from "next/link";

const RegisterUserPage: NextPage = () => {
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
                <label htmlFor="first-name" className="form-label">First Name</label>
                <input type="text" className="form-control" id="first-name"/>
              </div>

              <div className="mb-3">
                <label htmlFor="last-name" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="last-name"/>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"/>
              </div>

              <div className="mb-3">
                <label htmlFor="password-repeat" className="form-label">Repeat Password</label>
                <input type="password" className="form-control" id="password-repeat"/>
              </div>

              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>

          <div className="row mt-3">
            <div className="col">
              <Link href="/">Back to Login</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  )
};

export default RegisterUserPage;
