const shapes = require('./shapes')

describe('shape color',() => {
    test('the setColor should change the fill value',() =>{
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render).toEqual(`<polygon points = "200,10 250,190 160,210" fill = "blue">`);

    });

    test('the setColor should change the fill value',() =>{
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render).toEqual(`circle = "cx = 100, cy = 100, r = 50" fill = "blue"`);

    });

    test('the setColor should change the fill value',() =>{
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render).toEqual(`rectangle = " length = 150, width = 150" fill = "blue"`);

    });
       
});

