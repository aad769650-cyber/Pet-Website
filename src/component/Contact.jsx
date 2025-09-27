import { useFormik } from "formik";
import { signUp } from "./signUp";

export const Contact=()=>{
    const initialValues={
        name:"",
        email:"",
        password:"",
        confirm_password:"",
    }
    const {
        values,
handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues,
        validationSchema:signUp,
        onSubmit:(values,action)=>{
            console.log(values);
            action.resetForm();
        }
    });
    

   
    
    return(
        <>
      <div className="contact flex-center">
        <form action="" className="form " onSubmit={handleSubmit}>
            <label htmlFor=""><div className="input">Name:<input type="text" placeholder="Enter Name... " name="name"  autoComplete="false" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
          </div>  
            <div className="error">{errors.name&&touched.name?<p>{errors.name}</p>:null}</div>
            </label>

            <label htmlFor=""><div className="input">Email:<input 
            type="email" 
            placeholder="Enter Email..."
             name="email" 
             required 
             value={values.email} 
             onChange={handleChange} 
             onBlur={handleBlur}
             />
             </div>
                   <div className="error">{errors.email&&touched.email?<p>{errors.email}</p>:null}</div>
            
            </label>
            
            <label htmlFor=""><div className="input">Password:<input type="password" placeholder="Enter Password..." name="password" required autoComplete="false" value={values.password} onChange={handleChange} onBlur={handleBlur}/></div>
                   <div className="error">{errors.password&&touched.password?<p>{errors.password}</p>:null}</div>
            
            </label>
            
            <label htmlFor=""><div className="input">Confirm_Password:<input type="password" placeholder="Confirm  Password..." name="confirm_password" required autoComplete="false" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/></div>
                   <div className="error">{errors.confirm_password&&touched.confirm_password?<p>{errors.confirm_password}</p>:null}</div>
            </label>
     <button className="submit_btn" type="submit">Register Here</button>
     
        </form>
      </div>
        </>
    )
}