import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Charts from '@/components/Charts.vue'


describe('Form Emmits && Clicks', () => {
    it("Login button", async () => {
        const wrapper = shallowMount(Login)
        const button = wrapper.find('#loginButton')
        button.trigger('click');
        expect(wrapper.emitted('login-clicked'))
  })

  it("Register button", async () => {
    const wrapper = shallowMount(Register)
    const button = wrapper.find('.registerButton')
    button.trigger('click');
    expect(wrapper.emitted('register-clicked'))
    
})

it("Graph button", async () => {
    const wrapper = shallowMount(Charts)
    const button = wrapper.find('.graphButton')
    button.trigger('click');
    
})



})








