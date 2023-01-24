﻿using Azure;
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
