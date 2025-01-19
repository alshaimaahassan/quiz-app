//select elements
let countSpan = document.querySelector(".count span");
let bullets = document.querySelector(".bullets");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");

let currentIndex = 0
let rightAnswer = 0
let theBullets = []; // Global array to store the bullets
let theQuestionObject =[]
let countdownInterval
let num
function getQuestions() {
  let myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questionsObject = JSON.parse(this.responseText);
      theQuestionObject.push(questionsObject)
      let questionCount = questionsObject.length
      num = questionCount
      console.log(questionsObject);
      //create bullets +set questions count
      
        createBullets(questionCount)
        //
        addQuestionData(questionsObject[currentIndex], questionCount)

        countDown(10,questionCount)

      //handle submit
      submitButton.addEventListener("click", handelSubmit)
      function handelSubmit() {
        let theRightAnswer = questionsObject[currentIndex].right_answer;

        let selectedRadio = document.querySelector('input[name="question"]:checked').dataset.answer;
        if (selectedRadio === theRightAnswer) {
          rightAnswer++
          console.log("Correct");
        } else {
          console.log("Wrong");
        }
        currentIndex++
        quizArea.innerHTML = ""
        answersArea.innerHTML = ""
        addQuestionData(questionsObject[currentIndex], questionCount)
        console.log(questionsObject[currentIndex])
        //bullets

        handelBullet()
//
clearInterval(countdownInterval)
countDown(10,questionCount)

        //results
        showResult(questionCount)

      
      }

    }

  }
  myRequest.open("GET", "html_questions.json", true);
  myRequest.send();
}
getQuestions()

function createBullets(num) {

  countSpan.innerHTML = num
  for (let i = 0; i <= num; ++i) {

    let theBullet = document.createElement("span")
    theBullets.push(theBullet);

    bulletsSpanContainer.appendChild(theBullet)
    if (i === 0) {
      theBullet.classList.add("on")
    }
  }
  console.log(theBullets)

}

handelBullet = () => {
  let theBullet = theBullets[currentIndex];
  theBullet.classList.add("on");
}

function addQuestionData(obj, count) {
  if (currentIndex < count) {

    let questionTitle = document.createElement("h2");


    let questionText = document.createTextNode(obj["title"]);


    questionTitle.appendChild(questionText);


    quizArea.appendChild(questionTitle);

    // Create The Answers
    for (let i = 1; i <= 4; i++) {
      let mainDiv = document.createElement("div");
      mainDiv.className = "answer";
      let radioInput = document.createElement("input");
      radioInput.name = "question";
      radioInput.type = "radio";
      radioInput.id = `answer_${i}`;
      radioInput.dataset.answer = obj[`answer_${i}`];

      // Make First Option Selected
      if (i === 1) {
        radioInput.checked = true;
      }

      let theLabel = document.createElement("label");
      theLabel.htmlFor = `answer_${i}`;
      let theLabelText = document.createTextNode(obj[`answer_${i}`]);
      theLabel.appendChild(theLabelText);
      mainDiv.appendChild(radioInput);
      mainDiv.appendChild(theLabel);
      answersArea.appendChild(mainDiv);
    }
  }
}


let showResult =(count)=>{
  let theResult;
  let rating;
  if (currentIndex === count) {
    quizArea.remove()
    answersArea.remove()
    bullets.remove()
    console.log(rightAnswer)
    console.log(rating)
    if(rightAnswer < 5){
      rating ="bad"
    }else if(rightAnswer < 8){
      rating = "good"
    }else {rating ="perfect"}
    let resultText =`<h2 class ="result"><span class="${rating} ">${rating} </span>You Answered ${rightAnswer} from 10</h2>`;
    resultsContainer.innerHTML = resultText;
    
    countdownElement.style.display = "none";
    submitButton.style.display = "none";
    console.log("Finished")
  }
}

let countDown =(duration ,count)=>{
  if (currentIndex < count) {

  let seconds, minutes 
  countdownInterval = setInterval(()=>{
    minutes = parseInt(duration /60)
    seconds = parseInt(duration % 60)
    minutes = minutes <10? `0:${minutes}` : minutes
    seconds = seconds <10? `0:${seconds}` : seconds
    countdownElement.innerHTML = `${minutes} : ${seconds}`
    if(--duration < 0){
     // currentIndex ++
      clearInterval(countdownInterval)
      // quizArea.innerHTML = ""
      // answersArea.innerHTML = ""
      // addQuestionData(theQuestionObject[0][currentIndex], num)
      // console.log(theQuestionObject[0])
      // console.log(num)
      submitButton.click()

    }

},1000)}

}