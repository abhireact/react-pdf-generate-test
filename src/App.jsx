import React from "react";
import GenericPdfDownloader from "./pdfgenerate";
import { usePDF } from "react-to-pdf";
import Showpage from "./showpage"

export default function App() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <>
      <GenericPdfDownloader
        downloadFileName="CustomPdf"
        rootElementId="testId"
      />

      <div id="testId" ref={targetRef}>
        <Showpage />
      </div>
      <div>
        <button onClick={() => toPDF()}>Download PDF via react-to-pdf</button>
        
      </div>
    </>
  );
}
