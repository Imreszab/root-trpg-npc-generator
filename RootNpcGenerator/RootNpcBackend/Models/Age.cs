using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RootNpcBackend.Models
{
    public class Age
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}