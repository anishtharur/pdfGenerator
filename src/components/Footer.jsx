const Footer = ({ icon2 }) => {
  return (
    <div>
      <div className="footer">
        <img src={icon2} alt="" width="100%" loading="lazy" />
        <div className="footerText">
          <h4 className="footerTitle">
            Report Genereted on September 26, 2023
          </h4>
          <h4>RealAssist Property Report | Page 1 of 25</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
