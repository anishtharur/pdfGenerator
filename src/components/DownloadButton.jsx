import React from "react";

const DownloadButton = ({ downloadPDF, loader }) => {
  return (
    <div>
      <div className="receipt-actions-div">
        <div className="actions-right">
          <button
            className="receipt-modal-download-button"
            onClick={downloadPDF}
            disabled={!(loader === false)}
          >
            {loader ? <span>Printing</span> : <span>Print</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadButton;
