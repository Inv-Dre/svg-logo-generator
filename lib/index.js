const inquirer = require('inquirer')
const shape = require('./shapes')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'letters',
            message: 'Enter up the three letters for your logo',
            validate: function(input){
                if ( input.length > 3 ){
                    return "enter 3 characters or less"
                }
                 return true;
            
            }

        },
        {
            type: "input",
            name: "text color",
            message: 'Enter the color of the text'
        },
        {
            type:'list',
            name:'shape',
            message:'What shape would you like to use',
            choices: ['Triangle', 'Circle','Square']
        },
        {
            type:'input',
            name:'shape color',
            message: 'What color would you like your shape to be'

        },

    ])
    .then(answers)