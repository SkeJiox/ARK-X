const fs = require('fs')
const fetch = require('node-fetch');

async function readCityNameFromFile() {
    try {
        const cityName = await fs.readFile('input.txt', 'utf8');
        return cityName.trim(); // Trim whitespace
    } catch (error) {
        throw new Error(`Error reading city name from file: ${error.message}`);
    }
}


async function fetchTemperature(cityName) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityName.lat}&longitude=${cityName.lng}&current_weather=true`);
        const data = await response.json();
        return data.current_weather.temperature;
    } catch (error) {
        throw new Error(`Error fetching temperature data for ${cityName}: ${error.message}`);
    }
}

async function deleteExistingFile(cityName) {
    try {
        await fs.unlink(`${cityName}.txt`);
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw new Error(`Error deleting existing file for ${cityName}: ${error.message}`);
        }
    }
}

async function writeTemperatureToFile(cityName, temperature) {
    try {
        await fs.writeFile(`${cityName}.txt`, `Temperature in ${cityName}: ${temperature}°C`);
        console.log(`Temperature for ${cityName} has been written to ${cityName}.txt`);
    } catch (error) {
        throw new Error(`Error writing temperature data to file for ${cityName}: ${error.message}`);
    }
}

async function run() {
    try {
        const cityName = await readCityNameFromFile();
        const temperature = await fetchTemperature(cityName);
        await deleteExistingFile(cityName);

        await writeTemperatureToFile(cityName, temperature);
    } catch (error) {
        console.error(error.message);
    }
}

run();
