import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders App so application can boot', () => {
    const wrapper = shallowMount(App)
    expect(wrapper).toBeTruthy()
  })
})
