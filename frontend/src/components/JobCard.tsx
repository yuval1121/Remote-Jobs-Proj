import { SyntheticEvent, useState } from "react";
import "./JobCard.css";
import { StatusText } from "./StatusText";
import { JobItem } from "../types";

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
      data-testid="job-card"
    >
      <summary> {command} </summary>
      <p className="jobs-details">
        <span data-testid="user-data">{`User: ${user}`}</span>
        <span>{`Group: ${group}`}</span>
        <StatusText status={status} />
        <span>{`Date Started: ${new Date(date).toUTCString()}`}</span>
        <span>
          {`Completed Date: ${new Date(completedDate).toUTCString()}`}
        </span>
        <span>{`Sample: ${sample}`}</span>
      </p>
    </details>
  );
};
