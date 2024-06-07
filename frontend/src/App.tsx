import { useEffect, useState } from "react";
import "./App.css";
import { JobCard } from "./components/JobCard";

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

function App() {
  const [data, setData] = useState<JobItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/jobs");
      const data = (await res.json()) as JobItem[];
      setData(data);
    };

    fetchData();
  }, []);

  const renderJobCard = (job: JobItem) => {
    return <JobCard key={job.id} job={job} />;
  };

  return (
    <div className="main-container">
      <aside>
        <div className="first-row">Jobs Manager</div>
        {data.map(renderJobCard)}
      </aside>
    </div>
  );
}

export default App;
