import Login from '@/views/Login.vue';
import Register from '@/views/register.vue';
import Charts from '@/components/charts.vue';
import { mount } from '@/vue/test-utils';

describe('Form Emmits && Clicks', () => {
    it("Login button", async () => {
        const wrapper = mount(Login)
        const button = wrapper.find('#loginButton')
        button.trigger('click');
        expect(wrapper.emitted('login-clicked'))
  })

  it("Register button", async () => {
    const wrapper = mount(Register)
    const button = wrapper.find('.registerButton')
    button.trigger('click');
    expect(wrapper.emitted('register-clicked'))
    
})

it("Graph button", async () => {
    const wrapper = mount(Charts)
    const button = wrapper.find('.graphButton')
    button.trigger('click');
    
})



})








