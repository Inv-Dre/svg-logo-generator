const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Triangle, Square} = require("./shapes");

inquirer
  .prompt([
    {
      type: "input",
      name: "letters",
      message: "Enter up the three letters for your logo",
      validate: function (input) {
        if (input.length > 3) {
          return "enter 3 characters or less";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "text color",
      message: "Enter the color of the text",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape would you like to use",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "shape color",
      message: "What color would you like your shape to be",
    },
  ])
  .then((answers) => {
    // Process the user's answers here
    console.log("User answers:", answers);

    // Construct the logo object
    const logoInfo = {
      letters: answers.letters,
      textColor: answers["text color"],
      shape: answers.shape,
      shapeColor: answers["shape color"],
    };

    // Create the SVG logo based on the user's answers
    const svgLogo = createLogo(logoInfo);

    // Write the SVG logo to a file
    fs.writeFile("logo.svg", svgLogo, "utf-8", (err) => {
      if (err) {
        console.log("Error writing file:", err);
      } else {
        console.log("Logo created and saved as logo.svg");
      }
    });

    console.log("Logo created and saved as logo.svg");
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

function createLogo(logoInfo) {
  let shapeInstance;

  if (logoInfo.shape === "Triangle") {
    shapeInstance = new Triangle();
    // shapeInstance = new Triangle().setColor(logoInfo.shapeColor);
  } else if (logoInfo.shape === "Circle") {
    shapeInstance = new Circle();
    // shapeInstance = new Circle().setColor(logoInfo.shapeColor);
  } else if (logoInfo.shape === "Square") {
    shapeInstance = new Square();
    // shapeInstance = new Square().setColor(logoInfo.shapeColor);
  } else {
    throw new Error("Invalid shape");
  }
  shapeInstance.setColor(logoInfo.shapeColor);
  const shapeSVG = shapeInstance.render();

  // Construct the complete SVG logo markup
  const logoSVG = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeSVG}
            <text x="150" y="125" font-family="Arial" font-size="70"  text-anchor="middle" fill="${logoInfo.textColor}">${logoInfo.letters}</text>
        </svg>
    `;

  return logoSVG;
}
