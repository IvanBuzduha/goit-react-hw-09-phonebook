import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import {
  loginOperation,
  registerOperation,
} from "../../redux/auth/authOperations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import schema from "./Validation/validator";

const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>
          {location.pathname === "/registration" ? "Registeration" : "Login"}
        </h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={(values) => {
            location.pathname === "/registration"
              ? dispatch(registerOperation(values))
              : dispatch(loginOperation(values));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {location.pathname === "/registration" ? (
                <>
                  <label>
                    Name:
                    <Field
                      type="text"
                      name="displayName"
                      placeholder="John Wick"
                      className="pt-3 pb-2 pl-4 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
                    />
                    <ErrorMessage name="displayName" component="div" />
                  </label>
                  <label>
                    Email:
                    <Field
                      type="email"
                      name="email"
                      placeholder="johnwick@gmail.com"
                      className="pt-3 pb-2 pl-4 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
                    />
                    <ErrorMessage name="email" component="div" />
                  </label>
                  <label>
                    Password:
                    <Field
                      type="password"
                      name="password"
                      placeholder="**********"
                      className="pt-3 pb-2 pl-4 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
                    />
                    <ErrorMessage name="password" component="div" />
                  </label>
                  <button
                    type="submit"
                    // disabled={isSubmitting}
                    className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-green-800 hover:shadow-lg focus:outline-none"
                  >
                    {location.pathname === "/registration"
                      ? "Sign up"
                      : "Sign in"}
                  </button>
                </>
              ) : (
                <>
                  <label>
                    Email:
                    <Field
                      type="email"
                      name="email"
                      placeholder="johnwick@gmail.com"
                      className="pt-3 pb-2 pl-4 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
                    />
                    <ErrorMessage name="email" component="div" />
                  </label>
                  <label>
                    Password:
                    <Field
                      type="password"
                      name="password"
                      placeholder="**********"
                      className="pt-3 pb-2 pl-4 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
                    />
                    <ErrorMessage name="password" component="div" />
                  </label>
                  <button
                    type="submit"
                    // disabled={isSubmitting}
                    className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-green-800 hover:shadow-lg focus:outline-none"
                  >
                    {location.pathname === "/registration"
                      ? "Sign up"
                      : "Sign in"}
                  </button>
                </>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AuthForm;

// class AuthForm extends Component {
//   state = {};

//   render() {
//     return (
//       <>
//         <div>
//           <h1>
//             {this.props.location.pathname === "/registration"
//               ? "Registeration"
//               : "Login"}
//           </h1>
//           <Formik
//             initialValues={{ email: "", password: "" }}
//             validationSchema={schema}
//             onSubmit={(values) => {
//               this.props.location.pathname === "/registration"
//                 ? this.props.registerOperation(values)
//                 : this.props.loginOperation(values);
//             }}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 {this.props.location.pathname === "/registration" ? (
//                   <>
//                     <label>
//                       Name:
//                       <Field
//                         type="text"
//                         name="displayName"
//                         placeholder="John Wick"
//                         className="pt-3 pb-2 pl-4 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
//                       />
//                       <ErrorMessage name="displayName" component="div" />
//                     </label>
//                     <label>
//                       Email:
//                       <Field
//                         type="email"
//                         name="email"
//                         placeholder="johnwick@gmail.com"
//                         className="pt-3 pb-2 pl-4 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
//                       />
//                       <ErrorMessage name="email" component="div" />
//                     </label>
//                     <label>
//                       Password:
//                       <Field
//                         type="password"
//                         name="password"
//                         placeholder="**********"
//                         className="pt-3 pb-2 pl-4 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
//                       />
//                       <ErrorMessage name="password" component="div" />
//                     </label>
//                     <button
//                       type="submit"
//                       // disabled={isSubmitting}
//                       className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-green-800 hover:shadow-lg focus:outline-none"
//                     >
//                       {this.props.location.pathname === "/registration"
//                         ? "Sign up"
//                         : "Sign in"}
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <label>
//                       Email:
//                       <Field
//                         type="email"
//                         name="email"
//                         placeholder="johnwick@gmail.com"
//                         className="pt-3 pb-2 pl-4 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
//                       />
//                       <ErrorMessage name="email" component="div" />
//                     </label>
//                     <label>
//                       Password:
//                       <Field
//                         type="password"
//                         name="password"
//                         placeholder="**********"
//                         className="pt-3 pb-2 pl-4 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
//                       />
//                       <ErrorMessage name="password" component="div" />
//                     </label>
//                     <button
//                       type="submit"
//                       // disabled={isSubmitting}
//                       className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-green-800 hover:shadow-lg focus:outline-none"
//                     >
//                       {this.props.location.pathname === "/registration"
//                         ? "Sign up"
//                         : "Sign in"}
//                     </button>
//                   </>
//                 )}
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </>
//     );
//   }
// }

// export default connect(null, { registerOperation, loginOperation })(
//   withRouter(AuthForm)
// );
