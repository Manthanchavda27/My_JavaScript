let text="The quick brown fox jumps over the lady";
let startTime,endTime;

function StartTime(){

   document.getElementById('TypingText').value=text;

    let userinput=document.getElementById('input');
    userinput.value="";
    userinput.readOnly=false;
    userinput.focus();

    document.getElementById('result').innerHTML="";

    startTime=new Date().getTime();

}

function EndTime(){

    endTime = new Date().getTime();

    document.getElementById("input").readOnly = true;

    var timeElapsed = (endTime-startTime)/1000;

    var typed = document.getElementById('input').value;

    var typedwords = typed.split(' ').filter(function(word){
        return word!="";
    }).length;

    var wpm =0

   if (timeElapsed!==0&&!isNaN(typedwords)){
    wpm=Math.round((typedwords/timeElapsed)*60);
   }

   var output = document.getElementById('result');
   output.innerHTML="<h2>Typing Test Results</h2>"+
   "<p>words : "+typedwords+"</p>"+
   "<p>Time Taken : "+timeElapsed+" seconds</p>"+
   "<p>Words Per Minute : "+wpm+"</p>"

}