import React, { useState } from 'react';

interface IState {
  isLoggedIn: boolean;
}

const AuthUser: React.FC = () => {
  const [state, setState] = useState<IState>({
    isLoggedIn: false,
  });

  const login = (): void => {
    setState({ isLoggedIn: true });
  };
  const logout = (): void => {
    setState({ isLoggedIn: false });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          {state.isLoggedIn ? (
            <div>
              <p className="h3">welcome user</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam earum at porro nisi adipisci, a optio iusto quisquam
                debitis eos repellendus totam neque repellat error rerum
                deserunt nemo, asperiores unde.
              </p>
            </div>
          ) : (
            <div>
              {' '}
              <p className="h3">thank you</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam earum at porro nisi adipisci, a optio iusto quisquam
                debitis eos repellendus totam neque repellat error rerum
                deserunt nemo, asperiores unde.
              </p>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-success m-1" onClick={login}>
              login
            </button>
            <button className="btn btn-warning" onClick={logout}>
              logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthUser;
