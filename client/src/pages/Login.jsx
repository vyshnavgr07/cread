import React from 'react';
import { useForm } from "react-hook-form";
import api from '../api/axiosInterceptor';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const navigate=useNavigate()
    const {
        register, handleSubmit, formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {

        try {
            const response = await api.post('/auth/login', data);
            if(response.status===200){
            localStorage.setItem('token',response.data.token)
        navigate('/')
             toast.success('succefully loged in')
            }
             if(response.status==400){
                toast.error('user does not exist')
             }
        } catch (error) {
            console.log(error, "err");
        }
    };

    return (
        <>          
         <Navbar/>
        <div className="relative h-screen bg-gray-50 flex justify-center items-center">
   <ToastContainer/>
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-semibold">Email</label>
                        <input
                            {...register("email", { required:'Email is required' })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            type="email"
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">Password</label>
                        <input
                            {...register("password", { required:'password is required'})}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            type="password"
                            placeholder="Enter your password"
                        />
                        {errors.password?<span className="text-red-600">{errors.password.message}</span>:<span className="text-red-600"></span>}
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                        Login
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Login;
