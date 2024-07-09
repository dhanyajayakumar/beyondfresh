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
export const myProfileFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  firstName: Yup.string().required("First Name is Required"),
  phone: Yup.string()
  .matches(phoneRegExp, "Phone number is not valid")
  .required("Phone number is Required"),
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

export const AddAddressFormSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is Required"),
  phone: Yup.string().required("Phone is Required"),
  apartment: Yup.string().required("Apartment is Required"),
  street: Yup.string().required("Street is Required"),
  postalCode: Yup.string().required("Postal Code is Required"),
  country: Yup.string().required("Country is Required"),
  state: Yup.string().required("State is Required"),
});
