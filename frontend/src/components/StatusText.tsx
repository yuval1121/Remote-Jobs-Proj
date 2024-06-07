import { Status } from "../types";

type Props = {
  status: Status;
};

export const StatusText = ({ status }: Props) => {
  const getStatusColor = () => {
    switch (status) {
      case "Running":
        return "yellowgreen";
      case "Pending":
        return "blue";
      case "Succeeded":
        return "green";
      case "Failed":
      case "Terminated":
        return "red";
      default:
        return;
    }
  };

  const renderStatusText = () => {
    return <span style={{ color: getStatusColor() }}>{status}</span>;
  };

  return <span>Status: {renderStatusText()}</span>;
};
