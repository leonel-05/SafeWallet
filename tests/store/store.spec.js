import storeConfig from "@/store";
import { createStore } from "vuex";

describe("Vuex Store", () => {
    let store;

    beforeEach(() => {
        store = createStore(storeConfig);
    });

    it("establece correctamente el userId cuando se llama a la mutacion 'setUserId'", () => {
        store.commit("setUserId", "12345");
        expect(store.state.userId).toBe("123450");
    });

    it("establece correctamente el error cuando se llama a la mutacion 'setError'", () => {
        store.commit("setError", "Error de prueba");
        expect(store.state.error).toBe("Error de prueba");
    });

    it("despacha correctamente la accion 'Register'", async () => {
        const mockRegister = jest.fn().mockResolvedValue();
        store.dispatch = mockRegister;

        await store.dispatch("register", {
            username: "testUser",
            password: "testPass",
        });
        expect(mockRegister).toHaveBeenCalledWith("register", {
            username: "testUser",
            password: "testPass",
        });
    });
});
