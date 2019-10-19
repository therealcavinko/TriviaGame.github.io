var correctans = 0;
var incorrectans = 0;
var newElement = document.createElement("span");
var answer;
//---------------------------------------------------------
$("#correct").text(correctans);
$("#incorrect").text(incorrectans);
//---------------------------------------------------------
if(answer === "correct") {
    correctans++;
} 
else {
	incorrectans++;
}
//---------------------------------------------------------
$("#finshed").click(function(){
	$("#score").show();
});





