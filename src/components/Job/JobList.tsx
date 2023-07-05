import React, { useContext, useState } from "react";
import JobContext from "./JobContext";
import ModalAdd from "./ModalAdd";

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
      <nav className="bg-white border-gray-200 dark:bg-gray-600">
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

        {/* <div className="  md:block md:w-auto float-left  pl-16 pt-3    ">
          <span style={{ display: "inline-block" }}>
            <input
              type="text"
              placeholder="Search...... Job "
              value={newSearch}
              onChange={handleSearch}
              className="shadow appearance-none border text-xl py-2 pr-8 pl-6 text-black rounded-2xl  "
            />
          </span>
        </div> */}
        {/* <div
          className="hidden w-full md:block md:w-auto float-right  pr-16 mb-5 pt-2"
          id="navbar-default"
        >
          <ModalAdd />
        </div> */}
      </nav> 

      <div className="container mx-auto mt-2 pb-12  ">
        <div className="grid lg:grid-cols-2 gap-10 p-10   ">
          {filteredItems.map((job) => (
            <div key={job.id}>
              {editJobId === job.id ? (
                <>
                  {editModal ? (
                    <>
                      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  backdrop-blur-lg">
                        <div className="relative  my-6 mx-auto w-2/6">
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-violet-50 outline-none focus:outline-none">
                            <div className="flex items-start justify-between pt-2  ">
                              <label className="text-3xl font-bold not-italic pl-10 pt-3">
                                Edit Job
                              </label>
                              <button
                                className="bg-transparent border-0 text-black  float-right"
                                onClick={() => setEditModal(false)}
                              >
                                {/* <span className="text-black  h-10 w-6 text-3xl block py-0 pr-10 rounded-full">
                                  x
                                </span> */}
                              </button>
                            </div>
                            <div className="relative p-6 flex-auto ">
                              <form className="px-5  pb-0 w-full  ">
                                <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
                                  Name
                                </label>

                                <input
                                  className=" shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                  type="text"
                                  value={editJobName}
                                  onChange={(e) =>
                                    setEditJobName(e.target.value)
                                  }
                                />

                                <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
                                  Description
                                </label>

                                <input
                                  className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                  type="text"
                                  value={editJobDescription}
                                  onChange={(e) =>
                                    setEditJobDescription(e.target.value)
                                  }
                                />

                                <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
                                  Experience
                                </label>

                                <select className="block text-black text-1xl font-bold mb-1 pl-4 not-italic float-left w-full  h-10 shadow  border rounded ">
                                  <option>3 years</option>
                                  <option>4 years</option>
                                  <option>5 years</option>
                                  <option>6 years</option>
                                  <option>7 years</option>
                                  <option>8 years</option>
                                  <option>9 years</option>
                                </select>

                                <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
                                  Salary
                                </label>

                                <select className="block text-black text-1xl font-bold mb-1 pl-4 not-italic float-left w-full  h-10 shadow  border rounded ">
                                  <option>3 Lpa</option>
                                  <option>4 Lpa</option>
                                  <option>5 Lpa</option>
                                  <option>6 Lpa</option>
                                  <option>7 Lpa</option>
                                  <option>8 Lpa</option>
                                  <option>9 Lpa</option>
                                </select>

                                <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
                                  Location
                                </label>

                                <input
                                  className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                  type="text"
                                  value={editJobLocation}
                                  onChange={(e) =>
                                    setEditJobLocation(e.target.value)
                                  }
                                />

                                <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
                                  Role
                                </label>

                                <input
                                  className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                  type="text"
                                  value={editJobRole}
                                  onChange={(e) =>
                                    setEditJobRole(e.target.value)
                                  }
                                />
                                <div className="flex items-center justify-end pt-4 ">
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={() => setEditModal(false)}
                                  >
                                    Close
                                  </button>

                                  <button
                                    className="text-white bg-slate-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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
                  <div className="rounded overflow-hidden shadow-lg flex justify-start pb-5 font-serif font-normal cursor-pointer hover:font-bold text-base ">
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
                          className="pr-10 w-16 bg-slate-400 rounded pl-4 pt-1 pb-1  "
                        >
                          Edit
                        </button>
                      </div>
                      <div className="pr-8">
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className=" pr-10 w-16 bg-red-500 rounded pl-1.5  pt-1 pb-1"
                        >
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
