import React, { useState, useEffect } from "react";
import JobOffer from "./JobOffer";
import jobs from "../jobs";
import Filter from "./Filter";
import styled from "styled-components";

const JobsContainer = styled.div`
  background-color: hsl(180, 52%, 96%);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 3rem 0rem 0rem 0rem;
`;
const Jobs = () => {
  const [tagsForFilter, setTagsForFilter] = useState([]);
  const [jobsToShow, setJobsToShow] = useState(jobs);

  useEffect(() => {
    if (tagsForFilter.length === 0) {
      setJobsToShow(jobs);
    } else {
      const newJobs = jobs.filter((job) =>
        tagsForFilter.every((tag) => job.tags.includes(tag))
      );
      setJobsToShow(newJobs);
    }
  }, [tagsForFilter]);

  return (
    <>
      <Filter tags={tagsForFilter} setTagsForFilter={setTagsForFilter} />
      <JobsContainer>
        {jobsToShow.map((job) => {
          return (
            <JobOffer
              key={`${job.company} ${job.jobTitle}`}
              job={job}
              setTagsForFilter={setTagsForFilter}
              tags={tagsForFilter}
            />
          );
        })}
      </JobsContainer>
    </>
  );
};

export default Jobs;
