class Airport{

  constructor(){
    this.capacity = 2;
  };

  docking(){
    this.capacity--;
    return this.capacity;
  }
};

module.exports = Airport;
