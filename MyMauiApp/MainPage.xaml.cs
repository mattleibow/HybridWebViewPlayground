using System.Diagnostics;
using System.Text.Json.Serialization;

namespace MyMauiApp;

public partial class MainPage : ContentPage
{
    public MainPage()
    {
        InitializeComponent();

        hybridHost.SetInvokeJavaScriptTarget(new HybridTarget(new()));
    }

    private void OnRawMessage(object sender, HybridWebViewRawMessageReceivedEventArgs e)
    {
        Debug.WriteLine($"Raw message received: {e.Message}");
    }

    class HybridTarget(MauiCounterStorage storage)
    {
        public Task<int> MauiCounterStorage_GetCount()
        {
            return storage.GetCount();
        }

        public Task MauiCounterStorage_SetCount(int count)
        {
            return storage.SetCount(count);
        }
    }

    class MauiCounterStorage
    {
        public async Task<int> GetCount()
        {
            var stored = await SecureStorage.Default.GetAsync("count");
            if (string.IsNullOrWhiteSpace(stored))
                return 0;

            return int.Parse(stored);
        }

        public async Task SetCount(int count)
        {
            await SecureStorage.Default.SetAsync("count", count.ToString());
        }
    }

    private async void OnTestClicked(object sender, EventArgs e)
    {
        try
        {
            var res = await hybridHost.InvokeJavaScriptAsync(
                "alert",
                HybridSampleJSContext.Default.String,
                ["Hello from C#"],
                [HybridSampleJSContext.Default.String]);
        }
        catch (Exception ex)
        {
            Debug.WriteLine($"Error: {ex.Message}");
        }
    }

    [JsonSourceGenerationOptions(WriteIndented = true)]
    [JsonSerializable(typeof(string))]
    internal partial class HybridSampleJSContext : JsonSerializerContext
    {
        // This type's attributes specify JSON serialization info to preserve type structure
        // for trimmed builds.  
    }
}
