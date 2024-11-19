var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class MauiCounterStorage {
    getName() {
        return '.NET MAUI Counter Storage';
    }
    getCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const count = yield window.HybridWebView.InvokeDotNet("MauiCounterStorage_GetCount");
            return Promise.resolve(count);
        });
    }
    setCount(newCount) {
        return __awaiter(this, void 0, void 0, function* () {
            yield window.HybridWebView.InvokeDotNet("MauiCounterStorage_SetCount", [newCount]);
            return Promise.resolve();
        });
    }
}
window.getCounterStorageImplementation = () => {
    window.HybridWebView.SendRawMessage("About to construct the MauiCounterStorage instance.");
    return new MauiCounterStorage();
};
//# sourceMappingURL=mauiapp.js.map