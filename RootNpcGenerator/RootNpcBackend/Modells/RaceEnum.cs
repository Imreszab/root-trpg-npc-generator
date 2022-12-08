using System.Text.Json.Serialization;

namespace RootNpcBackend.Modells
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum RaceEnum
    {
        Rabbit,
        Mouse,
        Fox,
        Cat,
        Bird
    }
}