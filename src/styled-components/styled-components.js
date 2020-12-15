import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap};

  @media (max-width: 814px) {
    border-top: ${(props) => props.borderTop};
    padding: ${(props) => props.padding_responsive};
    ${(props) => (props.isTagsSection ? "margin: 0" : "")}
  }
`;

const SideBar = styled.div`
  position: absolute;
  background-color: hsl(180, 29%, 50%);
  left: 0;
  top: 0;
  width: 5px;
  height: 100%;
  border-radius: 5px 0px 0px 5px;
`;

const ImageWrapper = styled.div`
  margin-right: 1.5rem;
  @media (max-width: 814px) {
    position: absolute;
    top: -30px;
    overflow: hidden;

    img {
      width: 3.5rem;
    }
  }
`;

const CompanyName = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0;
  color: hsl(180, 29%, 50%);
`;

const JobDescription = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 814px) {
    margin-bottom: 1.4rem;
  }
`;

const JobCard = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  background-color: white;
  margin: 0.8rem 7rem;
  padding: 1.4rem 1.4rem 1.4rem 2rem;
  box-shadow: 5px 5px 20px 1px #afcccc;
  border-radius: 5px;

  @media (max-width: 814px) {
    margin: 0.8rem 2rem;
    margin-bottom: 2rem;
    flex-direction: column;
    padding-top: 2rem;
  }
`;

const JobTitle = styled.h2`
  color: hsl(180, 14%, 20%);
  margin: 0.7rem 0rem;
  font-size: 1.3rem;

  &:hover {
    color: hsl(180, 29%, 50%);
    cursor: pointer;
  }
`;

const EliminateSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(180, 29%, 50%);
  width: 2rem;
  height: 2.2rem;
  border-radius: 0px 5px 5px 0px;
  transition: 0.1s ease;

  &:hover {
    background-color: hsl(180, 14%, 20%);
    cursor: pointer;
  }
`;

const StyledTag = styled.div`
  background-color: hsl(180, 52%, 96%);
  color: hsl(180, 29%, 50%);
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: 700;

  ${(props) =>
    props.typeTag === "jobTag" &&
    `
    transition: 0.1s ease;

  &: hover {
    color: hsl(180, 52%, 96%);
    background-color: hsl(180, 29%, 50%);
    cursor: pointer;
  }`}

  ${(props) =>
    props.typeTag === "featured" &&
    `
    padding: 0.5rem 0.6rem 0.3rem 0.6rem;
    margin: 0.3rem 0.5rem;
    font-size: 0.7rem;
    color: white;
    background-color: hsl(180, 14%, 20%);
    border-radius: 30px;
  `}

    ${(props) =>
    props.typeTag === "new" &&
    `
      padding: 0.4rem 0.6rem 0.3rem 0.6rem;
      margin: 0rem 0rem 0rem 1.2rem;  
      color: white;
      font-size: 0.7rem;
      background-color: hsl(180, 29%, 50%);
      border-radius: 15px;
    `}

    ${(props) =>
    props.typeTag === "filterTag" &&
    `
      height: 2.2rem;
      border-radius: 5px 0px 0px 5px;
    `}
`;
export {
  Container,
  SideBar,
  ImageWrapper,
  CompanyName,
  JobDescription,
  JobCard,
  JobTitle,
  EliminateSquare,
  StyledTag,
};
