
interface HybridWebView {
    SendRawMessage(message: string): void;
    InvokeDotNet(methodName: string, paramValues?: any): Promise<any>;
}

declare global {
    interface Window {
        HybridWebView: HybridWebView;
    }
}

export {};
