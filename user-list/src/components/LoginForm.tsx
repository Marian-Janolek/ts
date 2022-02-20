import React, { useState } from 'react';

interface IState {
  user: {
    username: string;
    password: string;
  };
}

const LoginForm: React.FC = () => {
  const [state, setState] = useState<IState>({
    user: { username: '', password: '' },
  });

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(state.user);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header text-center bg-primary text-white">
              <p className="h4">Login</p>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-2">
                  <input
                    name="username"
                    value={state.user.username}
                    onChange={updateInput}
                    required={true}
                    type="text"
                    className="form-control"
                    placeholder="username"
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="password"
                    value={state.user.password}
                    onChange={updateInput}
                    required={true}
                    type="password"
                    className="form-control"
                    placeholder="username"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
