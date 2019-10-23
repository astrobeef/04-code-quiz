//----------HTML REFERENCES----------//
//-----------------------------------//

//----------INSTANTIATED HTML VARIABLES----------//
//-----------------------------------------------//



//----------VARIABLES----------//
//-----------------------------//

var Question_Current = 0;

var HTML =
{
    topLeft: {
        mDiv: $("#top-left"),
        main: {
            mText: $("<u>").text("Highscores"),
            mClasses: "p-2",
            mID: "run-HS"
        },
        testing: {
            mText: $("<span>").text("Current Score : "),
            mClasses: "p-2",
            mID: "cur-score"
        },
        finished: {
            mText: $("<u>").text("Highscores"),
            mClasses: "p-2",
            mID: "run-HS"
        },
        highscores:
        {
            mText: $("<u>").text("Return to main"),
            mClasses: "p-2",
            mID: "run-main"
        }

    },

    topRight: {
        mDiv: $("#top-right"),
        main: {
            mText: $("<h6>").text("")
        },
        testing: {
            mText: $("<h6>").text("Time left : "),
            mID: "timer"
        },
        finished: {
            mText: $("<h6>").text("Time Left over : "),
            mID: "timer"
        },
        highscores:
        {
            mText: $("<h6>").text("")
        }
    },

    prompt: {
        mDiv: $("#prompt"),
        main: {
            mText: $("<h3>").text("Code Quiz"),
            mClasses: "mx-auto"
        },
        testing: {
            mText: [
                $("<h6>").text("Q1"),
                $("<h6>").text("Q2"),
                $("<h6>").text("Q3")
            ],
            mClasses: "ml-3"
        },
        finished: {
            mText: $("<h3>").text("Quiz Complete!"),
            mClasses: "mx-auto"
        },
        highscores: {
            mText: $("<h3>").text("Highscores"),
            mClasses: "mx-auto"
        }
    },

    buttonList: {
        mDiv: $("#button-list"),
        main: {
            mText: $("<button>").text("Start Quiz"),
            mClasses: "btn btn-primary mx-auto py-auto",
            mID: "start-btn"
        },
        testing: {
            mText: [
                $("<button>").text("B1"),
                $("<button>").text("B2"),
                $("<button>").text("B3"),
                $("<button>").text("B4")
            ],
            mClasses: "btn btn-primary my-2 col",
            mID: "btn",
            mAnswerSets:[
                ["B1 : blah, blah", "B2 : blah, blah", "B3 : blah, blah", "B4 : blah, blah"],
                ["B1-1 : blah, blah", "B2-1 : blah, blah", "B3-1 : blah, blah", "B4-1 : blah, blah"],
                ["B1-2 : blah, blah", "B2-2 : blah, blah", "B3-2 : blah, blah", "B4-2 : blah, blah"],
                ["B1-3 : blah, blah", "B2-3 : blah, blah", "B3-3 : blah, blah", "B4-3 : blah, blah"]
            ],

            mAnswerSets_Correct:[
                1,
                2,
                3,
                4
            ]
        }
    }
};

//----------FUNCTIONS----------//
//-----------------------------//

//Set up the elements of the 'main' display.
function SetMainElements() {
    console.log("Setting up main elements...");
    HTML.topLeft.mDiv.empty();
    HTML.topRight.mDiv.empty();
    HTML.prompt.mDiv.empty();
    HTML.buttonList.mDiv.empty();


    var $iTopLeft = ModifyText(HTML.topLeft.main);
    HTML.topLeft.mDiv.append($iTopLeft);

    var $iTopRight = ModifyText(HTML.topRight.main);
    HTML.topRight.mDiv.append($iTopRight);

    var $iPrompt = ModifyText(HTML.prompt.main);
    HTML.prompt.mDiv.append($iPrompt);

    var $ibuttonList = ModifyText(HTML.buttonList.main);
    HTML.buttonList.mDiv.append($ibuttonList);
}

//Sets up the elements of the 'testing' display.
function SetTestingElements() {
    console.log("Setting up testing elements...");
    HTML.topLeft.mDiv.empty();
    HTML.topRight.mDiv.empty();
    HTML.prompt.mDiv.empty();
    HTML.buttonList.mDiv.empty();

    var $iTopLeft = ModifyText(HTML.topLeft.testing);
    HTML.topLeft.mDiv.append($iTopLeft);

    var $iTopRight = ModifyText(HTML.topRight.testing);
    HTML.topRight.mDiv.append($iTopRight);

    var $iPrompt = ModifyText(HTML.prompt.testing, 0);
    HTML.prompt.mDiv.append($iPrompt);

    for (var i = 0; i < HTML.buttonList.testing.mText.length; i++) {
        var $iButton = ModifyText(HTML.buttonList.testing, i);
        HTML.buttonList.mDiv.append($iButton);
    }

    RunQuiz(0);
}

