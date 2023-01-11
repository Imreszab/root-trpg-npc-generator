using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RootNpcBackend.Models;

namespace RootNpcBackend.Data
{
    public class RootNpcSeed
    {
        private readonly RootContext _context;

        public RootNpcSeed(RootContext context)
        {
           _context = context;
        }

        public void Seed()
        {
            _context.Database.Migrate();
            if (!_context.Genders.Any())
            {
                _context.Genders.AddRange(
                new Gender
                {
                    Name = "Male"
                },
                new Gender
                {
                    Name = "Female"
                },
                new Gender
                {
                    Name = "Other"
                }
                );
                _context.SaveChanges();
            }
            if (!_context.Ages.Any())
            {
                _context.Ages.AddRange( 
                new Age
                {
                    Name = "Child"
                },
                new Age
                {
                    Name = "YoungAdult"
                },
                new Age
                {
                    Name = "MiddleAge"
                },
                new Age
                {
                    Name = "Elder"
                }
                );
                _context.SaveChanges();
            }
            if (!_context.Factions.Any())
            {
                _context.Factions.AddRange(
                new Faction
                {
                    Name = "Marquisate"
                },
                new Faction
                {
                    Name = "Eyrie Dynasty"
                },
                new Faction
                {
                    Name = "Woodland Alliance"
                },
                new Faction
                {
                    Name = "Local Denizen"
                },
                new Faction
                {
                    Name = "Lizard Cult"
                }
                );
                _context.SaveChanges();
            }
            if (!_context.Races.Any())
            {
                _context.Races.AddRange(
                new Race
                {
                    Name = "Rabbit"
                },
                new Race
                {
                    Name = "Mouse"
                },
                new Race
                {
                    Name = "Fox"
                },
                new Race
                {
                    Name = "Cat"
                },
                new Race
                {
                    Name = "Bird"
                },
                new Race
                {
                    Name = "Lizard"
                }
                );
                _context.SaveChanges();
            }
            if (!_context.Weapons.Any())
            {
                _context.Weapons.AddRange(
                new Weapon
                {
                    Name = "Paw",
                    Injury = 0,
                    Exhaustion = 2,
                },
                new Weapon
                {
                    Name = "Dagger",
                    Injury = 1,
                    Exhaustion = 0,
                },
                new Weapon
                {
                    Name = "Sword",
                    Injury = 2,
                    Exhaustion = 0,
                },
                new Weapon
                {
                    Name = "Greatsword",
                    Injury = 2,
                    Exhaustion = 0,
                },
                new Weapon
                {
                    Name = "Greathammer",
                    Injury = 1,
                    Exhaustion = 1,
                }
                );
                _context.SaveChanges();
            }
            if (!_context.Armors.Any())
            {
                _context.Armors.AddRange(
                new Armor
                {
                    Name = "Cloak",
                    Wear = 1
                },
                new Armor
                {
                    Name = "Fancy Clothes",
                    Wear = 0
                },
                new Armor
                {
                    Name = "Leather Vest",
                    Wear = 2
                },
                new Armor
                { 
                    Name = "Chainmail",
                    Wear = 3
                },
                new Armor
                {
                    Name = "Plate Armor",
                    Wear = 4
                }
                );
                _context.SaveChanges();
            }
            if (!_context.Npcs.Any())
            {
                _context.Npcs.AddRange(
                new Npc
                {
                    Name = "Karalábé",
                    Race = _context.Races.Where(race => race.Name == "Cat").FirstOrDefault(),
                    Age = _context.Ages.Where(age => age.Name == "YoungAdult").FirstOrDefault(),
                    Gender = _context.Genders.Where(gender => gender.Name == "Male").FirstOrDefault(),
                    Faction = _context.Factions.Where(faction => faction.Name == "Marquisate").FirstOrDefault(),
                    Weapon = _context.Weapons.Where(weapon => weapon.Name == "Greatsword").FirstOrDefault(),
                    Armor = _context.Armors.Where(armor => armor.Name == "Chainmail").FirstOrDefault(),
                    Injury = 4,
                    Exhaustion = 3,
                    Moral = 3

                },
                 new Npc
                 {
                     Name = "Spiky",
                     Race = _context.Races.Where(race => race.Name == "Lizard").FirstOrDefault(),
                     Age = _context.Ages.Where(age => age.Name == "YoungAdult").FirstOrDefault(),
                     Gender = _context.Genders.Where(gender => gender.Name == "Other").FirstOrDefault(),
                     Faction = _context.Factions.Where(faction => faction.Name == "Lizard Cult").FirstOrDefault(),
                     Weapon = _context.Weapons.Where(weapon => weapon.Name == "Dagger").FirstOrDefault(),
                     Armor = _context.Armors.Where(armor => armor.Name == "Fancy Clothes").FirstOrDefault(),
                     Injury = 4,
                     Exhaustion = 3,
                     Moral = 3

                 }
                ) ;
                _context.SaveChanges();
            }
        }

    }
}
