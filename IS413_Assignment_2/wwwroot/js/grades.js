﻿//function handleForm(event) { event.preventDefault(); }

$("#submitButton").click(function () {
    percentage = $("percentage").value;

    if (parseInt(percentage) >= 94) {
        alert("Percent: " + percentage + "\nGrade: A")
    }
    else if (parseInt(percentage) < 94 && parseInt(percentage) >= 90) {
        alert("Percent: " + percentage + "\nGrade: A-")
    }
    else if (parseInt(percentage) < 90 && parseInt(percentage) >= 87) {
        alert("Percent: " + percentage + "\nGrade: B+")
    }
    else if (parseInt(percentage) < 87 && parseInt(percentage) >= 84) {
        alert("Percent: " + percentage + "\nGrade: B")
    }
    else if (parseInt(percentage) < 84 && parseInt(percentage) >= 80) {
        alert("Percent: " + percentage + "\nGrade: B-")
    }
    else if (parseInt(percentage) < 80 && parseInt(percentage) >= 77) {
        alert("Percent: " + percentage + "\nGrade: C+")
    }
    else if (parseInt(percentage) < 77 && parseInt(percentage) >= 74) {
        alert("Percent: " + percentage + "\nGrade: C")
    }
    else if (parseInt(percentage) < 74 && parseInt(percentage) >= 70) {
        alert("Percent: " + percentage + "\nGrade: C-")
    }
    else if (parseInt(percentage) < 70 && parseInt(percentage) >= 67) {
        alert("Percent: " + percentage + "\nGrade: D+")
    }
    else if (parseInt(percentage) < 67 && parseInt(percentage) >= 64) {
        alert("Percent: " + percentage + "\nGrade: D")
    }
    else if (parseInt(percentage) < 64 && parseInt(percentage) >= 60) {
        alert("Percent: " + percentage + "\nGrade: D-")
    }
    else{
        alert("Percent: " + percentage + "\nGrade: E")
    }
});