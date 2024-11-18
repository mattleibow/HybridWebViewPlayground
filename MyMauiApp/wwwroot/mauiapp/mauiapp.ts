
class MauiCounterStorage implements CounterStorageImplementation {
    getName(): string {
        return '.NET MAUI Counter Storage';
    }

    async getCount(): Promise<number> {
        const count = await window.HybridWebView.InvokeDotNetAsync("GetCount");
        return ount;
    }

    setCount(newCount: number): Promise<void> {
        await window.HybridWebView.InvokeDotNetAsync("SetCount");
    }
}

window.getCounterStorageImplementation = () => {
    return new MauiCounterStorage();
};
