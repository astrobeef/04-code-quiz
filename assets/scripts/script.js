//----------HTML REFERENCES----------//
//-----------------------------------//
var $topLeft = $("#top-left");
var $topRight = $("top-right");

//----------INSTANTIATED HTML VARIABLES----------//
//-----------------------------------------------//

var HS_Link = $("<a>").text("Highscore : X");
HS_Link.attr("href", "index.html").attr("target", "_blank");

var HS_Cur = $("<h6>").text("Current Score : X");

var HS_Return = $("<a>").text("Return to main");
HS_Return.attr("href", "index.html").attr("target", "_blank");

//----------VARIABLES----------//
//-----------------------------//

var HTML =
{
    topLeft: {
        mDiv: $topLeft,
        menu: {
            text: HS_Link
        },
        testing: {
            text: HS_Cur
        },
        finished: {
            text: HS_Link
        },
        highscores:
        {
            text: HS_Return
        }
    },

    topRight: {
        mDiv: $topRight,
        menu: {

        },
        testing: {

        },
        finished: {

        }
    }
};

//----------FUNCTIONS----------//
//-----------------------------//

//Set up the elements of the 'menu' display.
function SetMenuElements() {console.log("Setting up menu elements...");
    HTML.topLeft.mDiv.empty();
    HTML.topLeft.mDiv.append(HTML.topLeft.menu.text);
}

//Sets up the elements of the 'testing' display.
function SetTestingElements() {console.log("Setting up testing elements...");
    HTML.topLeft.mDiv.empty();
    HTML.topLeft.mDiv.append(HTML.topLeft.testing.text);
}

//Sets up the elements of the 'finished' display.
function SetFinishedElements() {console.log("Setting up Finished elements...");
    HTML.topLeft.mDiv.empty();
    HTML.topLeft.mDiv.append(HTML.topLeft.finished.text);
}

//Sets up the elements of the 'Highscores' display.
function SetHSElements() {console.log("Setting up Highscore elements...");
    HTML.topLeft.mDiv.empty();
    HTML.topLeft.mDiv.append(HTML.topLeft.highscores.text);    
}

//----------MAIN----------//
//------------------------//

//A prompt for testing which triggers the previous functions.
switch(prompt("Input run 0-3"))
{
    case "0":
        SetMenuElements();
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