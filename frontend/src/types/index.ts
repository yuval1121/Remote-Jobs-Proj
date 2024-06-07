export type Status =
  | "Running"
  | "Pending"
  | "Failed"
  | "Succeeded"
  | "Terminated";

export type JobItem = {
  id: string;
  command: string;
  sample: string;
  user: string;
  group: string;
  status: Status;
  date: string;
  completedDate: string;
};
