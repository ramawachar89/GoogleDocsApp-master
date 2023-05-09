import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import CommentIcon from "@mui/icons-material/Comment";
import LockIcon from "@mui/icons-material/Lock";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import style from "./Header.module.css";

function Header({setValue,value}) {
  
  function getStyleValue(e){
    setValue(e.target.value)//

  }
  return (
    <>
      <div className={style.main}>
        <div>
          <DescriptionIcon style={{ fontSize: "40px", color: "#4285F4" }} />
        </div>
        <div className={style.innercontainer}>
          <h3>
          <input contentEditable={true} onChange={(e)=>getStyleValue(e)} value={value}
          className={style.input}
         />
          <StarBorderIcon  style={{ fontSize: "17" }}/>
          <ForwardToInboxIcon style={{ fontSize: "17" }}/>
          < CloudOffIcon style={{ fontSize: "17" }}/>

          </h3>
        
          <span className={style.filename}>
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Insert</p>
            <p>Format</p>
            <p>Tools</p>
            <p>Extensions</p>
            <p>Help</p>
          </span>
        </div>

       
      </div>
    </>
  );
}

export default Header;
