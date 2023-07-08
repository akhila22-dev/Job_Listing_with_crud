import { createContext } from "react";

export interface Job {
  id: number;
  img: string;
  name: string;
  jobDescription: string;
  jobLocation: string;
  requriedExperience: number | string;
  salary: number | string;
  jobRole: string;
}

interface JobContextProps {
  jobs: Job[];
  addJob: (job: Job) => void;
  editJob: (id: number, EditedJob: Job) => void;
  deleteJob: (id: number) => void;
}

const JobContext = createContext<JobContextProps>({
  jobs: [],
  addJob: () => {},
  editJob: () => {},
  deleteJob: () => {},
});

export interface Login {
  name: string;
  email: string | number;
  password: string | number;
}

export default JobContext;
