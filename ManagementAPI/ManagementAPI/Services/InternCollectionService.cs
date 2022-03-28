using ManagementAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementAPI.Services
{
    public class InternCollectionService : IInternCollectionService
    {
        private List<Intern> _interns = new List<Intern>();
        public bool Add(Intern intern)
        {
            if(UserExists(intern.id))
            {
                return false;
            }

            _interns.Add(intern);
            return true;
        }

        public List<Intern> GetAll()
        {
            return _interns;
        }

        public bool Modify(Guid id, Intern intern)
        {
            int index = _interns.FindIndex(inter => inter.id == id);
            if(index == -1)
            {
                return false;
            }
            intern.id = id;
            _interns[index] = intern;
            return true;
        }

        public bool Remove(Guid id)
        {
            int index = _interns.FindIndex(inter => inter.id == id);
            if (index == -1)
            {
                return false;
            }
            _interns.RemoveAt(index);
            return true;
        }

        public bool UserExists(Guid id)
        {
            return _interns.FindIndex(intern => intern.id == id) != -1;
        }
    }
}
