using ManagementAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementAPI.Services
{
    public interface IInternCollectionService
    {
        List<Intern> GetAll();
        bool Add(Intern intern);
        bool Modify(Guid id, Intern intern);
        bool Remove(Guid id);
        bool UserExists(Guid id);
    }
}
