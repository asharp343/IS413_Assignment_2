using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace IS413_Assignment_2.Models
{
    public class GradeCalculatorModel
    {
        
        [Required]
        public int assignments { get; set; }

        public int groupProjects { get; set; }

        public int quizzes { get; set; }

        public int exams { get; set; }

        public int intex { get; set; }

    }
}
