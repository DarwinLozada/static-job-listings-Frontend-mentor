import React from "react";
import { Container } from "../styled-components/styled-components";
import styled from "styled-components";

const Paragraph = styled.p`
  color: hsl(180, 8%, 52%);
  font-size: 1rem;
`;

const Point = styled.div`
  border-radius: 50%;
  background-color: hsl(180, 8%, 52%);
  width: 0.25rem;
  height: 0.25rem;
`;

const JobInfo = ({ props }) => {
  return (
    <Container wrap="wrap" gap="0.6rem">
      <Paragraph>{props.timeSincePosted}</Paragraph>
      <Point />
      <Paragraph>{props.jobType}</Paragraph>
      <Point />
      <Paragraph>{props.workModality}</Paragraph>
    </Container>
  );
};

export default JobInfo;
