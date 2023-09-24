import React from "react";
import { useSelector } from "react-redux";
import PatientCard from "../components/PatientCard";
import patients from "../patient-data";

const DoctorDashboardScreen = () => {

  const doctorState = useSelector((state) => state.loginDoctorReducer);
  const { currentDoctor } = doctorState;

  return (
    <>
      <div className="flex md:flex-row flex-col my-10 justify-center items-center gap-10 md:gap-20">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="rounded-full overflow-hidden border-2 border-teal-900/50 shadow-xl h-36 w-36">
            <img
              className="object-fill w-full"
              src="../images/anita.jpg"
              alt="not valid"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-semibold">
              Dr. {currentDoctor.fname} {currentDoctor.lname}
            </h1>
            <p>ID : {currentDoctor._id}</p>
          </div>
        </div>
        <div className="flex justify-between h-1/2 md:w-1/3 gap-2">
          <button className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
            Recent Patients
          </button>
          <button className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
            Search Database
          </button>
        </div>
      </div>

      <div className="md:px-32 px-4">
        <hr className="border-light6 border-2" />
      </div>

      <div className="my-14">
        {patients &&
          patients.map((patient) => (
            <PatientCard key={patient.id} patientdata={patient} />
          ))}
      </div>
    </>
  );
};

export default DoctorDashboardScreen;
