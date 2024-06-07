import { SyntheticEvent, useState } from "react";
import "./JobCard.css";

type JobItem = {
  id: string;
  command: string;
  sample: string;
  user: string;
  group: string;
  status: string;
  date: string;
  completedDate: string;
};

type Props = {
  job: JobItem;
};

export const JobCard = ({ job }: Props) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { id, user, group, status, date, command, completedDate, sample } = job;

  const handleClick = (e: SyntheticEvent<HTMLDetailsElement, Event>) => {
    e.preventDefault();

    setIsDetailsOpen((prev) => !prev);
  };

  return (
    <details
      open={isDetailsOpen}
      onClick={handleClick}
      key={id}
      className="job-item"
    >
      <summary>Details</summary>
      <p className="jobs-details">
        <span>{`User: ${user}`}</span>
        <span>{`Group: ${group}`}</span>
        <span>{`Status: ${status}`}</span>
        <span>{`Date: ${new Date(date).toUTCString()}`}</span>
        <span>{`Command: ${command}`}</span>
        <span>
          {`Completed Date: ${new Date(completedDate).toUTCString()}`}
        </span>
        <span>{`Sample: ${sample}`}</span>
      </p>
    </details>
  );
};
