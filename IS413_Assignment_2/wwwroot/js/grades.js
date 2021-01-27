//$("#submitButton").click(function (e) {
$("#submitButton").click(function () {
    
    //e.preventDefault();

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

    //$("#LetterGrade").html(finalGradeLetter)
    //$("#GradePercentage").html(finalGradePercent)

    if (!(assignments < 0 || assignments > 100 || groupProjects < 0 || groupProjects > 100 || quizzes < 0 || quizzes > 100 || exams < 0 || exams > 100 || intex < 0 || intex > 100) && assignments != '' && groupProjects != '' && quizzes != '' && exams != '' && intex != '')
    {
        alert("Grade: " + finalGradeLetter + "\nPercent: " + finalGradePercent.toString())

    }
});