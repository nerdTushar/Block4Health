import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllDoctors,doctorGrant,doctorRevoke,filterDoctor} from '../actions/doctorAction';
import Loader from '../components/Loader';
import Error from '../components/Error';

const DoctorsAccessList = () => {

    const [searchKey,setSearchKey] = useState('');

    const doctorState = useSelector(state => state.getAllDoctorsReducer);
    const {loading,error,doctors} = doctorState;

    const patientState = useSelector(state => state.loginPatientReducer);
    const {currentPatient} = patientState;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllDoctors());
    },[dispatch]);

    const myFun = (e) => {
      e.preventDefault();
      dispatch(filterDoctor(searchKey));
    }

  return (<>
    {loading && (<Loader />)}
    {error && (<Error error='Error While Fetching Doctors'/>)}
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
               placeholder="Search Doctors ...." 
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
      <h1 className='text-5xl text-teal-900 font-black text-center hover:text-light2'>Doctor List</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-teal-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Doctor Id
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Doctor Name
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Doctor Email
                </th>
                <th scope="col" className="px-6 py-3 hover:text-light2">
                  Access
                </th>
            </tr>
        </thead>

        <tbody>
        {doctors && doctors.map(doctor => (
          <tr key={doctor._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{doctor._id}</th>
             <td className="px-6 py-4">{doctor.fname} {doctor.lname}</td>
             <td className="px-6 py-4">{doctor.email}</td>
             <td className="px-6 py-4 space-x-4 flex items-center"> 
             {doctor.isGrant.includes(currentPatient._id) ?
             (<h6 className='text-teal-900 font-semibold'>Granted</h6>) : (
              <>
              <button className='bg-teal-600 hover:bg-teal-800 py-2 px-4 rounded-full text-white'
              onClick={() => {dispatch(doctorGrant(doctor._id,currentPatient._id))}}>Grant</button> 
              </>
            )}
             {doctor.isGrant.includes(currentPatient._id) ?
             (<>
              <button className='bg-red-600 hover:bg-red-800 py-2 px-4 rounded-full text-white'
              onClick={() => {dispatch(doctorRevoke(doctor._id,currentPatient._id))}}>Revoke</button> 
              </>) : (
                <h6 className='text-red-500 font-semibold'>Revoked</h6>
            )}
             </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
  </>
  )
}

export default DoctorsAccessList
