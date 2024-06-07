export type JobItem = {
  id: string;
  command: string;
  sample: string;
  user: string;
  group: string;
  status: string;
  date: string;
  completedDate: string;
};

export type JobsData = JobItem[];
