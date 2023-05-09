import React, { useState ,useRef, useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import style from "./Home.module.css";
import DownloadIcon from '@mui/icons-material/Download';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Header from "../Header/Header";

function Home() {
const[value,setValue]=useState('Untitled Document')
const[color,setcolor]=useState('')
// const[Bgcolor,setBgcolor]=useState('red')
const printDiv = useRef("");

// useEffect(()=>{
//   if(color=='some'){
//     setBgcolor('green')
        
//    }
// },[Bgcolor])



// const sheetContent = document.getElementById('edit');
//    if(sheetContent === 'some'){
//     document.execCommand("foreColor", "", e.target.value);
//    }

  function handleremoveFormat(color) {
    document.execCommand("removeFormat");
  }


    async function downloadFile() {
      const sheetContent = document.getElementById('edit');
      const canvas = await html2canvas(sheetContent, { dpi: 300 });
      const imageData = canvas.toDataURL("image/png", 1.0);
      const pdfDoc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: false,
      });
      pdfDoc.addImage(imageData, "PNG", 0, 30, 210, 297, "", "FAST");
      pdfDoc.save(`${value}.pdf`);
  }
  
  
  return (
    <>
    
    <div className={style.main}>
      <Header 
      setValue={setValue}
      value={value}
      />
      <Navbar
        handleremoveFormat={handleremoveFormat}
        downloadFile={downloadFile}
        printDiv={printDiv}
      />

      <div className={style.box} ref={printDiv}>
        <p  id="edit" className={style.txt} contentEditable={true}
      
        ></p>
    
      </div>

    <button onClick={ downloadFile}  className={style.floaticon}><DownloadIcon style={{fontSize:"35px",color:"white"}}/></button>
    </div>
    {/* <div><input type='text' onChange={(e)=>setcolor(e.target.value)} 
    style={{color:`${Bgcolor}`}} value={color}/></div> */}

    </>
  );
}

export default Home;
