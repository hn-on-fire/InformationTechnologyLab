document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var subject1 = parseFloat(document.getElementById('subject1').value);
    var subject2 = parseFloat(document.getElementById('subject2').value);
    var subject3 = parseFloat(document.getElementById('subject3').value);
    var subject4 = parseFloat(document.getElementById('subject4').value);
    
    var totalMarks = subject1 + subject2 + subject3 + subject4;
    var averageMarks = totalMarks / 4;
    
    var resultText;
    
    if (averageMarks > 90) {
        resultText = "Your Grade is A";
    } else if (averageMarks > 80) {
        resultText = "Your Grade is B";
    } else if (averageMarks > 70) {
        resultText = "Your Grade is C";
    } else if (averageMarks > 60) {
        resultText = "Your Grade is D";
    } else {
        resultText = "You have failed. Try again.";
    }
    
    document.getElementById('result').innerText = resultText;
});