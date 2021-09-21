import bjorklund from "./Functions/bjorklund";


export default class EuclideanLine {
    constructor(numSteps, numPulses, numRotations, name) {
      this.numSteps = numSteps;
      this.numPulses = numPulses;
      this.numRotations = numRotations;
      this.name = name;
      this.euclideanArray = bjorklund(numSteps, numPulses, numRotations);
    }

    setId(id) {this.id = id}

    

    
}
  



