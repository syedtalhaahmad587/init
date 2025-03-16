import React, { useState } from "react";
import "./ExcelImport.scss";
import DismissIcon from "../assets/images/Dismiss.png";
import IconCheck from "../assets/images/IconCheck.png";
import UserIcon from "../assets/images/user.png";
import NeedHelpIcon from "../assets/images/needHelp.png";
import ArrowRightIcon from "../assets/images/ArrowRight.png";
import Arrow_white_Import from "../assets/images/Arrow_white_Import.png";
import UpdateIcon from "../assets/images/update.png";
import TableSearch from "../assets/images/TableSearch.png";
import MultiSelectDropdown from "../MultiSelectDropdown/MultiSelectDropdown";
import CustomTabs from "../Tabs/CustomTabs";
import ExpandableTable from "../ExpandableTable/ExpandableTable";
import InsertIcon from "../assets/images/InsertIcon.png";
import ArrowExport from "../assets/images/ArrowExport.png";
import Checkactive from "../assets/images/checkactive.png";
import Checkhover from "../assets/images/checkhover.png";
import { useNavigate } from "react-router-dom";

const ExportExcel = () => {
    const [expandedRow, setExpandedRow] = useState(null);
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  const data = [
    {
      type: "Table",
      name: "Name 2",
      sheet: "Sheet 1",
      workspace: "file_name_1",
      lastUpdate: "14/02/2025, 15:29:31",
    },
    {
      type: "Table",
      name: "Name 3",
      sheet: "Sheet 2",
      workspace: "file_name_2",
      lastUpdate: "13/02/2025, 12:45:00",
    },
  ];
  
  const handleChange = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/SignOutUser");
    }, 2000);
  };

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="excel-import-container">
      {loading ? (
        <div className="main-loading-container" >
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="loading-text">Loading...</p>
        </div>
        </div>
      ) : (
        <>
      {/* Success Message */}
      {/* <div className="success-message">
        <img src={IconCheck} alt="Success" />
        <span className="LoggedSuccessfully" >Logged in successfully</span>
        <img src={DismissIcon} alt="Dismiss" className="dismiss-icon" />
      </div> */}

      {/* User Info */}
      <div className="user-info" onClick={handleChange} >
        <img src={UserIcon} alt="User" className="user-icon" />
        <div className="user-details">
          <p className="user-name m-minus-t">Arlene McCoy</p>
          <p className="user-role">Manage Account</p>
        </div>
        <img src={NeedHelpIcon} alt="Help" className="help-icon" />
      </div>

      {/* Import Excel Content */}
      <div className="import-section">
        <h2>Choose content to export</h2>
        <p>Choose export sources</p>
        {/* <button className="import-btn" onClick={handleChange} >
          <img src={Arrow_white_Import} alt="Import" />
          Import Excel Content
        </button> */}
        <button className="update-btn">
          <img src={TableSearch} alt="Update" />
          Detect Ranges
        </button>
        <p className="last-update">Last update: 14/02/2025, 15:29:31</p>
      </div>

      {/* Select Imported Items */}
     
      <ExpandableTable  className="disabled_image" source="" headingfirst='Export list' />
      <button className="insert-button">
        <img src={ArrowExport} alt="Insert Icon" />
        Export
      </button>
      </>
    )}
    </div>
  );
};

export default ExportExcel;
