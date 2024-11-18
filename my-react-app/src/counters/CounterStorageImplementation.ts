
interface CounterStorageImplementation {
    getName(): string;
    getCount(): Promise<number>;
    setCount(newCount: number): Promise<void>;
}

export default CounterStorageImplementation;
