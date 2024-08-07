// src/DownloadDoc.js

import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

const DownloadDoc = () => {
  const [jsonData, setJsonData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/try/try/");
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const generateDoc = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun("Here's the data from the backend:"),
                new TextRun({
                  text: JSON.stringify(jsonData, null, 2),
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "document.docx");
    });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {jsonData && <button onClick={generateDoc}>Generate .doc File</button>}
    </div>
  );
};

export default DownloadDoc;
