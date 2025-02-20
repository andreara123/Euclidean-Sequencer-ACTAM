import { useState } from "react";

const SwingSlider = ({ transport, color }) => {
  const [swing, setSwing] = useState(0);
  return (
    <div className="slider-base swing-slider">
      <input
        type="range"
        defaultValue={0}
        min="0"
        max="100"
        id="swingSlider"
        onChange={(e) => {
          transport.swing = parseInt(e.target.valueAsNumber) / 100;
          setSwing(parseInt(e.target.valueAsNumber) / 100);

          console.log(transport.swing);
        }}
        style={{"--c": `${color}`}}
      />
      <label htmlFor="swingSlider">Swing: {swing} </label>
    </div>
  );
};

export default SwingSlider;
