// import React, { useContext, useState } from "react";
// import JobContext from "./JobContext";
// import ModalAdd from "./ModalAdd";

const JobList = () => {

  // const { jobs, editJob, deleteJob } = useContext(JobContext);

  // const [editJobId, setEditJobId] = useState<number | null>(null);
  // const [editJobName, setEditJobName] = useState("");
  // const [editJobDescription, setEditJobDescription] = useState("");
  // const [editJobLocation, setEditJobLocation] = useState("");
  // const [editRequriedExperience, setEditRequriedExperience] = useState<
  //   number | string
  // >("");
  // const [editSalary, setEditSalary] = useState<number | string>("");
  // const [editJobRole, setEditJobRole] = useState("");

  // const [newSearch, setNewSearch] = useState("");
  // const [location, setLocation] = useState("");
  // const [editModal, setEditModal] = useState(false);
  // const [deleteModal, setDeleteModal] = useState(false);

  // const handleDeleteJob = (id: number) => {
  //   deleteJob(id);
  // };

  // const handleLocationSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLocation(e.target.value);
  // };

  // const handleEditJob = (
  //   id: number,
  //   name: string,
  //   jobDescription: string,
  //   jobLocation: string,
  //   requriedExperience: number | string,
  //   salary: number | string,
  //   jobRole: string
  // ) => {
  //   setEditJobId(id);
  //   setEditJobName(name);
  //   setEditJobDescription(jobDescription);
  //   setEditJobLocation(jobLocation);
  //   setEditRequriedExperience(requriedExperience);
  //   setEditSalary(salary);
  //   setEditJobRole(jobRole);
  //   setEditModal(true);
  //   setDeleteModal(true);
  // };

  // const handleUpdateJob = () => {
  //   if (editJobId !== null) {
  //     const EditedJob = {
  //       id: editJobId,
  //       name: editJobName,
  //       jobDescription: editJobDescription,
  //       jobLocation: editJobLocation,
  //       requriedExperience: editRequriedExperience,
  //       salary: editSalary,
  //       jobRole: editJobRole,
  //     };

  //     editJob(editJobId, EditedJob);
  //     setEditJobId(null);
  //     setEditJobName("");
  //     setEditJobDescription("");
  //     setEditJobLocation("");
  //     setEditRequriedExperience("");
  //     setEditSalary("");
  //     setEditJobRole("");
  //   }
  // };

  // const handleSubmit = () => {
  //   setEditModal(false);
  //   handleUpdateJob();
  // };

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNewSearch(e.target.value);
  // };

  // const filteredItems = jobs
  //   .filter((job) =>
  //     job.jobLocation.toLowerCase().includes(location.toLowerCase())
  //   )
  //   .filter((job) => job.name.toLowerCase().includes(newSearch.toLowerCase()));

  // return (
  //   <div>
  //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  //       <div className="  not-italic text-4xl font-semibold whitespace-nowrap dark:text-white">
  //         Job Portal
  //       </div>
  //     </div>

  //     <div className="  md:block md:w-auto float-left  ml-16  ">
  //       <span style={{ display: "inline-block" }}>
  //         <input
  //           type="text"
  //           placeholder="Search...... Job "
  //           value={newSearch}
  //           onChange={handleSearch}
  //           className="shadow appearance-none border text-xl py-2 pr-8 pl-6 text-black rounded-2xl  "
  //         />
  //       </span>
  //     </div>
  //     <div
  //       className="hidden w-full md:block md:w-auto float-right mr-16 mb-5"
  //       id="navbar-default"
  //     >
  //       <ModalAdd />
  //     </div>

  //     <div>
  //       <div className=" ml-14 mt-14 break-normal flex  ">
  //         <div className="flex float-left font-medium bg-black text-white pr-2 h-12 items-stretch py-2 rounded-md text-xl ">
  //           {/* <span className=" w-40 pl-5 ">Name</span>
  //           <span className=" w-48 pl-6">Description</span>
  //           <span className=" w-48 ">Location</span>
  //           <span className=" w-48 pr-14">Experience</span>
  //           <span className=" w-48 pr-32">Salary</span>
  //           <span className=" w-48 pr-48">Role</span>
  //           <span className=" w-44 pr-40">Action</span> */}

  //           <span className="pl-20  pr-12 ">Name</span>
  //           <span className="pl-12 pr-12 ">Description</span>
  //           <span className="pl-12 pr-12 ">Location</span>
  //           <span className="pl-12 pr-12 ">Experience</span>
  //           <span className="pl-12 pr-12">Salary</span>
  //           <span className="pl-12  pr-12">Role</span>
  //           <span className="pl-12  pr-20">Action</span>
  //         </div>
  //       </div>

  //       {filteredItems.map((job) => (
  //         <div key={job.id}>
  //           {editJobId === job.id ? (
  //             <div>
  //               {editModal ? (
  //                 <>
  //                   <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  backdrop-blur-lg">
  //                     <div className="relative  my-6 mx-auto w-2/6">
  //                       <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-violet-50 outline-none focus:outline-none">
  //                         <div className="flex items-start justify-between pt-2  ">
  //                           <label className="text-3xl font-bold not-italic pl-10 pt-3">
  //                             Edit Job
  //                           </label>
  //                           <button
  //                             className="bg-transparent border-0 text-black  float-right"
  //                             onClick={() => setEditModal(false)}
  //                           ></button>
  //                         </div>
  //                         <div className="relative p-6 flex-auto ">
  //                           <form className="px-5  pb-0 w-full  ">
  //                             <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
  //                               Name
  //                             </label>

  //                             <input
  //                               className=" shadow appearance-none border rounded w-full py-2 px-1 text-black"
  //                               type="text"
  //                               value={editJobName}
  //                               onChange={(e) => setEditJobName(e.target.value)}
  //                             />

  //                             <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
  //                               Description
  //                             </label>

  //                             <input
  //                               className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
  //                               type="text"
  //                               value={editJobDescription}
  //                               onChange={(e) =>
  //                                 setEditJobDescription(e.target.value)
  //                               }
  //                             />

  //                             <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
  //                               Experience
  //                             </label>

  //                             <select className="block text-black text-1xl font-bold mb-1 pl-4 not-italic float-left w-full  h-10 shadow  border rounded ">
  //                               <option>3 years</option>
  //                               <option>4 years</option>
  //                               <option>5 years</option>
  //                               <option>6 years</option>
  //                               <option>7 years</option>
  //                               <option>8 years</option>
  //                               <option>9 years</option>
  //                             </select>

  //                             <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
  //                               Salary
  //                             </label>

  //                             <select className="block text-black text-1xl font-bold mb-1 pl-4 not-italic float-left w-full  h-10 shadow  border rounded ">
  //                               <option>3 Lpa</option>
  //                               <option>4 Lpa</option>
  //                               <option>5 Lpa</option>
  //                               <option>6 Lpa</option>
  //                               <option>7 Lpa</option>
  //                               <option>8 Lpa</option>
  //                               <option>9 Lpa</option>
  //                             </select>

  //                             <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
  //                               Location
  //                             </label>

  //                             <input
  //                               className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
  //                               type="text"
  //                               value={editJobLocation}
  //                               onChange={(e) =>
  //                                 setEditJobLocation(e.target.value)
  //                               }
  //                             />

  //                             <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
  //                               Role
  //                             </label>

  //                             <input
  //                               className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
  //                               type="text"
  //                               value={editJobRole}
  //                               onChange={(e) => setEditJobRole(e.target.value)}
  //                             />
  //                             <div className="flex items-center justify-end pt-4 ">
  //                               <button
  //                                 className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
  //                                 type="button"
  //                                 onClick={() => setEditModal(false)}
  //                               >
  //                                 Close
  //                               </button>

  //                               <button
  //                                 className="text-white bg-slate-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
  //                                 type="button"
  //                                 onClick={handleSubmit}
  //                               >
  //                                 Submit
  //                               </button>
  //                             </div>
  //                           </form>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </>
  //               ) : null}
  //             </div>
  //           ) : (
  //             <>
  //               {/* <div className="flex float-left border-x-4 ml-14 h-14  shadow  pt-2 w-11/12 text-black rounded font-medium not-italic break-normal ">
  //                */}
  //               <div className=" border-x-4 ml-14 h-24  shadow  pt-2  w-72 text-black rounded font-medium not-italic break-normal ">
  //                 <span className="pl-20  pr-12 ">Name:{job.name}</span>
  //                 <span className="pl-12 pr-12 ">Description{job.jobDescription}</span>
  //                 <span className="pl-12 pr-12 ">{job.jobLocation}</span>
  //                 <span className="pl-12 pr-12  ">
  //                   {job.requriedExperience}
  //                 </span>
  //                 <span className="pl-12 pr-12 ">{job.salary}</span>
  //                 <span className="pl-12 pr-12 ">{job.jobRole}</span>

  //                 <span className="pl-12 pr-12 ">
  //                   <button
  //                     onClick={() =>
  //                       handleEditJob(
  //                         job.id,
  //                         job.name,
  //                         job.jobDescription,
  //                         job.jobLocation,
  //                         job.requriedExperience,
  //                         job.salary,
  //                         job.jobRole
  //                       )
  //                     }
  //                     className="pr-10 w-16 bg-slate-400 rounded pl-4 pt-1 pb-1  "
  //                   >
  //                     Edit
  //                   </button>
  //                 </span>

  //                 {/* Delete Modal */}

  //                 {/* {deleteModal ? (
  //                   <>
  //                     <label className="pt-1 ml-6">Delete</label>
  //                     <button
  //                       className=" pr-10 w-16 bg-red-500 rounded pl-1.5  pt-1 pb-1"
  //                       onClick={() => setDeleteModal(false)}
  //                     ></button>
  //                   </>
  //                 ) : null} */}

  //                 <span className="pt-1 ml-6">
  //                   <button
  //                     onClick={() => handleDeleteJob(job.id)}
  //                     className=" pr-10 w-16 bg-red-500 rounded pl-1.5  pt-1 pb-1"
  //                   >
  //                     Delete
  //                   </button>
  //                 </span>
  //               </div>
  //             </>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default JobList;
