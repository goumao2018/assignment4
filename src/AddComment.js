import React, { useState }  from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 500px;
  padding: 10px 20px;
  background: #f4f7f8;
  margin: 10px auto;
  padding: 20px;
  background: #f4f7f8;
  border-radius: 8px;
`;

const InputFeild = styled.input`
  border: none;
  font-size: 15px;
  margin-bottom: 10px;
`;

const AddComment = (props) => {
  const [comment, setComment] = useState('');
  const handleChange = e => {
    setComment({
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addComment(comment);
  };

    return (
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <InputFeild
            type="text"
            id="comment"
            name="field1"
            placeholder="Leave your comment..."
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
      </Wrapper>
    );
  };


export default AddComment;
