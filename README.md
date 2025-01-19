# Quiz App

## Description
This project is a **Quiz Application** built using HTML, CSS, and JavaScript. It provides an interactive interface where users can answer questions on various topics within a time limit and receive a performance rating at the end. The app dynamically retrieves questions from an external JSON file.

---

## Features

### 1. Dynamic Questions Loading
- Questions and answers are loaded dynamically from an external JSON file (`html_questions.json`) using AJAX.

### 2. Quiz Information
- Displays the category of the quiz.
- Shows the total number of questions.

### 3. Answer Options
- Each question has four answer choices rendered as radio buttons.
- The first option is pre-selected by default.

### 4. Navigation and Progress
- Users navigate through questions using the **Submit Answer** button.
- A progress tracker in the form of bullets visually indicates the current question.

### 5. Timer
- Each question has a countdown timer set to 10 seconds.
- If the timer runs out, the app automatically submits the current question and proceeds to the next one.

### 6. Results
- At the end of the quiz, a result screen displays:
  - Total correct answers.
  - A performance rating:
    - **Bad**: Less than 5 correct answers.
    - **Good**: 5-7 correct answers.
    - **Perfect**: 8 or more correct answers.
- Removes the quiz interface upon completion.

### 7. Styling and UX
- Clear and user-friendly layout.
- Styling is managed through an external CSS file (`main.css`).

---

## Code Breakdown

### **Key Components**

1. **HTML Structure**
   - The app structure includes sections for quiz info, question area, answer area, bullets, and results.

2. **JavaScript Functionality**
   - Fetches and parses JSON data.
   - Renders questions and answers dynamically.
   - Tracks and updates the user's progress.
   - Implements a countdown timer.
   - Handles answer submission and calculates results.

3. **CSS Styling**
   - Provides a clean and responsive design.

---

## How to Use

1. Place the `html_questions.json` file in the same directory as the `main.js` script.
2. Open the `index.html` file in a web browser.
3. Answer the questions within the time limit.
4. View your results at the end.

---

## Future Improvements
- Allow users to select a quiz category.
- Add difficulty levels.
- Provide feedback for each question after submission.
- Store results locally or on a server for progress tracking.
- Improve mobile responsiveness.

---

## JSON File Example (`html_questions.json`)
```json
[
  {
    "title": "What does HTML stand for?",
    "answer_1": "Hyper Text Markup Language",
    "answer_2": "High Text Machine Language",
    "answer_3": "Hyperloop Machine Language",
    "answer_4": "Hyperlink and Text Markup Language",
    "right_answer": "Hyper Text Markup Language"
  },
  {
    "title": "Which tag is used to create a hyperlink in HTML?",
    "answer_1": "<a>",
    "answer_2": "<link>",
    "answer_3": "<href>",
    "answer_4": "<hyperlink>",
    "right_answer": "<a>"
  }
]
```

---

## Acknowledgments
This project demonstrates fundamental JavaScript skills such as DOM manipulation, event handling, and working with APIs.


