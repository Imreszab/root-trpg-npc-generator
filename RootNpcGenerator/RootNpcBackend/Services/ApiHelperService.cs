using Microsoft.AspNetCore.Http.Extensions;
using System.Net.Http.Headers;

namespace RootNpcBackend.Services
{
    public class ApiHelperService
    {
        public static HttpClient ApiClient { get; private set; }

        public static void InitializeClient()
        {
            ApiClient = new HttpClient();
            ApiClient.DefaultRequestHeaders.Accept.Clear();
            ApiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
        public ApiHelperService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }
        public IWebHostEnvironment WebHostEnvironment { get; }

        public static async Task<string> GetDataFormApi<TResponse>(string url)
        {
            using (HttpResponseMessage response = await ApiHelperService.ApiClient.GetAsync(url))
            {
                if (response.IsSuccessStatusCode)
                {
                    string data = await response.Content.ReadAsStringAsync();
                    return data;
                }
                else
                {
                    throw new Exception(response.ReasonPhrase);
                }
            }
        }
    }
}
