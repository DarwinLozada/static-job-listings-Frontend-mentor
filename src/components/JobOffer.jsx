import React from "react";
import JobInfo from "./JobInfo";
import Tag from "./Tag";
import {
  Container,
  SideBar,
  ImageWrapper,
  CompanyName,
  JobDescription,
  JobCard,
  JobTitle,
} from "../styled-components/styled-components";

const JobOffer = ({ job, setTagsForFilter, tags }) => {
  const jobInfo = job.info;
  return (
    <>
      <JobCard>
        <Container>
          {job.featured ? <SideBar /> : null}
          <ImageWrapper>
            <img
              src={window.location.origin + job.companyLogo}
              alt="company-logo"
            ></img>
          </ImageWrapper>
          <JobDescription>
            <Container wrap="wrap">
              <CompanyName>{job.company}</CompanyName>
              {job.newJob ? <Tag typeTag={"new"} /> : null}
              {job.featured ? <Tag typeTag={"featured"} /> : null}
            </Container>
            <JobTitle>{job.jobTitle}</JobTitle>
            <JobInfo
              props={{
                timeSincePosted: jobInfo.timeSincePosted,
                jobType: job.info.jobType,
                workModality: job.info.workModality,
              }}
            />
          </JobDescription>
        </Container>
        <Container
          wrap="wrap"
          padding_responsive="1.4rem 0rem 0rem 0rem"
          margin="0rem 0rem 0rem 1.5rem"
          gap="1.3rem"
          borderTop="1px solid hsl(180, 8%, 52%)"
          isTagsSection={true}
        >
          {job.tags.map((tag) => {
            return (
              <Tag
                key={tag}
                tagName={tag}
                typeTag={"jobTag"}
                setTagsForFilter={setTagsForFilter}
                tags={tags}
              ></Tag>
            );
          })}
        </Container>
      </JobCard>
    </>
  );
};

export default JobOffer;
