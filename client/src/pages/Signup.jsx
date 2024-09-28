import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import api from '../api/axiosInterceptor';
import Navbar from '../components/Navbar';

const Signup = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
        const response=await api.post('/auth/signup',data)
        if(response.status==201){
            localStorage.setItem('token',response.data.token)
            navigate('/')
        }
    } catch (error) {
        console.log(error,"err")
    }
  };

  return (
    <>
      <section className="h-screen">
        <Navbar/>
        <div className="h-full">
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* Left Image */}
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample"
              />
            </div>

            {/* Form Section */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 me-4 text-lg">Sign up with</p>
                </div>

                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold">Or</p>
                </div>

                {/* Username */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border border-gray-300 px-3 py-2 outline-none transition-all duration-200 ease-linear"
                    id="username"
                    placeholder="Username"
                    {...register('username', { required: 'Username is required' })}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="relative mb-6">
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border border-gray-300 px-3 py-2 outline-none transition-all duration-200 ease-linear"
                    id="email"
                    placeholder="Email address"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Password */}
                <div className="relative mb-6">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border border-gray-300 px-3 py-2 outline-none transition-all duration-200 ease-linear"
                    id="password"
                    placeholder="Password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: { value: 6, message: 'Password must be at least 6 characters long' }
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-indigo-600 px-7 pb-2 pt-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
                  >
                    Register
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Have an account?{' '}
                    <a
                      href="#!"
                      className="text-indigo-600 hover:underline"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
