import React from "react";
import {
  Container,
  EliminateSquare,
  StyledTag,
} from "../styled-components/styled-components";

const Tag = (props) => {
  const handleClickTag = () => {
    if (props.typeTag === "jobTag" && !props.tags.includes(props.tagName)) {
      props.setTagsForFilter((tags) => {
        return tags.concat([props.tagName]);
      });
    }
  };

  const handleRemoveTag = (tagValue) => {
    const newTags = props.tags.filter((tag) => tag !== tagValue);
    props.setTagsForFilter(newTags);
  };

  let tagText = "";
  if (props.typeTag === "featured") {
    tagText = "FEAUTURED";
  } else if (props.typeTag === "new") {
    tagText = "NEW!";
  } else {
    tagText = props.tagName;
  }

  return (
    <Container borderRadius="20px">
      <StyledTag typeTag={props.typeTag} onClick={handleClickTag}>
        {tagText}
      </StyledTag>
      {props.typeTag === "filterTag" && (
        <EliminateSquare onClick={() => handleRemoveTag(tagText)}>
          <img
            src={require("../images/icon-remove.svg").default}
            alt="icon"
          ></img>
        </EliminateSquare>
      )}
    </Container>
  );
};

export default Tag;
