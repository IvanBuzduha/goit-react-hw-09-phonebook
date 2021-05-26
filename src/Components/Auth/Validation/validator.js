import * as yup from "yup";

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("Enter correct password")
    .min(6, "Min 6 symbols")
    .max(12, "Max 12 Symbols")
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/, "passwordMatches"),

  // .matches(/^(?=.*[0-9a-zA-Z!@#$%^&*]{6,})$/, "0-9a-zA-Z!@#$%^&*"),
});
export default schema;
