import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'


const CaptainLogin = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const { email, password } = state;

    const inputHandler = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(state);
        setState({
            email: '',
            password: ''
        })
    }




    return (
        <div className="p-7 h-screen  flex justify-between flex-col">
            <div>
                <img className='w-36 mb-10' src={logo} alt="logo" />
                <form onSubmit={submitHandler}>
                    <h3 className="text-lg font-medium mb-2">What&lsquo;s your email</h3>
                    <input type="email" name='email' onChange={inputHandler} value={email} className="bg-raffiaWhite mb-7 rounded px-4 py-2 w-full border text-lg placeholder:text-base" type="email" placeholder="email@gmail.com" required />

                    <h3 className="text-lg font-medium mb-2">Enter your password</h3>
                    <input type="password" name="password" value={password} onChange={inputHandler} className="bg-raffiaWhite mb-7 rounded px-4 py-2 w-full border text-lg placeholder:text-base" type="password" placeholder="password" required />

                    <button className="bg-black text-white w-full rounded px-4 py-2 font-medium" type="submit">Login</button>
                    <div className='my-2'><p className='text-center'>Join a fleet? <Link to="/captain-signup" className='text-ripeMango'>Register as a Captain</Link></p></div>
                </form>
            </div>
            <div className='mt-5'>


                <Link to='/login' className="bg-ripeMango flex items-center justify-center text-white w-full rounded px-4 py-2 font-medium" type="submit">Sign in as User</Link>

            </div>
        </div>
    )
}



export default CaptainLogin