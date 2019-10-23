//----------HTML REFERENCES----------//
//-----------------------------------//

//----------INSTANTIATED HTML VARIABLES----------//
//-----------------------------------------------//



//----------VARIABLES----------//
//-----------------------------//

var HTML =
{
    topLeft: {
        mDiv: $("#top-left"),
        main: {
            mText: $("<u>").text("Highscores"),
            mClasses: "p-2",
            mID : "run-HS"
        },
        testing: {
            mText: $("<span>").text("Current Score : "),
            mClasses: "p-2",
            mID : "cur-score"
        },
        finished: {
            mText: $("<u>").text("Highscores"),
            mClasses: "p-2",
            mID : "run-HS"
        },
        highscores:
        {
            mText: $("<u>").text("Return to main"),
            mClasses : "p-2",
            mID : "run-main"
        }
        
    },

    topRight: {
        mDiv: $("#top-right"),
        main: {
            mText : $("<h6>").text("A")
        },
        testing: {
            mText : $("<h6>").text("Time left : "),
            mID : "timer"
        },
        finished: {
            mText : $("<h6>").text("Time Left over : "),
            mID : "timer"
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


    $iTopLeft = ModifyText(HTML.topLeft.main);
    HTML.topLeft.mDiv.append($iTopLeft);

    $iTopRight = ModifyText(HTML.topRight.main);
    HTML.topRight.mDiv.append($iTopRight);
}

//Sets up the elements of the 'testing' display.
function SetTestingElements() {
    console.log("Setting up testing elements...");
    HTML.topLeft.mDiv.empty();

    $iTopLeft = ModifyText(HTML.topLeft.testing);
    HTML.topLeft.mDiv.append($iTopLeft);

    $iTopRight = ModifyText(HTML.topRight.testing);
    HTML.topRight.mDiv.append($iTopRight);
}

//Sets up the elements of the 'finished' display.
function SetFinishedElements() {
    console.log("Setting up Finished elements...");
    HTML.topLeft.mDiv.empty();
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
function ModifyText(pPrefix)
{
    var $iDiv = pPrefix.mText;
    $iDiv.attr("id", pPrefix.mID);
    $iDiv.attr("class", pPrefix.mClasses);

    return $iDiv;
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
$("#btn-start").on("click", function (e) {
    SetTestingElements();
})

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