//Sets up the elements of the 'finished' display.
function SetFinishedElements() {
    console.log("Setting up Finished elements...");
    HTML.topLeft.mDiv.empty();
    HTML.topRight.mDiv.empty();
    HTML.prompt.mDiv.empty();

    var $iTopLeft = ModifyText(HTML.topLeft.finished);
    HTML.topLeft.mDiv.append($iTopLeft);

    var $iTopRight = ModifyText(HTML.topRight.finished);
    HTML.topRight.mDiv.append($iTopRight);

    var $iPrompt = ModifyText(HTML.prompt.finished);
    HTML.prompt.mDiv.append($iPrompt);
}

//Sets up the elements of the 'Highscores' display.
function SetHSElements() {
    console.log("Setting up Highscore elements...");
    HTML.topLeft.mDiv.empty();

    var $iTopLeft = ModifyText(HTML.topLeft.highscores);
    HTML.topLeft.mDiv.append($iTopLeft);

    var $iTopRight = ModifyText(HTML.topRight.highscores);
    HTML.topRight.mDiv.append($iTopRight);
}

//Sets up the text to be appended to its Div.
function ModifyText(pPrefix, pIndex) {
    var $iDiv;

    if (!isNaN(pIndex)) {
        console.log("is a number");
        $iDiv = pPrefix.mText[pIndex];
    }
    else {
        $iDiv = pPrefix.mText;
    }

    $iDiv.attr("id", pPrefix.mID);
    $iDiv.attr("class", pPrefix.mClasses);

    return $iDiv;
}

//Iterates through each question of the quiz, channging the prompt and the answers.  Stops when it reaches the length of the questions available.
function RunQuiz(pIndex) {
    HTML.prompt.mDiv.empty();

    if (pIndex < HTML.prompt.testing.mText.length) {
        var $iQuestion = ModifyText(HTML.prompt.testing, pIndex);
        HTML.prompt.mDiv.append($iQuestion);
        Question_Current++;

        AssignCurrentRightAnswer(pIndex);
    }
    else {
        console.log("Quiz over");
        SetFinishedElements();
        Question_Current = 0;
    }
}

//Assigns an ID of "right-btn" to the button which is the correct answer for this question.
function AssignCurrentRightAnswer(pIndex)
{
    var rightAnswer = HTML.buttonList.testing.mAnswerSets_Correct[pIndex] - 1;

    if(!isNaN(rightAnswer))
    {
        //Set a reference to the array of children on our button list div
        var iChildren = HTML.buttonList.mDiv.children();

        //For each child within our button list, do...
        for(var i = 0; i < iChildren.length; i++)
        {
            //If this iteration is equal to the right answer, then set the ID to the right answer
            if(i === rightAnswer)
            {
                $RightButton = $(HTML.buttonList.mDiv.children()[i]);

                $RightButton.attr("id", "right-btn");
            }
            //Else, remove the ID: this will indicate that it is a wrong answer
            else
            {
                $WrongButton = $(HTML.buttonList.mDiv.children()[i]);

                $WrongButton.attr("id", "");
            }
        }
    }
    else
    {
        console.error("Attempting to grab a 'rightAnswer' which is not a number");
    }
}


//----------MAIN----------//
//------------------------//

//A prompt for testing which triggers the previous functions.
switch (prompt("Input run 0-3")) {
    case "0":
        SetMainElements();
        break;
    case "1":
        SetTestingElements();
        break;
    case "2":
        SetFinishedElements();
        break;
    case "3":
        SetHSElements();
        break;
}

//----------EVENTS----------//
//--------------------------//


//Adds a click event to the HTML element identified as '#btn-start'
//This event will begin the function 'SetTestingElements'
// $("#btn-start").on("click", function (e) {
//     SetTestingElements();
// })

$("#top-left").on("click", function (e) {
    var $target = $(event.target);
    var $target_ID = $(event.target).attr("id");

    switch ($target_ID) {
        case "run-main":
            SetMainElements();
            break;
        case "run-HS":
            SetHSElements();
            break;
    }
})

$("#button-list").on("click", function (e) {
    var $target = $(event.target);
    var $target_ID = $(event.target).attr("id");

    switch ($target_ID) {
        case "start-btn":
            SetTestingElements();
            break;
        case "right-btn":
            alert("You're right!");
            RunQuiz(Question_Current);
            break;
        default:
            alert("Wrong answer");
            RunQuiz(Question_Current);
            break;
    }
})