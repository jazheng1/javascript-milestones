let personData = {};

// I am treating the objects like a dictionary
personData.firstName = 'Jean-Luc';
personData.lastName = 'Picard';
personData.age = 79;

console.log("The person's data is:", personData);

personData.firstName = 'Curious';
personData.lastName = 'George';
personData.age = 10;

console.log('Notice how the keys from the previous example is replaced:', personData)
