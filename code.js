const fs = require('fs');

function generateRandomNamesAndSurnames(firstNameArray, lastNameArray, numRecords) {
    const records = [];
    const usedNames = new Set();

    while (records.length < numRecords) {
        const randomFirstName = firstNameArray[Math.floor(Math.random() * firstNameArray.length)];
        const randomLastName = lastNameArray[Math.floor(Math.random() * lastNameArray.length)];
        const fullName = `${randomFirstName} ${randomLastName}`;

        if (!usedNames.has(fullName)) {
            records.push({ Name: randomFirstName, Surname: randomLastName });
            usedNames.add(fullName);
        }
    }

    return records;
}

const firstNames = ["Mujahid", "Alonso", "Amy"];
const lastNames = ["Fisher", "Cupido", "Peterse"];
const numRecordsToGenerate = 9;

const generatedRecords = generateRandomNamesAndSurnames(firstNames, lastNames, numRecordsToGenerate);

const csvContent = generatedRecords.map(record => Object.values(record).join(',')).join('\n');

fs.writeFile('output.csv', csvContent, err => {
    if (err) {
        console.error('Error writing CSV file:', err);
    } else {
        console.log('CSV file created successfully!');
    }
});