import { auth, googleProvider } from '@/utils/firebase'
import { signInWithPopup } from 'firebase/auth'
import React from 'react'

const Login = () => {


  const signInWithGoogle =async () => {
    try{
        signInWithPopup(auth, googleProvider).then((res)=>{
            console.log(res)
           
    })    
    
    } catch(err){
        console.log(err);
    
    } 
    }
  return (
    <div className='flex items-center justify-center h-screen'>

    <button onClick={signInWithGoogle} className="bg-white text-gray-800 flex font-bold py-2 px-4 border border-gray-400 rounded shadow hover:bg-gray-100 hover:shadow-md focus:outline-none focus:shadow-outline-gray active:bg-gray-200 transition duration-150 ease-in-out">
    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.64 11.76c0-.78-.07-1.44-.2-2.12H12v4.02h5.58c-.23 1.3-.88 2.38-1.84 3.14v2.6h2.98c1.74-1.6 2.75-3.95 2.75-6.64z" />
      <path fill="#34A853" d="M12 21c2.48 0 4.52-.82 6.02-2.22l-2.98-2.3c-.78.52-1.78.83-3.04.83-2.34 0-4.32-1.58-5.02-3.7H3.96v2.32C5.48 18.42 8.22 21 12 21z" />
      <path fill="#FBBC05" d="M6.98 12.7c-.18-.6-.28-1.24-.28-1.9s.1-1.3.28-1.9V5.78H3.96A8.97 8.97 0 0 0 3 12c0 1.44.34 2.8.94 4.02l3.04-2.32z" />
      <path fill="#EA4335" d="M12 7.58c1.3 0 2.48.44 3.4 1.3l2.54-2.54C16.52 4.42 14.48 3 12 3 8.22 3 5.48 5.58 4.02 9.06l3.02 2.32c.7-2.12 2.68-3.7 5.96-3.7z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
    <span>Login with Google</span>
  </button>
    </div>
  )
}

export default Login
