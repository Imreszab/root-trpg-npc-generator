using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RootNpcBackend.Models
{
    public class Faction
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}