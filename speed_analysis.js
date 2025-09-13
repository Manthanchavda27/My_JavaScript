    let testtext = "The quick brown fox jumps over the lazy dog.";
    let startTime,endTime;

    function startTest(){

        document.getElementById("inputText").value=testtext;

        let userInput = document.getElementById("userInput");
        userInput.value = "";
        userInput.readOnly = false;
        userInput.focus();

        document.getElementById("output").innerHTML="";

        startTime = new Date().getTime();
    }

    function endTest(){

        endTime = new Date().getTime();

        document.getElementById("userInput").readOnly = true;

        var timeElapsed = (endTime-startTime)/1000;
        var userTypedText = document.getElementById("userInput").value;

        var typedwords = userTypedText.split(/\s+/).filter(function(word){
            return word != "";
        }).length;

        var wpm = 0;

        if(timeElapsed!==0 && !isNaN(typedwords)){
            wpm = Math.round((typedwords/timeElapsed)*60);
        }
        
        var output = document.getElementById("output");
        output.innerHTML = "<h2>Typing Test Results:</h2>"+
        "<p>words Typed :"+ typedwords +"<p>" +
        "<p>Time Taken :"+timeElapsed+"<p>" +
        "<p> words per Minute (WPM):"+wpm+"</p>";
    }