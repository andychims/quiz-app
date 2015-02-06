
$(document).ready(function(){

//Each question should be stored as a JavaScript object, 
//and you’ll probably want to store your list of questions in an array.


	points = 0;
	questionCounter = 0;
	currentQuestionNumber = 0;
	var choice;


	questions = [
		{
		 number: 1,
		 question: "1+1 =",
		 correctAnswer: 2,
		 answers: [
		 	{
		 		number: 1,
		 		answer: "1"
		 	},
		 	{
		 		number: 2,
		 		answer: "2"
		 	},
		 	{
		 		number: 3,
		 		answer: "10"
		 	}		 	
		 ]
		},

		{
		 number: 2,
		 question: "5*2=",
		 correctAnswer: 3,
		 answers: [
		 	{
		 		number: 1,
		 		answer: "213"
		 	},
		 	{
		 		number: 2,
		 		answer: "1234"
		 	},
		 	{
		 		number: 3,
		 		answer: "10"
		 	}		 	
		 ]
		},
		{
		 number: 3,
		 question: "you are",
		 correctAnswer: 1,
		 answers: [
		 	{
		 		number: 1,
		 		answer: "awesome"
		 	},
		 	{
		 		number: 2,
		 		answer: "shitty"
		 	},
		 	{
		 		number: 3,
		 		answer: "boring"
		 	}		 	
		 ]
		},
		{
		 number: 4,
		 question: "the year is",
		 correctAnswer: 4,
		 answers: [
		 	{
		 		number: 1,
		 		answer: "2012"
		 	},
		 	{
		 		number: 2,
		 		answer: "2013"
		 	},
		 	{
		 		number: 3,
		 		answer: "2014"
		 	},
		 	{
		 		number: 4,
		 		answer: "2015"
		 	}		 			 
		 ]
		}								
	];


	$(".totalQuestions").text(questions.length);


	//on clicking .answers li, update class and set choice var
	$(".answers").on('click', 'li', function() {
		$("li").removeClass("selected");
		$(this).addClass("selected");
		choice = $(this).attr("class");
		choice = choice.charAt(16);
		++choice;
	});



	//function to display the question and answers on the UI
	function question(copy, answerCount, num, correctChoice, answers) {
		this.copy = copy;
		this.answerCount = answerCount;
		this.num = num;
		this.correctChoice = correctChoice;
		this.answers = answers;
		this.listAnswers = function() {
			//update question
			$(".question p").text("");
			$(".question p").append(this.num + ": " + this.copy);
			//clear previous answers
			$("li").remove();
			for(var i = 0; i < this.answerCount; i++) {
				$(".answers ul").append("<li class='question" + this.num + " answer" + i + "'>" + questions[questionCounter].answers[i].answer + "</li>");	
			};
		}
		this.listAnswers();
	};


	//function to proceed to next question
	function nextQuestion() {
		if (questionCounter < questions.length) {
		//create a new question object
		questions[questionCounter].question,
		questions[questionCounter].answers.length,
		questions[questionCounter].number,
		questions[questionCounter].correctAnswer
		);
		questionCounter++;
		//update the question counter on footer
		$(".questionNum").text(questionCounter);
			//increment the question counter
			questionCounter++;
			$(".questionNum").text(questionCounter);
		}
		//when there are no more questions show finished screen
		else {
			$(".finished").delay(800).show(400, function() {
				$(".question, .answers, footer").hide();
			});
		};
	};

	//initialize the first question
	nextQuestion();

	//submit users answer
	$(".submit").on('click', function() {
		
		if (choice == undefined) {
			$(".errorMessage").show("slow", function() {
				$(this).delay(1000).hide("slow");
			});
		}
		else if (choice === currentQuestion.correctChoice) {
			points += 10;
			$(".points").text(points);
			$(".correctMessage").show("slow", function() {
				$(this).delay(1000).hide(900);
				nextQuestion();
			});


		}
		else if (choice != currentQuestion.correctChoice) {
			$(".incorrectMessage").show("slow", function() {
				$(this).delay(1000).hide(900);
				nextQuestion();
			});
		};

	});






});
