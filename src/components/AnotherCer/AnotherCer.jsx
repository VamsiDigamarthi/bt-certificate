import React from "react";
import "./AnotherCer.css";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const AnotherCer = () => {
  const location = useLocation();

  const downloadPdf = () => {
    const capture = document.querySelector(".another__card");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      //   const doc = new jsPDF("p", "in", "a4");
      //   const doc = new jsPDF({
      //     orientation: "p",
      //     unit: "in",
      //     format: "a4",
      //   });

      const doc = new jsPDF("landscape", "px", "a4");

      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);

      doc.save("certificate.pdf");
    });
  };
  return (
    <>
      <div className="another__card">
        <img src="images/certificate -2023 2-02.jpg" alt="" />
        <h2>{location.state.name}</h2>
      </div>
      <div className="download__button__card">
        <button onClick={downloadPdf}>Download Certificate</button>
      </div>
    </>
  );
};

export default AnotherCer;
