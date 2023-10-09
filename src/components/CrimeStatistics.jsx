import { useState, useEffect } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import icon from "../assets/location-share.png";
import icon2 from "../assets/Rectangle.png";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import Graph from "./Graph";
import DownloadButton from "./DownloadButton";

const CrimeStatistics = () => {
  const [data, setData] = useState([]);
  const [totalCrimeLineData, setTotalCrimeLineData] = useState([
    {
      id: "totalCrime",
      color: "hsl(69, 70%, 50%)",
      data: [],
    },
  ]);

  const [loader, setLoader] = useState(false);
  const lineColor = "hsl(220, 100%, 51.8%)";

  const downloadPDF = () => {
    const graphWidthMM = 205;
    const graphHeightMM = 110;
    const capture = document.querySelector(".pdf"); // Adjust the selector here
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      doc.addImage(imgData, "PNG", 0, 0, graphWidthMM, graphHeightMM);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };

  useEffect(() => {
    axios
      .get(
        "https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv"
      )
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const updatedData = data.map((item) => ({
        x: item.data_year,
        y: item["Burglary"],
      }));
      setTotalCrimeLineData([
        { id: "totalCrime", color: "hsl(69, 70%, 50%)", data: updatedData },
      ]);
    }
  }, [data]);

  return (
    <div>
      <DownloadButton downloadPDF={downloadPDF} loader={loader} />
      {totalCrimeLineData.length > 0 && (
        <div className="pdf">
          <Header logo={logo} />
          <Title icon={icon} icon2={icon2} />
          <Graph
            lineColor={lineColor}
            totalCrimeLineData={totalCrimeLineData}
          />
          <Footer icon2={icon2} />
        </div>
      )}
    </div>
  );
};

export default CrimeStatistics;
