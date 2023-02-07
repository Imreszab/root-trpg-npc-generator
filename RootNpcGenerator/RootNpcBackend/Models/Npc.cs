using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RootNpcBackend.Models
{
    public class Npc
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
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
