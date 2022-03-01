import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe('Login Logic Tests', () => {
    it("Login Button Click Works", async () => {
        const wrapper = mount(Login)
        const button = wrapper.find('#loginButton')
        const erroMessage = wrapper.find('errorFirebase')
        button.trigger('click');
        expect(wrapper.emitted('login-clicked'))
  })






})



