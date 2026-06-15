import { Question } from '../types';

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
          }
        ];
        resolve(data);
      } catch (error) {
        reject(new Error("Failed to load quiz data"));
      }
    }, 800); // Artificial delay to show loading state
  });
};