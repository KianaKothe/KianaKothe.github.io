//creates a quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question:"Kiana is currently completing a PhD in:",
        answers: {
	    a: "Neuroscience",
        b: "Psychology",
        c: "Neuroimmunology",
        d: "Immunology"
        },
        correctAnswer: "c"
    },
    {
        question: "Kiana currently works at which institute:",
        answers: {
        a: "Queensland Health",
        b: "Griffiths University",
        c: "Thompson Institute",
    	d: "Karolinska Institue"
        },
        correctAnswer: "c"
    },
    {
        question: "Kiana's research skills do NOT include:",
        answers: {
            a: "MRI Methodology",
            b: "Cardiovascular Health Assessment",
            c: "Participant Recruitment",
            d: "Quantiative Data Analysis",
        },
        correctAnswer: "b"
    },
    {
        question: "Kiana is super passionate about:",
        answers: {
            a: "Improving diagnostics with novel imaging methods",
            b: "Collaboration and knowledge sharing within the research community",
            c: "Collaboration with the general public",
            d: "All of the above and more!"
        },
        correctAnswer: "d"
    }
];

function buildQuiz() {
    // variable to store the HTML output
    const output = [];
    for(i=0; i<quizQuestions.length; i++){
        // variable to store the list of possible answers
        const answers = [];
        // for each available answer to this question add a html radio button
        for(letter in quizQuestions[i].answers){
            answers.push('<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + quizQuestions[i].answers[letter] 
            + '</label>');
        }
        // add this question and its answers to the output
        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
           );
    }
    // combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var numCorrect = 0;

    // for each question...
    for(i=0; i<quizQuestions.length; i++){
    // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;  
    // if answer is correct
    if(userAnswer===quizQuestions[i].correctAnswer){
    // add to the number of correct answers
    numCorrect++;
    // color the answers green
     answerContainers[i].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
    // color the answers red
    answerContainers[i].style.color = 'red';
    }
    }
    if (numCorrect === 0) { 
    resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";  
    } 
    if (numCorrect ===1) {resultsContainer.innerHTML = "There’s room for improvement there! You only got one correct answer."
    }
    if (numCorrect === 2) {resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that."       
    }
    if (numCorrect === 3) {resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Kiana pretty well!"
    }
    if (numCorrect === 4) {resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Kiana so well"
    }
}

//load Quiz
buildQuiz();

submitButton.onclick = function () {
    showResults();
}