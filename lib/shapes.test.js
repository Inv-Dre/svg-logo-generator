const {Circle, Triangle, Square} = require('./shapes');


describe('shape color',() => {
    test('the setColor should change the fill value',() =>{
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon points="150,18 244,182 56,182" fill="blue"/>`);

    });

    test('the setColor should change the fill value',() =>{
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<circle cx="150" cy="98" r="80" fill="blue"/>`);

    });

    test('the setColor should change the fill value',() =>{
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect x="90" y="40" height="135" width="135" fill="blue"/>`);

    });
       
});

