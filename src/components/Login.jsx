import { Link } from "react-router-dom";
import LoginValidation from "./LoginValidation";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Image from "../assets/DrEasykeys.jpg";
import LoginAlert from "./LoginAlert";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setError] = useState({});

  // const [isSuccessfulLogin, setSuccessfulLogin] = useState(false);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(LoginValidation(values));
  }

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.email !== "" &&
      values.password !== ""
    ) {
      alert("Form Submitted");
    }
  }, [errors]);

  return (
    <div className="flex justify-center items-center h-screen">
      {/* {isSuccessfulLogin ? (
        <LoginAlert />
      ) : ( */}
      <form
        onSubmit={handleSubmit}
        className="w-[50vw] h-[75vh] content-center justify-items-center grid gap-5 shadow-xl border rounded-[50px]"
      >
        <div>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-[40vw] h-fit p-2 border -2 border-black  rounded-[50px]"
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            value={values.password}
            name="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
            className="w-[40vw] h-fit p-2 border-2 border-black rounded-[50px]"
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>
          )}
        </div>
        <Link to="/">
          <button
            type="submit"
            className="w-[40vw] h-fit p-2 border-2 hover:bg-black hover:text-white border-black rounded-[50px]"
          >
            Login
          </button>
        </Link>
        <div className="w-[40vw]">
          <span>
            <input type="checkbox" /> Remember me
          </span>
        </div>

        <div className="text-end w-[40vw]">
          <span>
            Don't have an account?
            <Link to="/signup" className="underline">
              Create Account
            </Link>
          </span>
        </div>
      </form>
      {/* )} */}
    </div>
  );
}

export default Login;
