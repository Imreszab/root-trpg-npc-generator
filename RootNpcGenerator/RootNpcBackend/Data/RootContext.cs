using RootNpcBackend.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
//using System.Data.Entity;

namespace RootNpcBackend.Data
{
    public class RootContext : DbContext
    {
        public RootContext(DbContextOptions<RootContext> options) : base(options)
        {
        }
        public DbSet<Npc> Npcs { get; set; }
        public DbSet<Age> Ages { get; set; }
        public DbSet<Faction> Factions { get; set; }
        public DbSet<Gender> Genders { get; set; }
        public DbSet<Race> Races { get; set; }
        public DbSet<Armor> Armors { get; set; }
        public DbSet<Weapon> Weapons { get; set; }
    }
}
