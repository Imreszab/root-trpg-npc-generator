using Azure.Core;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using RootNpcBackend.Data;
using RootNpcBackend.Models;
using RootNpcBackend.Services;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RootNpcBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NpcController : ControllerBase
    {
        private GenerateNpcService _generateNpcService = new GenerateNpcService();
        private RootContext _context;

        public NpcController(RootContext context)
        {
            _context = context;
        }
        
        [Route("generate/random")]
        [HttpGet]
        public Npc GenerateRandomNpc()
        {
            Npc generatedNpc = _generateNpcService.GenerateRandomNpc(_context);

            return generatedNpc;
        }

        [Route("get/all")]
        [HttpGet]
        public ActionResult<Npc> GetAllNpc() {
            var response = _generateNpcService.GetAllNpcs(_context);
            if (response.Failure)
            {
                return BadRequest(response.Error);
            }
            return Ok(response.Value);
        }


        [Route("save/random")]
        [HttpPost]
        public ActionResult<Npc> SaveRandomNpc([FromBody] Npc npc)
        {
            
            var response = _generateNpcService.SaveRandomNpc(_context, npc);
            if (response.Failure)
            {
                return BadRequest(response.Error);
            }
            return Ok(response.Value);
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
