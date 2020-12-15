import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import { Container } from "../styled-components/styled-components";

const FilterDiv = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin: 0rem 7rem;
  margin-top: 7.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  box-shadow: 5px 5px 20px 1px #afcccc;
  z-index: 1;
  visibility: ${(props) => props.visible};

  @media (max-width: 814px) {
    margin: 7.5rem 3rem 0rem 3rem;
  }
`;

const ClearAction = styled.div`
  color: hsl(180, 8%, 52%);
  font-weight: 700;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Filter = (props) => {
  const visible = props.tags.length === 0 ? "hidden" : "visible";

  return (
    <>
      <FilterDiv visible={visible}>
        <Container wrap="wrap" gap="1rem">
          {props.tags.map((tag) => {
            return (
              <Tag
                typeTag={"filterTag"}
                key={tag}
                tagName={tag}
                setTagsForFilter={props.setTagsForFilter}
                tags={props.tags}
              />
            );
          })}
        </Container>
        <ClearAction onClick={() => props.setTagsForFilter([])}>
          Clear
        </ClearAction>
      </FilterDiv>
    </>
  );
};

export default Filter;
