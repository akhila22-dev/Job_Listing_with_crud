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
        className=" bg-blue-200 text-black active:bg-blue-500

      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add New Job
      </button>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  backdrop-blur-lg">
            <div className="relative  my-6 mx-auto w-2/6">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-violet-50 outline-none focus:outline-none">
                <div className="flex items-start justify-between pt-2  ">
                  <label className="text-3xl font-bold not-italic pl-10 pt-3">
                    Add New Job
                  </label>
                  <button
                    className="bg-transparent border-0 text-black  float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black  h-10 w-6 text-3xl block py-0 pr-10 rounded-full">
                      x
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <form className="px-5  pb-0 w-full ">
                    <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
                      Name
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      type="text"
                      value={newJobName}
                      onChange={(e) => setNewJobName(e.target.value)}
                    />

                    <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
                      JobLogo
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      type="text"
                      value={newJobImg}
                      onChange={(e) => setNewJobImg(e.target.value)}
                    />

                    <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
                      Description
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      type="text"
                      value={newJobDescription}
                      onChange={(e) => setNewJobDescription(e.target.value)}
                    />

                    <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
                      Experience
                    </label>

                    <select className="block text-black text-1xl font-bold mb-1 pl-4 not-italic float-left w-full  h-10 shadow  border rounded ">
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
                      value={newJobLocation}
                      onChange={(e) => setNewJobLocation(e.target.value)}
                    />

                    <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
                      Role
                    </label>

                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      type="text"
                      value={newJobRole}
                      onChange={(e) => setNewJobRole(e.target.value)}
                    />
                    <div className="flex items-center justify-end pt-4 ">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>

                      <button
                        className="text-white  bg-slate-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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
