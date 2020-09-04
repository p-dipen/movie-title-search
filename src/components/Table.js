import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Icon = styled.span`
  display: block;
  text-align: center;
  width: 100%;
  cursor: pointer;
  color: rgba(255, 0, 0, 0.5);
  &:hover {
    color: rgba(255, 0, 0, 1);
  }
`;
const Span = styled.span`
  text-align: center;
  width: 100%;
  cursor: pointer;
  display: block;
  position: relative;
`;
const TD = styled.span`
  text-align: center;
  width: 100%;
  display: block;
  padding: 20px;
`;
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const Table = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.moviesList);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <thead>
        <tr>
          <th>
            <Span
              onClick={() => requestSort("Title")}
              className={getClassNamesFor("Title")}
            >
              Title
            </Span>
          </th>
          <th>
            <Span
              type="button"
              onClick={() => requestSort("Year")}
              className={getClassNamesFor("Year")}
            >
              Year
            </Span>
          </th>
          <th>
            <Span
              type="button"
              onClick={() => requestSort("imdbID")}
              className={getClassNamesFor("imdbID")}
            >
              imdbID
            </Span>
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((item, index) => (
            <tr key={index}>
              <td>{item.Title}</td>
              <td>${item.Year}</td>
              <td>{item.imdbID}</td>
              <td>
                <Icon onClick={() => props.remove(item.imdbID)}>
                  <FontAwesomeIcon icon={faTrash} />
                </Icon>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">
              <TD>No data</TD>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
