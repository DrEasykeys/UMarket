import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { SignupValidation } from "./SignupValidation";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cPassword: "",
};

function Signup() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Formik initialValues={initialValues} validationSchema={SignupValidation}>
        {({ errors }) => (
          <Form className="w-[50vw] h-[75vh] content-center justify-items-center grid gap-4 shadow-xl border  rounded-[50px]">
            <div className="flex flex-col items-center">
              <b></b>
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-[40vw] h-fit p-2 border-black border-[1px] rounded-[50px]"
              ></Field>
              {errors.name && <small> {errors.name} </small>}
            </div>

            <div className="flex flex-col items-center">
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-[40vw] h-fit p-2 border-black border-[1px] rounded-[50px]"
              ></Field>
              {errors.email && <small> {errors.email} </small>}
            </div>

            <div className="flex flex-col items-center">
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-[40vw] h-fit p-2 border-black border-[1px] rounded-[50px]"
              ></Field>
              {errors.password && <small> {errors.password} </small>}
            </div>

            <div className="flex flex-col items-center">
              <Field
                type="password"
                name="cpassword"
                placeholder="Confirm password"
                className="w-[40vw] h-fit p-2 border-black border-[1px] rounded-[50px]"
              ></Field>
              {errors.cpassword && <small> {errors.cpassword} </small>}
            </div>

            <Link to="/">
              <button
                type="submit"
                className="w-[40vw] h-fit p-2 border-2 hover:bg-black hover:text-white border-black rounded-[50px]"
              >
                Create Account
              </button>
            </Link>
            <div className="text-end w-[40vw]">
              <span>
                Already Have An Account?
                <Link to="/login" className="underline">
                  Login
                </Link>
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
