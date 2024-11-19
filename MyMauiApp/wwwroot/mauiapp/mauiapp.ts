
class MauiCounterStorage implements CounterStorageImplementation {
    getName(): string {
        return '.NET MAUI Counter Storage';
    }

    async getCount(): Promise<number> {
        const count = await window.HybridWebView.InvokeDotNet("MauiCounterStorage_GetCount");
        return Promise.resolve(count);
    }

    async setCount(newCount: number): Promise<void> {
        await window.HybridWebView.InvokeDotNet("MauiCounterStorage_SetCount", [newCount]);
        return Promise.resolve();
    }
}

window.getCounterStorageImplementation = () => {
    window.HybridWebView.SendRawMessage("About to construct the MauiCounterStorage instance.");

    return new MauiCounterStorage();
};
