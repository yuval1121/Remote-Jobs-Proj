import { JobItem } from "../types";
import { jobs } from "../app";

export const addJob = (Job: JobItem) => {
  const id = crypto.randomUUID();

  jobs.push({ ...Job, id });

  return id;
};

export const updateJob = (id: string, data: Partial<JobItem>) => {
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    throw Error("Not found");
  }

  Object.assign(job, data);
};

export const deleteJob = (id: string) => {
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    throw Error("Not found");
  }

  jobs.splice(jobs.indexOf(job), 1);
};
