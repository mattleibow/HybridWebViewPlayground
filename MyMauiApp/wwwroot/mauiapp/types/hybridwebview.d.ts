
interface HybridWebView {
    //Init(): void;
    SendRawMessage(message: string): void;
    InvokeDotNetAsync(methodName: string, paramValues?: any): Promise<any>;
    //__SendMessageInternal(type: string, message: string): void;
    //__InvokeJavaScript(taskId: string, methodName: Function, args: any[]): void;
    //__TriggerAsyncCallback(taskId: string, result: any): void;
}

declare global {
    interface Window {
        HybridWebView: HybridWebView;
    }
}

export {};
