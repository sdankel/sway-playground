export const FUEL_GREEN = '#00f58c';

export const DEFAULT_CONTRACT = `contract;

abi TestContract {
    #[storage(write)]
    fn initialize_counter(value: u64) -> u64;

    #[storage(read, write)]
    fn increment_counter(amount: u64) -> u64;

    #[storage(read)]
    fn get_counter() -> u64;
}

storage {
    counter: u64 = 0,
}

impl TestContract for Contract {
    #[storage(write)]
    fn initialize_counter(value: u64) -> u64 {
        storage.counter = value;
        value
    }

    #[storage(read, write)]
    fn increment_counter(amount: u64) -> u64 {
        let incremented = storage.counter + amount;
        storage.counter = incremented;
        incremented
    }

    #[storage(read)]
    fn get_counter() -> u64 {
        storage.counter
    }
}`;
