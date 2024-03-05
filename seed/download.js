import axios from 'axios';
import {promises as fsPromises} from 'fs';

const fetchAllQuestions = async () => {
    try {
       let response = await axios.get("https://opentdb.com/api.php?amount=50&type=multiple")
       const data = await fsPromises.writeFile("./seed/data.json", JSON.stringify(response.data.results))
       console.log(`Data seeded successfully! Created trivia questions`)
    } catch (error) {
        console.error("An error occurred: ", error)
    }
};

fetchAllQuestions()