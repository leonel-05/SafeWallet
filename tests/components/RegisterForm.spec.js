import { shallowMount } from "@vue/test-utils";
import RegisterForm from "@/components/Auth/RegisterForm.vue";
import Vuex from "vuex";


describe("RegisterFrom.vue", () => {
    let store;
    let actions;

    beforeEach(() => {
        actions = {
            register: jest.fn().mockResolvedValue(),
        };
        store = new Vuex.Store({
            state: {
                error: null,
            },
        });
    });

    it("renderiza correctamente la vista de registro", () => {
        const wrapper = shallowMount(RegisterForm, { store });
        expect(wrapper.find("h2").text()).toBe("Registrar Nuevo Ususario");
    });

    it("llama a la accion 'register' al enviar el formulario", async () => {
        const wrapper = shallowMount(RegisterForm, { store });
        wrapper.setData({ username: "usuarioTest", password: "contraseñaTest" });

        await wrapper.find("form").trigger("submit.prevent");
        expect(actions.register).toHaveBeenCalledWith(expect.anything(), {
            username: "usuarioTest",
            password: "contraseñaTest",
        });
    });

    it("muestra un mensaje de error si la accion de registro falla", async () => {
        actions.register.mockRejectedValue();//simula falla
        const wrapper = shallowMount(RegisterForm, { store });

        wrapper.setData({ username: "usuarioTest", password: "contraseñaTest" });
        await wrapper.find("form").trigger("submit.prevent");

        expect(wrapper.text()).toContain(
            "Error al registrarse, Intentelo de nuevo."
        );
    });
});
