
var counter = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var timerValue = 0;
var questionList = [

    {
        question: "Which Region are the Baratheons from?",
        answers: ["The Crownlands","The Westerlands","The Riverlands","The Stormlands"],
        correct: "The Stormlands"
    },
    {
        question: "Which Targaryen First United the Seven Kingdoms?",
        answers: ["Aegon Targaryen","Aerys Targaryen","Aemon Targaryen","Viserys Targaryen"],
        correct: "Aegon Targaryen"
    },
    {
        question: "Who Was Robert's First Hand of the King?",
        answers: ["Tywin Lannister","Ned Stark","Jon Arryn","Brynden Tully"],
        correct: "Jon Arryn"
    },
    {
        question: "Who is Known as The Red Viper?",
        answers: ["Gregor Clegane","Khal Drogo","Thoros of Myr","Oberyn Martell"],
        correct: "Oberyn Martell"
    },
    {
        question: "Who is Known as The Red Viper?",
        answers: ["Gregor Clegane","Khal Drogo","Thoros of Myr","Oberyn Martell"],
        correct: "Oberyn Martell"
    }
]
function timer(){
    if ($("#question").is(":visible")){
        timerValue = setTimeout(function(){
            counter++;
            wrongAnswers++;
            wrongAnswer();
            questionLoad();
            $("#question").hide();
            $("#outOfTime").show();
        }, 4000);
    }
    }
    timer();

$("#continue").on("click",function(){
    if (counter<4){
        wrongAnswer();
    $("#outOfTime").hide();
    $("#question").show();
    timer();
    }
    else {
        wrongAnswer();
        $("#outOfTime").hide();
        $("#scoreSheet").show();
        $("#correctScore").html("<h2>"+correctAnswers)
        $("#wrongScore").html("<h2>"+wrongAnswers) 
    }
} )

function questionLoad() {
$("#questionText").html("<h2>" + questionList[counter].question);
$("#one").text(questionList[counter].answers[0]);
$("#two").text(questionList[counter].answers[1]);
$("#three").text(questionList[counter].answers[2]);
$("#four").text(questionList[counter].answers[3]);
}
questionLoad();

function wrongAnswer() {
    if (counter > 0 ){
    $(".wrongAnswer").html("<h2> That Is Incorrect <br><br><br> The Correct Answer Is:<br><br>" + questionList[counter-1].correct);}
}

$(".buttons").on('click', function(){
    console.log("hey");
    if ($(this).text() == questionList[counter].correct && counter<3) {
        counter++;
        correctAnswers++;
        $("#question").hide();
        $(".rightAnswer").show(0).delay(3000).hide(0);
        $("#question").delay(3000).show(0);
        clearTimeout(timerValue);
        questionLoad();
        wrongAnswer();
        timer();       
         }else if($(this).text() != questionList[counter].correct && counter<3) {
        counter++;
        wrongAnswer();
        wrongAnswers++;
        $("#question").hide();
        $(".wrongAnswer").show(0).delay(3000).hide(0);
        $("#question").delay(3000).show(0);
        clearTimeout(timerValue);
        questionLoad();
        timer();
        
    }
    else if ($(this).text() == questionList[counter].correct) {
        counter++;
        correctAnswers++;
        $("#question").hide();
        $(".rightAnswer").show(0).delay(3000).hide(0);
        $("#scoreSheet").delay(3000).show(0);
        clearTimeout(timerValue);
        
    }
    else if($(this).text() != questionList[counter].correct){
        counter++;
        wrongAnswer();
        wrongAnswers++;
        $("#question").hide();
        $(".wrongAnswer").show(0).delay(3000).hide(0);
        $("#scoreSheet").delay(3000).show(0);
        clearTimeout(timerValue);
         
    }
    $("#correctScore").html("<h2>"+correctAnswers)
$("#wrongScore").html("<h2>"+wrongAnswers)
})

$(".reset").on("click", function() {
    counter = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    questionLoad();
    timer();
    $("#scoreSheet").hide();
    $("#question").show();
})



