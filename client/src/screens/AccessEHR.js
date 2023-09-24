import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllPatients,filterPatient} from '../actions/patientAction';
import Loader from '../components/Loader';
import Error from '../components/Error';
// import { NavLink } from 'react-router-dom';

const AccessEHR = () => {
    const [searchKey,setSearchKey] = useState('');

    const patientState = useSelector(state => state.getAllPatientsReducer);
    const {loading,error,patients} = patientState;

    const doctorState = useSelector(state => state.loginDoctorReducer);
    const {currentDoctor} = doctorState;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllPatients());
    },[dispatch]);

    const myFun = (e) => {
      e.preventDefault();
      dispatch(filterPatient(searchKey));
    }

  return (<>
    {loading && (<Loader />)}
    {error && (<Error error='Error While Fetching Patients'/>)}
    <div className='flex flex-col md:p-20 md:gap-20 gap-10 py-10'>

    <form className="flex items-center md:px-48 px-2">   
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" 
               id="simple-search" 
               className="bg-gray-50 border-2 border-teal-600 text-teal-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               placeholder="Search Patients ...." 
               required
               value={searchKey}
               onChange={(e) => setSearchKey(e.target.value)}
               />
      </div>
      <button type="submit" onClick={myFun} className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span className="sr-only">Search</span>
      </button>
    </form>

      <h1 className='text-5xl text-teal-900 font-black text-center hover:text-light2'>Patient List</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-teal-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Patient Id
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Patient Name
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Patient Email
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Status
                </th>
                {/* <th scope="col" className="px-6 py-3 hover:text-light2">
                  EHR
                </th> */}
            </tr>
        </thead>

        <tbody>
        {patients && patients.map(patient => (
          <tr key={patient._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{patient._id}</th>
             <td className="px-6 py-4">{patient.fname} {patient.lname}</td>
             <td className="px-6 py-4">{patient.email}</td>
             <td className="px-6 py-4">
             {patient.isGrant.includes(currentDoctor._id) ?
             (<h6 className='text-teal-900 text-xl font-semibold'>Granted</h6>) : (
              <>
              <h6 className='text-red-500 font-semibold'>Revoked</h6>
              </>
            )}
            </td>
            {/* {patient.isGrant.includes(currentDoctor._id) ? (
              <td className="px-6 py-4 space-x-4 flex items-center">
              <NavLink to='/addehr'>
               <button className='bg-teal-600 hover:bg-teal-800 py-2 px-4 rounded-full text-white'>Add</button>
               </NavLink> 
               <button className='bg-red-600 hover:bg-red-800 py-2 px-4 rounded-full text-white'>View</button>
             </td>
            ) : (
              <td className="px-6 py-4 space-x-4 flex items-center">
               <button className='bg-teal-600/50 hover:bg-teal-800/70 py-2 px-4 rounded-full text-white'>Add</button> 
               <button className='bg-red-600/50 hover:bg-red-800/70 py-2 px-4 rounded-full text-white'>View</button>
             </td>
            )} */}
             
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
  </>
  )
}

export default AccessEHR;
