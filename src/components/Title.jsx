const Title = ({ icon, icon2 }) => {
  return (
    <div>
      <div className="title">
        <img src={icon} alt="" loading="lazy" width="25rem" height="25rem" />
        <h4>Crime</h4>
        <img src={icon2} alt="" width="94%" loading="lazy" />
      </div>
      <div className="name">
        <h5>Burglary</h5>
      </div>
    </div>
  );
};

export default Title;
