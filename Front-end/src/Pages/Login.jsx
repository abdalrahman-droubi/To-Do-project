import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
import { useState } from "react";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {

      console.log("Logged in successfully!");
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.username.trim()) {
      errors.username = "Username is required";
    }

    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else {
      if (!/(?=.*[a-z])/.test(values.password)) {
        errors.password = "Password must include at least one lowercase letter";
      }
      if (!/(?=.*[A-Z])/.test(values.password)) {
        errors.password = "Password must include at least one uppercase letter";
      }
      if (!/(?=.*\d)/.test(values.password)) {
        errors.password = "Password must include at least one digit";
      }
      if (!/(?=.*\W)/.test(values.password)) {
        errors.password = "Password must include at least one special character";
      }
      if (values.password.length < 9) {
        errors.password = "Password must be at least 9 characters long";
      }
    }


    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  return (
    <>
      <section className="gradient-form h-full">
        <div className="container h-full p-10">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img className="mx-auto w-48" src={Logo} alt="logo" />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Lotus Team
                      </h4>
                    </div>

                    <form onChange={handleSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      <div className="relative mb-4">
                        <input
                          type="text"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          className="peer text-black block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear"
                          placeholder="Username"
                        />
                        {errors.username && (
                          <p style={{ color: "red", fontSize: "13px" }}>
                            {errors.username}
                          </p>
                        )}
                      </div>

                      <div className="relative mb-4">
                        <input
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}

                          className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear"
                          placeholder="Password"
                        />
                        {errors.password && (
                          <p style={{ color: "red", fontSize: "13px" }}>
                            {errors.password}
                          </p>
                        )}
                      </div>


                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 bg-gradient-to-r from-sky-600 to-cyan-400 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                        >
                          Log in
                        </button>


                      </div>

                      <div className="flex items-center justify-between pb-6">
                        <Link to="/signup" className="mb-0 mr-2">Dont have an account?</Link>

                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg bg-gradient-to-r from-sky-600 to-cyan-400 lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      Welcome to  octopus
                    </h4>
                    <p className="text-sm">
                      OctoList, your ultimate guide to organizing your octopus-themed tasks! Dive into a world

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
