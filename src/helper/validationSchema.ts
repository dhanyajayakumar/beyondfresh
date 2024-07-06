import * as Yup from "yup";
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
export const registerFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is Required"),
  password: Yup.string().required("Password is Required"),
  rePassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Re-Enter Password is Required"),
  aggreeWithTermsAndCondions: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
});

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});
export const searchFormSchema = Yup.object().shape({
  keyword: Yup.string().required("Search Key is Required"),
});

export const forgotFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
  rePassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Re-Enter Password is Required"),
  otp: Yup.string()
    .required("OTP is Required")
    .min(6, "OTP must be exactly 6 characters")
    .max(6, "OTP must be exactly 6 characters"),
});
export const OTPFormSchema = Yup.object().shape({
  otp: Yup.string()
    .required("OTP is Required")
    .min(6, "OTP must be exactly 6 characters")
    .max(6, "OTP must be exactly 6 characters"),
});
