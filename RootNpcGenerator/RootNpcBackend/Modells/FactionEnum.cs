using System.Text.Json.Serialization;

namespace RootNpcBackend.Modells
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum FactionEnum
    {
        Marquisate,
        EyrieDynasty,
        WAlliance,
        Local
    }
}