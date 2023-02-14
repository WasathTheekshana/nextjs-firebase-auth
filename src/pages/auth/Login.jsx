import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../utils/firebase-config';

function Login() {

    const signInWithGoogle = async() => {
        try{
            const user = await signInWithPopup(auth, new GoogleAuthProvider())
            console.log(user);
        }catch (error){
            console.log(error)
        }
    }

    return (
        <div className='mt-32 p-10 rounded-xl bg-white bg-opacity-0 border border-white border-opacity-25'>
            <h2 className='text-3xl font-medium'>Join Today</h2>
            <div className='py-4'>
                <h3 className='py-4'>Sign in with the providers</h3>
            </div>
            <div className='flex flex-col gap-4'>
                <button onClick={signInWithGoogle} className='hover:bg-white hover:text-black text-white border transition duration-0 hover:duration-700 ease-in-out rounded h-10 font-semibold flex justify-center items-center'>
                    <GoogleIcon className='w-5 mr-5'/> Sign in with Google
                </button>
                <button className='hover:bg-white hover:text-black text-white border transition duration-0 hover:duration-700 ease-in-out rounded h-10 font-semibold flex justify-center items-center'>
                    <FacebookIcon className='w-5 mr-5'/> Sign in with Facebook
                </button>
            </div>
        </div>
    )
}

export default Login