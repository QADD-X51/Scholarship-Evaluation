using ManagementAPI.Models;
using ManagementAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagementAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class InternController : ControllerBase
    {
        IInternCollectionService _internService;

        public InternController(IInternCollectionService service)
        {
            _internService = service ?? throw new ArgumentNullException(nameof(service));
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_internService.GetAll());
        }

        [HttpPost]
        public IActionResult AddIntern([FromBody] Intern intern)
        {
            if (intern == null)
            {
                return BadRequest("Intern should not be null.");
            }

            if (!_internService.Add(intern))
            {
                return BadRequest("ID already exists");
            }
            return Ok("Intern added");
        }

        [HttpDelete("{id}")]
        public IActionResult RemoveIntern(Guid id)
        {
            if(!_internService.Remove(id))
            {
                return NotFound("Intern not found");
            }

            return Ok("Intern deleted");
        }

        [HttpPut("{id}")] 
        public IActionResult ModifyIntern(Guid id, [FromBody]Intern intern)
        {
            if(intern == null)
            {
                return BadRequest("Intern should not be null");
            }

            if(!_internService.Modify(id,intern))
            {
                return NotFound("Referenced ID does not exist");
            }

            return Ok("Intern modified");
        }
    }
}
