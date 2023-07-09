import React, { useState, useContext } from "react";
import JobContext, { Job } from "./JobContext";

const ModalAdd: React.FC = () => {
  const { addJob } = useContext(JobContext);
  const [newJobImg, setNewJobImg] = useState("");
  const [newJobName, setNewJobName] = useState("");
  const [newJobDescription, setNewJobDescription] = useState("");
  const [newJobLocation, setNewJobLocation] = useState("");
  const [newRequriedExperience, setNewRequriedExperience] = useState("");
  const [newSalary, setNewSalary] = useState("");
  const [newJobRole, setNewJobRole] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddJob = () => {
    const newJob: Job = {
      id: Date.now(),
      name: newJobName,
      img: newJobImg,
      jobDescription: newJobDescription,
      jobLocation: newJobLocation,
      requriedExperience: newRequriedExperience,
      salary: newSalary,
      jobRole: newJobRole,
    };
    addJob(newJob);
    setNewJobName("");
    setNewJobImg("");
    setNewJobDescription("");
    setNewJobLocation("");
    setNewRequriedExperience("");
    setNewSalary("");
    setNewJobRole("");
  };

  const handleSubmit = () => {
    setShowModal(false);
    handleAddJob();
  };

  return (
    <>
      <button
        className="active:bg-blue-500
        
          text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
      
        "
      //       font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1

        type="button"
        onClick={() => setShowModal(true)}
      >
        Add New Job
      </button>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  backdrop-blur-lg">
            <div className="relative  my-6 mx-auto   ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full- outline-none focus:outline-none  bg-purple-100  bg-opacity-80">
                <div className="flex items-start justify-between   ">
                  <label className="text-3xl font-bold not-italic pl-8 pt-3">
                    Add New Job
                  </label>
                  <button
                    className="bg-transparent border-0 text-black  float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <div className="text-black  h-4 w-3 text-3xl block py-0 pr-10 rounded-full">
                      x
                    </div>
                  </button>
                </div>

                <div className="relative  flex-auto ">
                  <form className="px-5  pb-0  ">
                  
                   
                   <span>
                    <input
                      className="shadow appearance-none  w-64  h-11 rounded-lg  text-black bg-purple-50 pl-4 mt-5"
                      type="text"
                      value={newJobName}
                      onChange={(e) => setNewJobName(e.target.value)}
                      placeholder=" Name"
                    />
                    </span>

                     <span className=" ml-7"> 
                    <input
                      className="shadow appearance-none w-64  h-11 rounded-lg  text-black bg-purple-50 mt-2 pl-4"
                      type="text"
                      value={newJobImg}
                      onChange={(e) => setNewJobImg(e.target.value)}
                      placeholder=" Image Address"
                    />
                    </span>  

                   
           <div className="flex items-start justify-between pl- mt-5">
                    <input
                      className="shadow appearance-none w-full  h-16 rounded-lg   text-black bg-purple-50 pl-5 "
                      type="text"
                      value={newJobDescription}
                      onChange={(e) => setNewJobDescription(e.target.value)}
                      placeholder="Description"
                    />

</div>

                   <div className="  mt-3">
                    <select className=" text-black text-1xl font-bold  pl-4 not-italic float-left w-64  h-11 rounded-lg  bg-purple-50 mt-2  " 
                    value={newRequriedExperience}
                      onChange={(e) => setNewRequriedExperience(e.target.value)} 
                      placeholder="Experience"
                      >
                      <option>Experience</option>
                      <option>1 years</option>
                      <option>2 years</option>
                      <option>3 years</option>
                      <option>4 years</option>
                      <option>5 years</option>
                      <option>6 years</option>
                      <option>7 years</option>
                      <option>8 years</option>
                      <option>9 years</option>
                    </select>

                    

                    <select className=" ml-7 text-black text-1xl font-bold  pl-4 not-italic float-left  bg-purple-50  w-64  h-11 rounded-lg mt-2  "
                      value={newSalary}
                      onChange={(e) => setNewSalary(e.target.value)}
                    >
                      <option>Salary</option>
                      <option>3 Lpa</option>
                      <option>4 Lpa</option>
                      <option>5 Lpa</option>
                      <option>6 Lpa</option>
                      <option>7 Lpa</option>
                      <option>8 Lpa</option>
                      <option>9 Lpa</option>
                    </select>
                    </div>
                    
            
                    <span  className="mt-5 inline-block">
                    <input
                      className="shadow appearance-none w-64  h-11 rounded-lg  bg-purple-50 text-black pl-4"
                      type="text"
                      value={newJobLocation}
                      onChange={(e) => setNewJobLocation(e.target.value)}
                      placeholder=" Location"
                    />
                    </span>

                    
                    <span className=" ml-7">
                    <input
                      className="shadow appearance-none  w-64  h-11 rounded-lg mt-2  bg-purple-50 text-black pl-4"
                      type="text"
                      value={newJobRole}
                      onChange={(e) => setNewJobRole(e.target.value)}
                      placeholder="Role"
                    />
                    </span>
                  
                    <div className="flex items-center  justify-center pt-4 ">
                     

                      <button
                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300
                         dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg  flex items-center  
                        text-lg px-8 py-2.5 text-center mr-2 mb-5

                         "
                         
                      
                         type="button"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalAdd;
// text-white  bg-slate-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1