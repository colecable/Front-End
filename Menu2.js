//I need to instantiate two classes for this project. I'll choose the Engine class and the Menu class

class Engine { //class that holds information about the engines that will be used in functions within the Menu class
    constructor(displacement, layout) {
        this.displacement = displacement;
        this.layout = layout;
    }
    information() {
        return `This is a ${displacement} ${layout} engine.`
    }
}

class Menu {
    constructor() {
        this.engines = [];
    }

    mainMenuQuestions() { //creates the main menu
        const menuSelection = prompt(`
        1)) Create an Engine
        2)) View all Engines
        3)) Delete an Engine
        4)) Update Engines
        `)

        switch(menuSelection) {
            case '1':
                this.addEngine();
                break;
            case '2':
                this.viewEngines();
                break;
            case '3':
                this.deleteEngine();
                break;
            case '4':
                this.updateEngine();
                break;
            default:
                this.mainMenuQuestions();
        }
       }

    deleteEngine() { //Takes number input from the user and deletes a stored array value
        let deleteChoice = prompt("Which engine would you like to delete? Enter the index of the string in the array.");

        this.engines.splice(deleteChoice, 1);

        this.mainMenuQuestions();
    }

    addEngine() { //Take user input for the two parameters of the Engine class. Then, it pushes the new object to the array
        const newEngine = new Engine(
            prompt("What is the displacement of the engine you're adding?"),
            prompt("What is the layout of the engine you're adding?")
        );
        this.engines.push(newEngine);
        this.mainMenuQuestions();
    }

    updateEngine() { //Takes two inputs as variables and uses those variables in a splice call to our array
        let updateChoiceEngine = prompt("What engine would you like to replace?");
        let updateChoiceReplacement = prompt("What engine would you like to replace it with?");

        this.engines.splice(updateChoiceEngine, updateChoiceReplacement);
        this.mainMenuQuestions();
    }

    viewEngines() { //Uses a prompt to show a string literal of the engines array
        let viewPrompt = prompt(`List of engines:
        ${this.engines}
        
        Enter 0 to Exit`);

        switch(viewPrompt) {
            case '0': 
                this.mainMenuQuestions();
            default:
                this.mainMenuQuestions();
        }
    }

}

let menu = new Menu();
menu.mainMenuQuestions()