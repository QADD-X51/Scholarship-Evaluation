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
        public ushort BirthDay { get; set; }
        public ushort BirthMonth { get; set; }
        public ushort BirthYear { get; set; }
        public ushort Age { get; set; }
        public string Gender { get; set; }
    }
}
