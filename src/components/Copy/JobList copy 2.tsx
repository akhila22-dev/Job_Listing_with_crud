// import React, { useContext, useState } from "react";
// import JobContext from "./JobContext";
// import ModalAdd from "./ModalAdd";

const JobList = () => {
//   const { jobs, editJob, deleteJob } = useContext(JobContext);

//   const [editJobId, setEditJobId] = useState<number | null>(null);
//   const [editJobName, setEditJobName] = useState("");
//   const [editJobDescription, setEditJobDescription] = useState("");
//   const [editJobLocation, setEditJobLocation] = useState("");
//   const [editRequriedExperience, setEditRequriedExperience] = useState<
//     number | string
//   >("");
//   const [editJobRole, setEditJobRole] = useState("");
//   const [newSearch, setNewSearch] = useState("");
//   const [locationQuery, setLocationQuery] = useState("");
//   const [editModal, setEditModal] = useState(false);

//   const handleDeleteJob = (id: number) => {
//     deleteJob(id);
//   };

//   const handleLocationSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLocationQuery(e.target.value);
//   };

//   const handleEditJob = (
//     id: number,
//     name: string,
//     jobDescription: string,
//     jobLocation: string,
//     requriedExperience: number | string,
//     jobRole: string
//   ) => {
//     setEditJobId(id);
//     setEditJobName(name);
//     setEditJobDescription(jobDescription);
//     setEditJobLocation(jobLocation);
//     setEditRequriedExperience(requriedExperience);
//     setEditJobRole(jobRole);
//   };

//   const handleUpdateJob = () => {
//     if (editJobId !== null) {
//       const EditedJob = {
//         id: editJobId,
//         name: editJobName,
//         jobDescription: editJobDescription,
//         jobLocation: editJobLocation,
//         requriedExperience: editRequriedExperience,
//         jobRole: editJobRole,
//       };

//       editJob(editJobId, EditedJob);
//       setEditJobId(null);
//       setEditJobName("");
//       setEditJobDescription("");
//       setEditJobLocation("");
//       setEditRequriedExperience("");
//       setEditJobRole("");
//     }
//   };

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // const [newSearchValue , locationQueryValue] = e.target.value.split(',')
//     setNewSearch(e.target.value);
//   };

//   const filteredItems = jobs
//     .filter((job) =>
//       job.jobLocation.toLowerCase().includes(locationQuery.toLowerCase())
//     )
//     .filter((job) => job.name.toLowerCase().includes(newSearch.toLowerCase()));

//   return (
//     <div>
//       <div>
//         <nav className="bg-white border-gray-200 dark:bg-gray-900">
//           <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//             <div className="self-start text-2xl font-semibold whitespace-nowrap dark:text-white">
//               List Of All Jobs
//             </div>
//             <div
//               className="hidden w-full md:block md:w-auto"
//               id="navbar-default"
//             >
//               <ModalAdd />
//             </div>
//             <div className=" text-2xl font-light dark:text-white">
//               Search Jobs
//             </div>
//             <input
//               type="text"
//               placeholder="IM SERACH "
//               value={newSearch}
//               onChange={handleSearch}
//             />

//             <input
//               type="text"
//               value={locationQuery}
//               onChange={handleLocationSearch}
//               placeholder="Search by location"
//             />
//           </div>
//         </nav>
//       </div>{" "}
//       <div>
//         <div className="ml-32 mt-6">
//           <div className="flex float-left bg-black text-white  h-12 items-stretch py-3 pr-20">
//             <span className=" w-36 pl-8">Name</span>
//             <span className=" w-48 pl-8">Description</span>
//             <span className=" w-48 ">Location</span>
//             <span className=" w-36 ">Experience</span>
//             <span className=" w-48">Role</span>
//             <span className=" pl-12 w-48">Action</span>
//           </div>
//         </div>

//         {filteredItems.map((job) => (
//           <div key={job.id}>
//             {editJobId === job.id ? (
//               <div>
//                 <span>
//                   <input
//                     type="text"
//                     value={editJobName}
//                     onChange={(e) => setEditJobName(e.target.value)}
//                     className=" w-36"
//                   />
//                 </span>

//                 <span>
//                   <input
//                     type="text"
//                     value={editJobDescription}
//                     onChange={(e) => setEditJobDescription(e.target.value)}
//                     className=" w-36 pl-24 py-2 "
//                   />
//                 </span>

//                 <span>
//                   {" "}
//                   <input
//                     type="text"
//                     value={editJobLocation}
//                     onChange={(e) => setEditJobLocation(e.target.value)}
//                     className="w-48 pl-24 py-2"
//                   />
//                 </span>

//                 <span>
//                   <input
//                     type="text"
//                     value={editRequriedExperience}
//                     onChange={(e) => setEditRequriedExperience(e.target.value)}
//                     className="w-34 pl-24 py-2"
//                   />
//                 </span>

//                 <span>
//                   {" "}
//                   <input
//                     type="text"
//                     value={editJobRole}
//                     onChange={(e) => setEditJobRole(e.target.value)}
//                     className="w-34 pl-24 py-2"
//                   />
//                 </span>

//                 <button onClick={handleUpdateJob}>Save</button>
//                 <button onClick={() => setEditJobId}>Cancel</button>
//               </div>
//             ) : (
//               <>
//                 <div className="flex float-left divide-y divide-slate-600 h-10  ">
//                   <span className=" w-48 pl-48 py-2 ">{job.name}</span>
//                   <span className="w-48 pl-36 py-2">{job.jobDescription}</span>
//                   <span className="w-48 pl-36 py-2">{job.jobLocation}</span>
//                   <span className=" w-34 pl-32 py-2">
//                     {job.requriedExperience}
//                   </span>
//                   <span className="w-72 pl-18 py-2">{job.jobRole}</span>
//                   <span className="pt-1">
//                     <button
//                       onClick={() =>
//                         handleEditJob(
//                           job.id,
//                           job.name,
//                           job.jobDescription,
//                           job.jobLocation,
//                           job.requriedExperience,
//                           job.jobRole
//                         )
//                       }
//                       className="pr-10 w-16 bg-slate-400 rounded pl-4 pt-1 pb-1  "
//                     >
//                       Edit
//                     </button>
//                   </span>

//                   <span className="pt-1 ml-4">
//                     <button
//                       onClick={() => handleDeleteJob(job.id)}
//                       className=" pr-10 w-16 bg-red-500 rounded pl-1.5  pt-1 pb-1"
//                     >
//                       Delete
//                     </button>
//                   </span>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobList;

// // ====================================== NewJob and setJob===========================================
// //  {/* <div>
// //       <label>Job Name :</label>
// //       <input
// //         type="text"
// //         value={newJobName}
// //         onChange={(e) => setNewJobName(e.target.value)}

// //       />
// //     </div>
// //     <div>
// //       <label>Job Description :</label>
// //       <input
// //         type="text"
// //         value={newJobDescription}
// //         onChange={(e) => setNewJobDescription(e.target.value)}
// //       />
// //     </div>
// //     <div>
// //       <label>Job Location : </label>
// //       <input
// //         type="text"
// //         value={newJobLocation}
// //         onChange={(e) => setNewJobLocation(e.target.value)}
// //       />
// //     </div>
// //     <div>
// //       <label>Experience : </label>
// //       <input
// //         type="text"
// //         value={newRequriedExperience}
// //         onChange={(e) => setNewRequriedExperience(e.target.value)}
// //       />
// //     </div>
// //     <div>
// //       <label>Job Role :</label>
// //       <input
// //         type="text"
// //         value={newJobRole}
// //         onChange={(e) => setNewJobRole(e.target.value)}
// //       />
// //     </div>
// //     <button onClick={handleAddJob}>Add Job</button>
// //     <ul>
// //       {jobs.map((job) => (
// //         <li key={job.id}>
// //           <span>
// //             <div>{job.name}</div>
// //             <div>{job.JobDescription}</div>
// //             <div>{job.JobLocation}</div> <div>{job.RequriedExperience}</div>
// //             <div>{job.JobRole}</div>
// //           </span>

// //           <button onClick={() => handleDeleteJob(job.id)}>Delete</button>
// //         </li>
// //       ))}
// //     </ul> */}

// // ===============================Heading========================================
// //  {/* <div className="  bg-neutral-800 text-white dark:border-neutral-500 dark:bg-neutral-90 mt-20 ml-14 mr-16 h-12 items-stretch py-3 ">
// //         <span className="px-0 py-3 mr-12">Id</span>
// //         <span className="px-11 py-3">JobName</span>
// //         <span className="px-11 py-3">JobDescription</span>
// //         <span className="px-11 py-3">JobLocation</span>
// //         <span className="px-11 py-3">JobExperience</span>
// //         <span className="px-11 py-3 pr-14">JobRole</span>
// //         <span className="px-11 py-3 ml-22">Action</span>
// //       </div> */}

// // ============================button edit delete=============
// // {/* <button
// //             onClick={() =>
// //               handleEditJob(
// //                 job.id,
// //                 job.name,
// //                 job.jobDescription,
// //                 job.jobLocation,
// //                 job.requriedExperience,
// //                 job.jobRole
// //               )
// //             }
// //             className="px-6 py-3"
// //           >
// //             Edit
// //           </button>

// //           <button onClick={() => handleDeleteJob(job.id)}>Delete</button> */}

// // ===================================calling array in form of map =====================================

// // {/* <div className="flex float-left flex-col">
// //                 <div className="flex-col  sm:px-6 lg:px-8">
// //                   <div className="overflow-hidden divide-y divide-slate-600 float-left px-28 ">
// //                     <span className="px-15 py-3 ">{job.id}</span>
// //                     <span className="px-11 py-3 ">{job.name}</span>
// //                     <span className="px-11 py-3">{job.jobDescription}</span>
// //                     <span className="px-11 py-3">{job.jobLocation}</span>
// //                     <span className="px-11 py-3">
// //                       {job.requriedExperience}
// //                     </span>
// //                     <span className="px-11 py-3">{job.jobRole}</span>
// //                     <button
// //                       onClick={() =>
// //                         handleEditJob(
// //                           job.id,
// //                           job.name,
// //                           job.jobDescription,
// //                           job.jobLocation,
// //                           job.requriedExperience,
// //                           job.jobRole
// //                         )
// //                       }
// //                       className="px-6 py-3"
// //                     >
// //                       Edit
// //                     </button>

// //                     <button
// //                       onClick={() => handleDeleteJob(job.id)}
// //                       className="px-6 py-3"
// //                     >
// //                       Delete
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div> */}
}
export default JobList ; 