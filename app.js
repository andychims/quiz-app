
$(document).ready(function(){

//Each question should be stored as a JavaScript object, 
//and you’ll probably want to store your list of questions in an array.


	var choice;
	points = 0;
	questionCounter = 1;


	//on clicking a .answers li, update addClass selected
	$(".answers").on('click', 'li', function() {
		$("li").removeClass("selected");
		$(this).addClass("selected");
		choice = $(this).attr("class");
		choice = choice.charAt(16);
		++choice;
	});




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
			for(var i = 0; i <= this.num; i++) {
				$(".answers ul").append("<li class='question" + this.num + " answer" + i + "'>" + this.answers[i] + "</li>");	
			};
		}
		this.listAnswers();
	};




	// for (questionCounter = 1; questionCounter < 3; questionCounter++) { };
	var questions = 
		{
		 number: 1,
		 question: "this is a question 1",
		 correctAnswer: 2
		 answers: [
		 	{
		 		number: 1,
		 		answer: "q1answer1"
		 	}
		 	{
		 		number: 2,
		 		answer: "q1answer2"
		 	}
		 	{
		 		number: 3,
		 		answer: "q1answer3"
		 	}		 	
		 ]
		}
		{
		 number: 2,
		 question: "this is a question 2",
		 correctAnswer: 1
		 answers: [
		 	{
		 		number: 1,
		 		answer: "q2answer1"
		 	}
		 	{
		 		number: 2,
		 		answer: "q2answer2"
		 	}
		 	{
		 		number: 3,
		 		answer: "q2answer3"
		 	}		 	
		 ]
		}		

		// question2 = new question("this is a qusetion #2", 3, 1, 1);
		// question3 = new question("this is a qusetion #3", 3, 1, 0, ["3answer1", "3answer2", "3b"]);
		
		// question2Answers = ["answer1asdf", "answer2asdf", "basdf"];
		// question3Answers = ["555", "444", "333"];



	//submit users answer
	$(".submit").on('click', function() {
		
		if (choice == undefined) {
			$(".errorMessage").show("slow", function() {
			$(this).delay(1000).hide("slow");
			});
		}
		else if (choice === question1.correctChoice) {
			points += 10;
			$("p.points > span").text(points);
			$(".correctMessage").show("slow", function() {
			$(this).delay(1000).hide("slow");
			questionCounter++;
			$(".questionNum").text(questionCounter);
			});
		}
		else if (choice != question1.correctChoice) {
			$(".incorrectMessage").show("slow", function() {
			$(this).delay(1000).hide("slow");
			});
		};

	});






//on finishing show .finished (when questionCounter = 3)



});
