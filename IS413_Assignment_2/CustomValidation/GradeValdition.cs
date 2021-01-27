using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using System.ComponentModel.DataAnnotations;

namespace IS413_Assignment_2.CustomValidation
{
    public class GradeValdition : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            if ((int)value >= 0 && (int)value <= 100)
            {
                return true;
            }
            else
            {
                return false;
            }

            
        }
    }
}
