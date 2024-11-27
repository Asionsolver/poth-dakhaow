import logo from '../assets/logo.png'
import homeImage from '../assets/home.jpg'
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
    <div className="bg-cover bg-center  h-screen w-full flex justify-between flex-col pt-8 " style={{ backgroundImage: `url(${homeImage})` }}>
      <img className='w-36 ml-2' src={logo} alt="logo" />
      <div className="bg-white py-4 px-2 pb-7">
        <h2 className='text-[22px] font-bold'>Get Started with Poth Dakhaow</h2>
        <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
      </div>
    </div>
  )
}
