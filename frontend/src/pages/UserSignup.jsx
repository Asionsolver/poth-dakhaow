
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'


const UserSignup = () => {
    const [state, setState] = useState({
        fullname: {
            first: '',
            last: ''
        },
        email: '',
        password: ''
    })

    const { fullname, email, password } = state
    const inputHandler = (e) => {
        const { name, value } = e.target;
        if (name === 'first' || name === 'last') {
            setState({
                ...state,
                fullname: {
                    ...fullname,
                    [name]: value
                }
            })
        } else {
            setState({
                ...state,
                [name]: value
            })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(state);
        setState({
            fullname: {
                first: '',
                last: ''
            },
            email: '',
            password: ''
        })
    }




    return (
        <div className="p-7 h-screen  flex justify-between flex-col">
            <div>
                <img className='w-36 mb-10' src={logo} alt="logo" />
                <form onSubmit={submitHandler}>
                    <h3 className="text-base font-medium mb-2">What&lsquo;s your name</h3>
                    <div className='flex gap-4 mb-7'>
                        <input type="text" name='first' onChange={inputHandler} value={fullname.first} className="bg-raffiaWhite rounded px-4 py-2 w-1/2 border text-base placeholder:text-sm" placeholder="First name" required />
                        <input type="text" name='last' onChange={inputHandler} value={fullname.last} className="bg-raffiaWhite rounded px-4 py-2 w-1/2 border text-base placeholder:text-sm" placeholder="Last name" required />
                    </div>

                    <h3 className="text-base font-medium mb-2">What&lsquo;s your email</h3>
                    <input type="email" name='email' onChange={inputHandler} value={email} className="bg-raffiaWhite mb-7 rounded px-4 py-2 w-full border text-lg placeholder:text-sm" placeholder="email@gmail.com" required />

                    <h3 className="text-base font-medium mb-2">Enter your password</h3>
                    <input type="password" name="password" value={password} onChange={inputHandler} className="bg-raffiaWhite mb-7 rounded px-4 py-2 w-full border text-base placeholder:text-sm" placeholder="password" required />

                    <button className="bg-black text-white w-full rounded px-4 py-2 font-medium" type="submit">Login</button>
                    <div className='my-2'><p className='text-center'>Already have a account? <Link to="/login" className='text-ripeMango'>Login here</Link></p></div>
                </form>
            </div>
            <div className='mt-5'>


                <p className='text-xs leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>

            </div>
        </div>
    )
}

export default UserSignup;