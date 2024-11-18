var MauiCounterStorage = /** @class */ (function () {
    function MauiCounterStorage() {
        this._counter = 0;
    }
    MauiCounterStorage.prototype.getName = function () {
        return '.NET MAUI Counter Storage';
    };
    MauiCounterStorage.prototype.getCount = function () {
        window.HybridWebView.SendRawMessage('Hello from TS!');
        return this._counter;
    };
    MauiCounterStorage.prototype.setCount = function (newCount) {
        this._counter = newCount;
    };
    return MauiCounterStorage;
}());
window.getCounterStorageImplementation = function () {
    return new MauiCounterStorage();
};
//# sourceMappingURL=mauiapp.js.map