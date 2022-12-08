

namespace RootNpcBackend.Modells
{
    public class Npc
    {
        public string Name { get; set; }
        public RaceEnum Race { get; set; }
        public AgeEnum Age { get; set; }
        public GenderEnum Gender { get; set; }
        public FactionEnum Faction { get; set; }
        public int Injury { get; set; }
        public int Exhaustion { get; set; }
        public int Wear { get; set; }
        public int Moral{ get; set; }
        public Weapon Weapon { get; set; }
        public Armor Armor { get; set; }

    }
}
