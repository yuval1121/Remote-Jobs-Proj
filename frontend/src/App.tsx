import { useEffect, useState } from "react";
import { JobCard } from "./components/JobCard";
import { JobItem } from "./types";
import { host } from "./utils";
import "./App.css";

function App() {
  const [data, setData] = useState<JobItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://${host}:3000/api/jobs`);
      const data: JobItem[] = await res.json();
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
