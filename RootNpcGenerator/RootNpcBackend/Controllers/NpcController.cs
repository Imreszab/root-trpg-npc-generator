using Microsoft.AspNetCore.Mvc;
using RootNpcBackend.Modells;
using RootNpcBackend.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RootNpcBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NpcController : ControllerBase
    {
        private GenerateNpcService _generateNpcService = new GenerateNpcService();
        
        [Route("generate/random")]
        [HttpGet]
        public Npc GenerateRandomNpc()
        {
            Npc generatedNpc = _generateNpcService.GenerateRandomNpc();

            return generatedNpc;
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
