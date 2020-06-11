import { mount, shallowMount } from '@vue/test-utils'
import Rating from '../../src/views/Rating.vue'
import store from '../../src/store'

const wrapper = mount(Rating);
describe('test.vue', () =>{
    test('setup correctly', () =>{
        expect(wrapper.html()).toContain('My bar ratings')
    })
})