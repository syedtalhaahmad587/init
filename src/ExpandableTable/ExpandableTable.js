import React, { useState } from "react";
import "./ExpandableTable.scss";
import updateIcon from "../assets/images/update.png";
import documentSearchIcon from "../assets/images/DocumentSearch.png";
import bottomIcon from "../assets/images/bottomicon.png";
import tableIcon from "../assets/images/Table.png";

const tableData = [
  {
    id: "1",
    type: "Table",
    name: "Name 2",
    sheet: "Sheet 1",
    workspace: "file_name_1",
    lastUpdate: "14/02/2025, 15:29:31",
    expanded: false,
  },
  {
    id: "2",
    type: "Table",
    name: "Name 2",
    sheet: "Sheet 1",
    workspace: "file_name_1",
    lastUpdate: "14/02/2025, 15:29:31",
    expanded: false,
  },
  {
    id: "3",
    type: "Table",
    name: "Name 2",
    sheet: "Sheet 1",
    workspace: "file_name_1",
    lastUpdate: "14/02/2025, 15:29:31",
    expanded: false,
  },
];

const ExpandableTable = ({ source, headingText, headingfirst }) => {
  const [data, setData] = useState(tableData);

  const toggleExpand = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  return (
    <div className="">
      <div className="containerlink">
        <span className="text">{headingfirst}</span>
        <button className="updateButton">
          <img src={source} alt="Update" className="icon" />
          <span className="updateText">{headingText}</span>
        </button>
      </div>

      <div className="header">
        <span className="headerText">Type</span>
        <span className="headerText">Name</span>
        <span className="headerText"></span>
      </div>

      {data.map((item) => (
        <div key={item.id}>
          <div className="row">
            <span className="cell">{item.type}</span>
            <span className="cell">{item.name}</span>
            <div className="iconContainer">
              <button onClick={() => toggleExpand(item.id)}>
                <img src={documentSearchIcon} alt="Expand" className="arrowIcon" />
              </button>
              <button onClick={() => toggleExpand(item.id)}>
                <img
                  src={bottomIcon}
                  alt="Toggle"
                  className={`bottomIcon ${item.expanded ? "arrowRotated" : ""}`}
                />
              </button>
            </div>
          </div>

          {item.expanded && (
            <div className="expandedContainer">
              <img src={tableIcon} alt="Table" className="tableIcon" />
              <p className="infoText"><span>Type:</span> Table (Word-formatted)</p>
              <p className="infoText"><span>Sheet:</span> {item.sheet}</p>
              <p className="infoText"><span>Workspace:</span> {item.workspace}</p>
              <p className="infoText"><span>Name:</span> {item.name}</p>
              <p className="infoText"><span>Last Update:</span> {item.lastUpdate}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandableTable;
