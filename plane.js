
class Plane {

  constructor(){
    this.location = "somewhere";
  };

  takeOff(){
    this.location = "in air";
    return this.location;
  }

  getLocation(){
    return this.location;
  }

};

module.exports = Plane;