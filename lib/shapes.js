class Shape {
   constructor(){
    this.shapecolor = "black"; 
   }
   setColor(color){
      this.shapecolor = color;
   }
   
};

class Circle extends Shape {
  
   render(){
      return `circle = "cx = 100, cy = 100, r = 50" fill = "${this.shapecolor}"`
   }
    
};

class Square extends Shape {
  
   render(){
      return `rectangle = " length = 150, width = 150" fill = "${this.shapecolor}"`
   }
};

class Triangle extends Shape {

   render(){
     return `<polygon points = "200,10 250,190 160,210" fill = "${this.shapecolor}">`
   }
    
}; 




module.export = (Circle, Square, Triangle)