import React, { useContext, useState } from "react";
import JobContext from "./JobContext";
import ModalAdd from "./ModalAdd";
import edit from "../Images/Edit.png"
import Delete from "../Images/delete.png"


const JobList: React.FC = () => {
  const { jobs, editJob, deleteJob } = useContext(JobContext);
  const [editJobId, setEditJobId] = useState<number | null>(null);
  const [editImg, setEditImg] = useState("");
  const [editJobName, setEditJobName] = useState("");
  const [editJobDescription, setEditJobDescription] = useState("");
  const [editJobLocation, setEditJobLocation] = useState("");
  const [editRequriedExperience, setEditRequriedExperience] = useState<
    number | string
  >("");
  const [editSalary, setEditSalary] = useState<number | string>("");
  const [editJobRole, setEditJobRole] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [editModal, setEditModal] = useState(false);

  const handleDeleteJob = (id: number) => {
    deleteJob(id);
  };

  const handleEditJob = (
    id: number,
    img: string,
    name: string,
    jobDescription: string,
    jobLocation: string,
    requriedExperience: number | string,
    salary: number | string,
    jobRole: string
  ) => {
    setEditJobId(id);
    setEditImg(img);
    setEditJobName(name);
    setEditJobDescription(jobDescription);
    setEditJobLocation(jobLocation);
    setEditRequriedExperience(requriedExperience);
    setEditSalary(salary);
    setEditJobRole(jobRole);
    setEditModal(true);
  };

  const handleUpdateJob = () => {
    if (editJobId !== null) {
      const EditedJob = {
        id: editJobId,
        img: editImg,
        name: editJobName,
        jobDescription: editJobDescription,
        jobLocation: editJobLocation,
        requriedExperience: editRequriedExperience,
        salary: editSalary,
        jobRole: editJobRole,
      };

      editJob(editJobId, EditedJob);
      setEditJobId(null);
      setEditJobName("");
      setEditImg("");
      setEditJobDescription("");
      setEditJobLocation("");
      setEditRequriedExperience("");
      setEditSalary("");
      setEditJobRole("");
    }
  };

  const handleSubmit = () => {
    handleUpdateJob();

    setEditModal(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSearch(e.target.value);
  };

  const filteredItems = jobs.filter((job) =>
    job.name.toLowerCase().includes(newSearch.toLowerCase())
  );

 

  return (
    <>
      <nav className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className=" pl-16 not-italic text-4xl font-semibold whitespace-nowrap dark:text-white  ">
            Job Portal
          </div>

          <div className="  md:block md:w-auto float-left      ">
          <span style={{ display: "inline-block" }}>
            <input
              type="text"
              placeholder="Search...... Job "
              value={newSearch}
              onChange={handleSearch}
              className="shadow appearance-none border text-xl py-2 pr-8 pl-6 text-black rounded-2xl  "
            />
          </span>
          
        </div>
        <div
          className="hidden w-full md:block md:w-auto float-right  pr-16 mb-5 pt-2"
          id="navbar-default"
        >
          <ModalAdd />
        </div>
        </div>

      </nav> 

      <div className="container mx-auto  pb-12  bg-sky-50 ">
        <div className="grid lg:grid-cols-2 gap-10 p-10   ">
          {filteredItems.map((job) => (
            <div key={job.id}>
              {editJobId === job.id ? (
                <>
                  {editModal ? (
                   <>
                   <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  backdrop-blur-lg">
                     <div className="relative  my-6 mx-auto   ">
                       <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full- outline-none focus:outline-none  bg-purple-100  bg-opacity-80">
                         <div className="flex items-start justify-between   ">
                           <label className="text-3xl font-bold not-italic pl-8 pt-3">
                             Edit Job
                           </label>
                           <button
                             className="bg-transparent border-0 text-black  float-right"
                             onClick={() => setEditModal(false)}
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
                               value={editJobName}
                               onChange={(e) => setEditJobName(e.target.value)}
                               placeholder=" Name"
                             />
                             </span>
         
                              <span className=" ml-7"> 
                             <input
                               className="shadow appearance-none w-64  h-11 rounded-lg  text-black bg-purple-50 mt-2 pl-4 pr-2"
                               type="text"
                               value={editImg}
                               onChange={(e) => setEditImg(e.target.value)}
                               placeholder=" Image Address"
                             />
                             </span>  
         
                            
                    <div className="flex items-start justify-between pl- mt-5">
                             <input
                               className="shadow appearance-none w-full  h-16 rounded-lg   text-black bg-purple-50 pl-5 "
                               type="text"
                               value={editJobDescription}
                               onChange={(e) => setEditJobDescription(e.target.value)}
                               placeholder="Description"
                             />
         
         </div>
         
                            <div className="  mt-3">
                             <select className=" text-black text-1xl font-bold  pl-4 not-italic float-left w-64  h-11 rounded-lg  bg-purple-50 mt-2  " 
                             value={editRequriedExperience}
                               onChange={(e) => setEditRequriedExperience(e.target.value)} 
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
                               value={editSalary}
                               onChange={(e) => setEditSalary(e.target.value)}
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
                               value={editJobLocation}
                               onChange={(e) => setEditJobLocation(e.target.value)}
                               placeholder=" Location"
                             />
                             </span>
         
                             
                             <span className=" ml-7">
                             <input
                               className="shadow appearance-none  w-64  h-11 rounded-lg mt-2  bg-purple-50 text-black pl-4"
                               type="text"
                               value={editJobRole}
                               onChange={(e) => setEditJobRole(e.target.value)}
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
              ) : (
                <>
                  <div className="rounded overflow-hidden shadow-lg flex justify-start pb-5 font-serif font-normal cursor-pointer hover:font-bold text-base  bg-white  ">
                    <div className=" pl-8 mt-8 pb-8  ">
                      <img src={job.img} alt="img" className=" rounded " />
                    </div>
                    <div className="mt-7 container text-left pl-10 ">
                      <div className="font-serif text-2xl ">{job.name}</div>
                      <div>{job.jobRole}</div>
                      <div>{job.jobDescription}</div>
                      <div>{job.requriedExperience}</div>
                      <div>{job.salary}</div>
                      <div>{job.jobLocation}</div>
                    </div>
                    <div className=" flex justify-end self-end ">
                      <div className=" pr-7">
                        
                        <button
                          onClick={() =>
                            handleEditJob(
                              job.id,
                              job.img,
                              job.name,
                              job.jobDescription,
                              job.jobLocation,
                              job.requriedExperience,
                              job.salary,
                              job.jobRole
                            )
                          }
                          className=" w-16  pr-1.5 pl-1 pt-1 pb-1 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-3 focus:outline-none focus:ring-lime-50 dark:focus:ring-teal-100 font-medium rounded-md  "
                        >
                          
                         <img src={edit} alt="Edit" className=" h-3  float-right  mt-1  "/>
                      Edit
                         
                        </button>
                        
                      </div>
                      <div className="pr-7">
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className=" w-20  pr-1.5  pl-1  pt-1 pb-1    text-white bg-gradient-to-br from-red-200  to-red-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-md "
                        >
                          <img src={Delete} alt="delete" className=" h-3.5  float-right  mt-1  "/>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobList;