// Constructor for creating dog objects.
function Dog(name, breed, tvProgram, notes, mySound, canTalk) {
    // Properties of the dog object.
    this.name = name;
    this.breed = breed;
    this.tvProgram = tvProgram;
    this.notes = notes;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display a greeting message about the dog.
    this.myGreeting = function () {
        document.write("Hello, my name is " + this.name + "! ");
        document.write(this.mySound);

        // Display whether the dog can talk.
        if (this.canTalk) {
            document.write(" I can talk!");
        } else {
            document.write(" I cannot talk!");
        }

        document.write(" I starred in the TV show " + this.tvProgram + ".");
        document.write(" My character was a " + this.breed + ". ");
        document.write(this.notes + "<br><br>");

    }

    // Displays the property's name and it's corresponding value.
    this.displayProperties = function () {
        // Use a for in loop to display each property and value.
        for (let key in this) {
            document.write(key + ": ");
            document.write(this[key] + "<br>");
        }
    }
    // End of Constructor.
}


// Creating dog objects using the Dog constructor.
const scoobyDoo = new Dog(
    "Scooby-Doo",
    "Great Dane",
    "Scooby-Doo Where Are You",
    "Lifelong companion of Shaggy Rogers; about a big dog and several teenage humans. (See Scooby-Doo.)",
    "I'll do anything for a Scooby Snack!",
    true
);
const hotDog = new Dog(
    "Hot Dog",
    "Old English Sheepdog",
    "The Archie Show",
    "An animated TV series based upon the comic book, 1968-1989.",
    "Bark, bark, bark!",
    false
);


// Prompt the user to select one of the dogs by typing in one of the dog’s names.
const selectedDog = prompt("Select a dog by typing in its name. Scooby-Doo, Hot Dog:");


// Used to determine if the user input a valid name for a dog.
if (selectedDog === scoobyDoo.name){
    document.write("You selected "+ selectedDog + ".<br>");
    scoobyDoo.myGreeting();
    scoobyDoo.displayProperties();
}
else if (selectedDog === hotDog.name){
    document.write("You selected "+ selectedDog + ".<br>");
    hotDog.myGreeting();
    hotDog.displayProperties();
}
 else {
    document.write("Error: The selected dog was not found!");
}
