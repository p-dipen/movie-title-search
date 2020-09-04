import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = styled.form`
  position: relative;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-left: 97px;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 10px 40px 10px 15px;
  color: #c5c5c5;
  &:focus {
    color: #191919;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const SearchIcon = styled.button`
  display: block;
  position: absolute;
  top: 50%;
  right: -79px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 40px;
  font-size: 14px;
  color: #fff;
  padding: 12px;
  background: #0995f8;
`;

const SearchBarInput = ({ submit, value, change }) => {
  return (
    <>
      <SearchBar onSubmit={submit}>
        <SearchInput
          type="text"
          value={value}
          placeholder="Enter movie name"
          onChange={change}
        />
        <SearchIcon type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </SearchIcon>
      </SearchBar>
    </>
  );
};

SearchBarInput.propTypes = {
  submit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default SearchBarInput;
