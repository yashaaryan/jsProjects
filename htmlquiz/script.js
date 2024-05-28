
const startButton= document.getElementById('start-btn')
const nextButton= document.getElementById('next-btn')

const questionContainerElement= document.getElementById('question-container') 
const questionElement= document.getElementById('question')
const answerButtonElement=document.getElementById('answer-button')

let shuffedQuestions,currentQuestionsIndex;

let quizScore=0;

startButton.addEventListener('click',startGame)

nextButton.addEventListener('click',()=>{
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionsIndex=0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    quizScore=0
}

function setNextQuestion()
    {

        resetState();
        showQuestion(shuffledQuestions[currentQuestionsIndex])
    }


    function showQuestion(question) {

        questionElement.innerText = question.question;
        question.answers.forEach((answer) => { 
            const button = document.createElement('button');
            button.innerText = answer.text;
            console.log(answer.text);
            button.classList.add('btn');
            if (answer.correct) { 
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonElement.appendChild(button);
        });
    }


function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const slectedButton=e.target
    const correct= slectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffledQuestions.length>currentQuestionsIndex+1){
        console.log('aaaa')
        nextButton.classList.remove("hide")
    }
    else{
        startButton.innerText="restart"
        startButton.classList.remove('hide')
    }
    if(selectedButton.dataset=correct){
        quizScore++
    }
    document.getElementById('right-answers').innerText=quizScore
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}


function clearStatusClass(element){
    element.classList.remove('corrrect')
    element.classList.remove('wrong')
}

const questions=[
    {
        question:'which one of these is a js framework',
        answers : [
            {text:'python',correct:false},
            {text:'jango',correct:false},
            {text:'react',correct:true},
            {text:'java',correct:false}
        ]
    },
    {
        question:'which one of these is a js framework',
        answers : [
            {text:'python',correct:false},
            {text:'node',correct:true},
            {text:'xyz',correct:false},
            {text:'java',correct:false}
        ]
    },
    {
        question:'what is 10+10?',
        answers : [
            {text:'5',correct:false},
            {text:'20',correct:true},
            {text:'1',correct:false},
            {text:'22',correct:false}
        ]
    },
]


