

namespace RootNpcBackend.Models
{
    public class Npc
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Race Race { get; set; }
        public Age Age { get; set; }
        public Gender Gender { get; set; }
        public Faction Faction { get; set; }
        public Weapon Weapon { get; set; }
        public Armor Armor { get; set; }
        public int Injury { get; set; }
        public int Exhaustion { get; set; }
        public int Moral{ get; set; }
      

    }
}
