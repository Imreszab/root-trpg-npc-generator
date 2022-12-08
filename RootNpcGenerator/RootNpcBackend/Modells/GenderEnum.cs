using System.Text.Json.Serialization;

namespace RootNpcBackend.Modells
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum GenderEnum
    {
        Male,
        Female,
        Other
    }
}