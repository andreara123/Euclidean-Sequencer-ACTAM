import EnvironmentContextProvider, { EnvironmentContext } from "../Contexts/EnvironmentContext";
import EuclideanSequencer from "../EuclideanSequencer";

const MiddleEast = () => {
  return (
    <div className="middleEast">
    <h1>Middle East</h1>
      <EnvironmentContextProvider name="middleEast" num={3}>
        <EuclideanSequencer />
      </EnvironmentContextProvider>
    </div>
  );
};

export default MiddleEast;