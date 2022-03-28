using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementAPI.Models
{
    public class Intern
    {
        public Guid id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string BirthDay { get; set; }
        public string BirthMonth { get; set; }
        public string BirthYear { get; set; }
        public string Gender { get; set; }
    }
}
