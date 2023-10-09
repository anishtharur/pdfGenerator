const Header = ({ logo }) => {
  return (
    <div>
      <div className="header">
        <h4>
          <img src={logo} alt="logo" />
        </h4>
        <h3>123 Main Street, Dover, NH 03820-4667</h3>
      </div>
    </div>
  );
};

export default Header;
