import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { JobCard } from "../components/JobCard";
import { JobItem } from "../types";

describe("JobCard", () => {
  test("renders job card", () => {
    const object: JobItem = {
      id: "1",
      command: crypto.randomUUID(),
      sample: crypto.randomUUID(),
      user: crypto.randomUUID(),
      group: crypto.randomUUID(),
      status: "Running",
      date: crypto.randomUUID(),
      completedDate: crypto.randomUUID(),
    };

    // render the component
    render(<JobCard job={object} />);

    // check if the component is initially closed
    const detailsElement = screen.getByTestId("job-card");
    expect(detailsElement).toHaveProperty("open", false);

    // check if the user data is not visible
    const userSpan = screen.getByTestId("user-data");
    expect(userSpan).not.toBeVisible();

    // click on the details element
    fireEvent.click(detailsElement);

    // check if the component is now open and the user data is visible
    expect(detailsElement).toHaveProperty("open", true);
    expect(userSpan).toBeVisible();
  });
});
