import { shallowMount } from "@vue/test-utils";
import LoginForm from "@/components/Auth/LoginForm.vue";

describe("LoginForm.vue", () => {
    it("renderiza correctamente el formulario de login", () => {
        const wrapper = shallowMount(LoginForm);
        expect(wrapper.find("h2").text()).toBe("Iniciar Sesión");
    });

    it("tiene un boton de ingresar", () => {
        const wrapper = shallowMount(LoginForm);
        const button = wrapper.find("button[type='submit']");
        expect(button.exists()).toBe(true);
    });
});
