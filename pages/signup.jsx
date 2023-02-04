import Link from 'next/link';
import React, { useState } from 'react';
import {auth} from '../utils/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useRouter } from 'next/router';

export default function Login() {
const [email , setEmail] = useState('')
const [password, setPassword] = useState('')
const router = useRouter()


    const createUser = async(e) => {
        e.preventDefault()
        try{

            createUserWithEmailAndPassword(auth,email,password).then((res)=>{
                console.log(res)
                router.push('/login')
              }
    )}catch(err){
        console.log(err)
    }
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-red-600 uppercase">
                    Sign UP
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                        value={email}
onChange={e=>setEmail(e.target.value)}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button onClick={createUser} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-purple-600">
                            Sign UP
                        </button>
                    </div>
                </form>
               

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-medium text-red-600 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}