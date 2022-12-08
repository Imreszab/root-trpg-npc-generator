using System.Text.Json.Serialization;

namespace RootNpcBackend.Modells
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum AgeEnum
    {
        Child,
        Young,
        MiddleAge,
        Elder
    }
}