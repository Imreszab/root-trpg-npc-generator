using Azure;
using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using RootNpcBackend.Data;
using RootNpcBackend.Models;
using System.Linq;
using System.Threading.Tasks;

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
            npc.Id = 0;
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

        public Response<Npc> SaveRandomNpc(RootContext context, Npc npc)
        {
             try {

                npc = SetNpcData(context, npc);
                context.Npcs.Add(npc);
                 context.SaveChanges();
                var savedNpc = npc; //context.Npcs.Find(npc.Id);
                 if (savedNpc == null)
                 {
                     return Response.Fail<Npc>("Npc couldn't be created");
                 }

                 return Response.Ok(savedNpc);

             }
             catch (Exception e)
             {
                 return Response.Fail<Npc>(e.Message);

             }
        }
        public Npc SetNpcData(RootContext context, Npc npc)
        {
            var age = context.Ages.Find(npc.Age.Id);
            npc.Age = age;
            var armor = context.Armors.Find(npc.Armor.Id);
            npc.Armor = armor;
            var faction = context.Factions.Find(npc.Faction.Id);
            npc.Faction = faction;
            var gender = context.Genders.Find(npc.Gender.Id);
            npc.Gender = gender;
            var weapon = context.Weapons.Find(npc.Weapon.Id);
            npc.Weapon = weapon;
            var race = context.Races.Find(npc.Race.Id);
            npc.Race = race;
            return npc;
        }
        
        public Response<Gender> SaveGender(RootContext context, Gender gender)
        {
            context.Genders.Add(gender);
            context.SaveChanges();
            return Response.Ok(gender);
        }



        public Response<IReadOnlyList<Npc>> GetAllNpcs(RootContext context)
        {
            IReadOnlyList<Npc> npcs;
            try
            {
                npcs = context.Npcs.ToList();
                if (npcs == null)
                {
                    return Response.Fail<IReadOnlyList<Npc>>("Events not found");
                }
                return Response.Ok(npcs);
            }
            catch (Exception e)
            {
                return Response.Fail<IReadOnlyList<Npc>>(e.Message);

            }
        }

    }
}
