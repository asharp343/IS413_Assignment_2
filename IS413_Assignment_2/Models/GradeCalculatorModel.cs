using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using IS413_Assignment_2.CustomValidation;

namespace IS413_Assignment_2.Models
{
    public class GradeCalculatorModel
    {

        [Required (ErrorMessage = "Enter a value")]
        [Range(0, 100, ErrorMessage = "Enter a number between 0-100")]
        public int assignments { get; set; }

        [Required(ErrorMessage = "Enter a value")]
        [Range(0, 100, ErrorMessage = "Enter a number between 0-100")]
        public int groupProjects { get; set; }

        [Required(ErrorMessage = "Enter a value")]
        [Range(0, 100, ErrorMessage = "Enter a number between 0-100")]
        public int quizzes { get; set; }

        [Required(ErrorMessage = "Enter a value")]
        [Range(0, 100, ErrorMessage = "Enter a number between 0-100")]
        public int exams { get; set; }

        [Required(ErrorMessage = "Enter a value")]
        [Range(0, 100, ErrorMessage = "Enter a number between 0-100")]
        public int intex { get; set; }

    }
}
