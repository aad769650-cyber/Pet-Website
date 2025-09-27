
import * as Yup from 'yup';
export const signUp=Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Name..."),
    email:Yup.string().email().required("Email is Required"),
    password:Yup.string().min(6).required("Password is Required"),
    confirm_password:Yup.string().oneOf([Yup.ref("password")],"Password should match").required("Confirm password is required")
})