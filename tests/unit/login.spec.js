import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe('Login Logic Tests', () => {
    it("reveals a notification when submitted", async () => {
        const wrapper = mount(Login)

        const email = 'name@mail.com'
        const password = 'pass'
        const erroMessage = wrapper.find("errorFirebase")

        await wrapper.find('input[type=email]').setValue(email)
        await wrapper.find('input[type=password]').setValue(password)

        await wrapper.find('form').trigger('submit.prevent')
    
        expect(wrapper.find("errorFirebase").text())
          .toBe("")

          expect(erroMessage.isVisible()).toBe(true)
      })

})



