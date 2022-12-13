using RootNpcBackend.Models;

namespace RootNpcBackend.Services
{
    public class GenerateNpcService
    {
        public Npc GenerateRandomNpc()
        {
            var random = new Random();
            Npc npc = new Npc();
            npc.Name = "Karalabé";
          //  npc.Race = GetRandomEnum<Race>(random);

            return npc;
        }

        private T GetRandomEnum<T>(Random random ) where T:Enum
        {
            
            Array values = Enum.GetValues(typeof(T));
            T randomEnum = (T)values.GetValue(random.Next(values.Length));

            return randomEnum;
        }
    }
}
