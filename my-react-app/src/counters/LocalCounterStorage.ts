import CounterStorageImplementation from './CounterStorageImplementation';

class StoredCount {
    count: number = 0;
}

class LocalCounterStorage implements CounterStorageImplementation {
    getName(): string {
        return 'Local Browser Storage';
    }

    getCount(): Promise<number> {
        const jsonCount = localStorage.getItem('count');
        if (jsonCount) {
            const storedCount = JSON.parse(jsonCount) as StoredCount;
            return Promise.resolve(storedCount.count);
        }
        return Promise.resolve(0);
    }

    setCount(newCount: number): Promise<void> {
        const storedCount: StoredCount = {
            count: newCount,
        };
        localStorage.setItem('count', JSON.stringify(storedCount));
        return Promise.resolve();
    }
}

export default LocalCounterStorage;
