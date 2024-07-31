import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let [logSign, setLogSign] = useState("login");
  let navigate = useNavigate();
  let email = useRef("");
  let password = useRef("");
  let singupEmail = useRef("");
  let singupPassword = useRef("");
  let singupConPassword = useRef("");
  let signupName = useRef("");

  const [err, setErr] = useState("");
  const loginHandle = async (e) => {
    // navigate("/")
    const email1 = email.current.value;
    const password1 = password.current.value;
    if (email1 == "" && password1 == "") {
      setErr("Please enter your email and password");
      setTimeout(() => {
        setErr("");
      }, 5000);
    } else {
      if (email1 == "" || password1 == "") {
        setErr("input can not be empty");
        setTimeout(() => {
          setErr("");
        }, 5000);
      } else {
        // console.log(email1, password1);
        const datas = {
          email: email1,
          password: password1,
        };
        // console.log(JSON.stringify(datas));
        const respose = await fetch("http://localhost:3000/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify(datas),
        });
        const result = await respose.json();
        if (result.messaage) {
          alert(result.messaage);
        } else {
          localStorage.setItem("token", result.token);
          localStorage.setItem("email", result.email);
          window.location.href = "/";
        }
      }
    }

    e.preventDefault();
  };

  const signUpHandle = (e) => {
    const email1 = singupEmail.current.value;
    const name1 = signupName.current.value;
    const password1 = singupPassword.current.value;
    const ConPassword = singupConPassword.current.value;
    if (email1 == "" && password1 == "" && name1 == "" && ConPassword == "") {
      setErr("Please enter your email and password");
      setTimeout(() => {
        setErr("");
      }, 5000);
    } else {
      if (email1 == "" || password1 == "" || ConPassword == "" || name1 == "") {
        setErr("input can not be empty");
        setTimeout(() => {
          setErr("");
        }, 5000);
      } else {
        if (password1 == ConPassword) {
          // all backend
          // console.log(name1, email1, password1, ConPassword);
        } else {
          setErr("password is not same");
          setTimeout(() => {
            setErr("");
          }, 5000);
        }
      }
    }
  };
  const Login = () => {
    return (
      <>
        <div
          id="Login"
          className="dark:bg-slate-900 dark:text-white dark:border-none"
        >
          <h3 className="font-bold text-lg">Login</h3>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              loginHandle(e);
            }}
          >
            <div>
              <br />
              <span>Email</span>
              <br />
              <input
                type="email"
                className="dark:bg-slate-900 w-80 px-3 py-1 border rounded-md outline-none"
                name="email"
                ref={email}
              />
              <br />
              <span>Password</span>
              <br />
              <input
                type="password"
                className="dark:bg-slate-900 w-80 px-3 py-1 border rounded-md outline-none"
                name="password"
                ref={password}
              />
              <br />
            </div>
            <br />
            <span className="text-red-500">{err}</span>
            <div className="flex items-center justify-between">
              <button className="btn btn-secondary ">Login</button>
              <Link to="" onClick={() => setLogSign("signup")}>
                you did't have account ?
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  };

  const signUp = () => {
    return (
      <>
        <div
          id="signup"
          className="dark:bg-slate-900 dark:text-white border-none"
        >
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              signUpHandle(e);
            }}
          >
            <h3 className="font-bold text-lg">Register</h3>
            <div>
              <br />
              <span>Name</span>
              <br />
              <input
                type="text"
                className="dark:bg-slate-900 w-80 px-3 py-1 border rounded-md outline-none "
                ref={signupName}
              />

              <br />
              <span>Email</span>
              <br />
              <input
                type="email"
                className="dark:bg-slate-900 w-80 px-3 py-1 border rounded-md outline-none"
                ref={singupEmail}
              />
              <br />
              <span>Password</span>
              <br />
              <input
                type="password"
                className="dark:bg-slate-900 w-80 px-3 py-1 border rounded-md outline-none"
                ref={singupPassword}
              />
              <br />

              <span>Confirm Password</span>
              <br />
              <input
                type="password"
                className="dark:bg-slate-900 w-80 px-3 py-1 border rounded-md outline-none"
                ref={singupConPassword}
              />
              <br />
            </div>
            <br />

            <span className="text-red-500">{err}</span>
            <div className="flex items-center justify-between">
              <button className="btn btn-secondary">Register</button>
              <Link to="" onClick={() => setLogSign("login")}>
                Already have account login here
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white border">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setLogSign("login")}
            >
              ✕
            </button>
          </form>
          {logSign == "login" ? Login() : signUp()}
        </div>
      </dialog>
    </div>
  );
}

export default Login;
