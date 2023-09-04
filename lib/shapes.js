class Shape {
   constructor(){
    this.shapecolor = "black"; 
   }
   setColor(color){
      this.shapecolor = color;
   }

   render(){
      ''
   }
   
};

class Circle extends Shape {
  
   render(){
      return `<circle cx="150" cy="98" r="80" fill="${this.shapecolor}"/>`
   }
    
};

class Square extends Shape {
  
   render(){
      return `<rect x="90" y="40" height="135" width="135" fill="${this.shapecolor}"/>`
   }
};

class Triangle extends Shape {

   render(){
     return `<polygon points="150,18 244,182 56,182" fill="${this.shapecolor}"/>`
   }
    
}; 




module.exports = {Circle, Triangle, Square};
