using System.ComponentModel.DataAnnotations.Schema;

namespace RootNpcBackend.Models
{
    public class Weapon
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Injury { get; set; }
        public int Exhaustion { get; set; }
    }
}