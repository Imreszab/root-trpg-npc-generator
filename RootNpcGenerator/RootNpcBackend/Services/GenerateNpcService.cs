using Newtonsoft.Json;
using RootNpcBackend.Data;
using RootNpcBackend.Models;
using System.Linq;

namespace RootNpcBackend.Services
{
    public class GenerateNpcService
    {
        private Random _random= new Random();
        public Npc GenerateRandomNpc(RootContext context)
        {

            //var randomRace = _random.Next();
           //ar random = new Random();
            Npc npc = new Npc();
            npc.Name = GetNameFromApi();
            npc.Race = context.Races
                              .OrderBy(r => Guid.NewGuid()).Take(1).FirstOrDefault();
            npc.Age = context.Ages
                              .OrderBy(r => Guid.NewGuid()).Take(1).FirstOrDefault();
            npc.Gender = context.Genders
                                .OrderBy(r => Guid.NewGuid()).Take(1).FirstOrDefault();
            npc.Faction = context.Factions
                                .OrderBy(r => Guid.NewGuid()).Take(1).FirstOrDefault();
            npc.Weapon = context.Weapons
                                .OrderBy(r => Guid.NewGuid()).Take(1).FirstOrDefault();
            npc.Armor = context.Armors
                                .OrderBy(r => Guid.NewGuid()).Take(1).FirstOrDefault();
            npc.Injury = _random.Next(4)+1;
            npc.Exhaustion = _random.Next(4)+1;
            npc.Moral = _random.Next(4)+1;

            return npc;
        }

        public string GetNameFromApi()
        {
            var url = "https://names.drycodes.com/1?format=json";
            var data = ApiHelperService.GetDataFormApi<string>(url).Result;

            return data;
        }

    }
}
