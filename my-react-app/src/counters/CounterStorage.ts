import LocalCounterStorage from './LocalCounterStorage';
import CounterStorageImplementation from './CounterStorageImplementation';

class CounterStorage {
    private static instance: CounterStorage;
    private impl: CounterStorageImplementation;

    private constructor() {
        if (window.getCounterStorageImplementation) {
            this.impl = window.getCounterStorageImplementation();
        } else {
            this.impl = new LocalCounterStorage();
        }
        console.log(`Using implementation: ${this.impl.getName()}`);
    }

    static getInstance(): CounterStorage {
        if (!CounterStorage.instance) {
            CounterStorage.instance = new CounterStorage();
        }
        return CounterStorage.instance;
    }

    getCount(): Promise<number> {
        return this.impl.getCount();
    }

    setCount(newCount: number): Promise<void> {
        this.impl.setCount(newCount);
        return Promise.resolve();
    }
}

export default CounterStorage;
