import { useRef } from "react";
import { Transport } from "tone";

const PulseSlider = ({ defaultValue, value, max, setNumPulses, color }) => {
  const pulseSliderRef = useRef(null);

  const handleChange = (sliderValue) => {
    setNumPulses(sliderValue);
    Transport.stop();
  };

  return (
    <div className="slider-pattern Pulse-slider">
      <input
        ref={pulseSliderRef}
        required
        type="range"
        min="0"
        defaultValue={defaultValue}
        max={max}
        onKeyDown={() => Transport.stop()}
        onKeyUp={() => Transport.start()}
        onPointerDown={() => Transport.stop()}
        onPointerUp={() => Transport.start()}
        onChange={(e) => handleChange(e.target.valueAsNumber)}
        id="ps"
        style={{"--c": `${color}`}}
      />
      <label htmlFor="ps">Pulses: {value}</label>
    </div>
  );
};

export default PulseSlider;
