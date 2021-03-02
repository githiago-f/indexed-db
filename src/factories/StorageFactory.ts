/**
 * @example StorageFactory(Engine);
 */

export abstract class StorageFactory {
    private storageEngine: any;

    constructor(engine: any) {
        this.storageEngine = engine;
    }

    /// access data methods that will be implemented in
    /// engine definition
    public abstract get();
}