import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import PatientSlider from '../slider/PatientSlider';
import {FaSignInAlt} from 'react-icons/fa';
import { useDispatch,useSelector } from 'react-redux';
import {loginPatient} from '../actions/patientAction';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';


const LoginPatientScreen = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch();

  const loginPatientState = useSelector(state => state.loginPatientReducer);
  const {error,success,loading} = loginPatientState;
  
  useEffect(() => {
    if(localStorage.getItem('currentPatient')){
      window.location.href = '/';
    }
  },[])

  const loginPatientHandler = (event) => {
    window.scrollTo({top:0,behavior:"smooth"});
    event.preventDefault();
    const patient = {email,password};
    dispatch(loginPatient(patient));
  }

  return (<>
    {loading && <Loader />}
    {success && <Success success="Patient Login Successfully" />}
    {error && <Error error="Something Went Wrong"/>}
   <div className='bg-teal-900 flex md:flex-row flex-col h-full justify-between items-center px-4 py-10 md:p-20 my-10'>
   <div className=' flex flex-col md:gap-14 gap-10 md:py-14 pb-10 justify-center items-center w-full md:w-2/5'>
   <div className='flex gap-14 justify-center items-center'>
   <img src='../images/Patient-white.png' alt='Patient Icon' 
            className='rounded-full lg:w-32 backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 shadow-md shadow-gray-400 border-white/10 fill-white w-1/4 ' />
    <h1 className='text-5xl text-white font-black hover:mix-blend-overlay'>Patient</h1>
   </div>
   <PatientSlider />
    <div className='flex flex-col border-solid border-2 backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10  gap-4 p-10 shadow-md shadow-gray-400 border-white/10 rounded-3xl'>
      <h1 className='text-white'>Not a member?</h1>
      <NavLink to='/register/registerpatient'>
      <div className='flex gap-4 justify-center items-center'>
      <button className='flex justify-center bg-white shadow-sm font-black text-teal-900 shadow-gray-400 hover:text-white hover:bg-teal-900 py-2 px-4 rounded-3xl items-center w-full '>
      Sign up
      </button>
      <FaSignInAlt  className='fill-white text-2xl'/>
      </div>
      </NavLink>
    </div>
   </div>
   <div className='h-full w-full backdrop-blur-sm bg-gradient-to-tr from-white/5 via-white/5 to-white/10 border-solid border-2 md:px-20 md:py-14 px-4 py-10 shadow-md shadow-gray-400 border-white/10 rounded-3xl md:w-1/2'>
      
      <h1 className='text-white text-center text-5xl font-black hover:text-[#269c94]'>Sign in</h1>
      <form>
              
              <div className='md:mt-14 mt-10'>
              <input type='text' placeholder='Patient ID ( Email )' 
                     className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
               />
              </div>
                
              <div className='mt-5'>
              <input type='password' placeholder='Password' 
                     className='border-solid border-2 shadow-sm shadow-gray-400 border-white/10 bg-white/5 font-black outline-none text-white rounded-3xl focus:border-white/50 py-1 px-4 w-full'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
               />
              </div>
              <div className='mt-5 flex justify-start items-center w-full'>
              <input type='checkbox' 
                     className='border-solid border-x-2 rounded-3xl border-y-2 border-teal-900'
               />
              <span className='ml-2 text-white'>
                 I accept the <a href='#' className='text-[#35b6b4] hover:text-black font-bold'>Terms of Use</a> & <a href='#' className='text-[#35b6b4] hover:text-black font-bold'>Privacy Policy</a>
              </span>
              </div>
              <div className='md:mt-14 mt-8'>
                 <button className='w-full bg-white rounded-3xl shadow-sm shadow-gray-400 font-black hover:bg-teal-900 hover:text-white py-3 text-center text-teal-900'
                    onClick={(event) => loginPatientHandler(event)}   >Login account</button>
              </div>
            </form>
   </div>
</div>
</>
  )
}

export default LoginPatientScreen
