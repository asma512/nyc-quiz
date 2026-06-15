import { Question } from '../types/index';

// Simulating an asynchronous data fetch (Bonus Requirement)
export const fetchNYCQuestions = async (): Promise<Question[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const data: Question[] = [
          {
            id: 1,
            text: "Which borough is physically the largest?",
            options: ["Brooklyn", "Queens", "Staten Island", "The Bronx"],
            correctAnswer: "Queens",
            difficulty: "easy"
          },
          {
            id: 2,
            text: "What year did the five boroughs consolidate into one city?",
            options: ["1888", "1898", "1904", "1912"],
            correctAnswer: "1898",
            difficulty: "hard"
          },
          {
            id: 3,
            text: "Which bridge was the first to connect Manhattan and Brooklyn?",
            options: ["Williamsburg Bridge", "Manhattan Bridge", "Brooklyn Bridge", "Queensboro Bridge"],
            correctAnswer: "Brooklyn Bridge",
            difficulty: "medium"
          },
          {
            id: 4,
            text: "What is currently the tallest building in New York City?",
            options: ["Empire State Building", "Chrysler Building", "One World Trade Center", "Central Park Tower"],
            correctAnswer: "One World Trade Center",
            difficulty: "easy"
          },
          {
            id: 5,
            text: "Which New York City park is the largest by land area?",
            options: ["Central Park", "Prospect Park", "Flushing Meadows-Corona Park", "Pelham Bay Park"],
            correctAnswer: "Pelham Bay Park",
            difficulty: "hard"
          },
          {
            id: 6,
            text: "What is the name of the transit hub famous for the celestial mural painted on its main concourse ceiling?",
            options: ["Penn Station", "Grand Central Terminal", "Port Authority Bus Terminal", "Oculus"],
            correctAnswer: "Grand Central Terminal",
            difficulty: "medium"
          }
        ];
        resolve(data);
      } catch (error) {
        reject(new Error("Failed to load quiz data"));
      }
    }, 800); // Artificial delay to show loading state
  });
};