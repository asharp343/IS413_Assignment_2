

$("#submitButton").click(function () {
    let assignments = $("#assignments").val();
    let groupProjects = $("#groupProjects").val();
    let quizzes = $("#quizzes").val();
    let exams = $("#exams").val();
    let intex = $("#intex").val();

    let finalGradePercent = ((assignments * .5) + (groupProjects * .1) + (quizzes * .1) + (exams * .2) + (intex * .1));

    let finalGradeLetter;


    if (parseInt(finalGradePercent) >= 94) {
        finalGradeLetter = "A";
    }
    else if (parseInt(finalGradePercent) < 94 && parseInt(finalGradePercent) >= 90) {
        finalGradeLetter = "A-";
    }
    else if (parseInt(finalGradePercent) < 90 && parseInt(finalGradePercent) >= 87) {
        finalGradeLetter = "B+";
    }
    else if (parseInt(finalGradePercent) < 87 && parseInt(finalGradePercent) >= 84) {
        finalGradeLetter = "B";
    }
    else if (parseInt(finalGradePercent) < 84 && parseInt(finalGradePercent) >= 80) {
        finalGradeLetter = "B-";
    }
    else if (parseInt(finalGradePercent) < 80 && parseInt(finalGradePercent) >= 77) {
        finalGradeLetter = "C+";
    }
    else if (parseInt(finalGradePercent) < 77 && parseInt(finalGradePercent) >= 74) {
        finalGradeLetter = "C";
    }
    else if (parseInt(finalGradePercent) < 74 && parseInt(finalGradePercent) >= 70) {
        finalGradeLetter = "C-";
    }
    else if (parseInt(finalGradePercent) < 70 && parseInt(finalGradePercent) >= 67) {
        finalGradeLetter = "D+";
    }
    else if (parseInt(finalGradePercent) < 67 && parseInt(finalGradePercent) >= 64) {
        finalGradeLetter = "D";
    }
    else if (parseInt(finalGradePercent) < 64 && parseInt(finalGradePercent) >= 60) {
        finalGradeLetter = "D-";
    }
    else {
        finalGradeLetter = "E";
    }

    alert("Percent: " + finalGradePercent + "\nGrade: " + finalGradeLetter);
});