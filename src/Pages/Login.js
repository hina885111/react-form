import React   from "react";
import { useForm } from 'react-hook-form';

//import {useNavigate} from 'react-router-dom';


function Login()
{
  // let email = "hina503202@gmail.com";
  // let password ="1234567890";
  

  
//  const navigate = useNavigate();
//  function handleClick()
//  {
//   navigate("/profile");
//  }
    const { register, handleSubmit, formState: { errors } } = useForm();

   const onSubmit = data => console.log(data);
// const onSubmit = 

  return (
    
    <div className="app">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
  
          <input {...register("email", { required: true,
                pattern:{value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'} })} />

          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label>Password</label>
        

              <input {...register("password",{ required: true, minLength: {
                value: 6,
                message: 'Password should be at-least 6 characters.'
              } })} />


          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit" >Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;