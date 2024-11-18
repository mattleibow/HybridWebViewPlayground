
interface CounterStorageImplementation {
  getName(): string;
  getCount(): Promise<number>;
  setCount(newCount: number): Promise<void>;
}

interface Window {
  getCounterStorageImplementation: () => CounterStorageImplementation;
}

declare var window: Window & typeof globalThis;
