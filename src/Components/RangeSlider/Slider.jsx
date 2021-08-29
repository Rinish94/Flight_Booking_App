import React from "react";

const Slider = ({rangeval,setRangeval}) => {
  // const [rangeval, setRangeval] = React.useState(null);
// console.log(rangeval)


  return (
    <div>
     
      <input
        type="range"
        className="custom-range"
        min="3000"
        max="8000"
        onChange={(event) => setRangeval(event.target.value)}
      />
    </div>
  );
};

export default Slider;
