import { mount, shallowMount ,createLocalVue} from '@vue/test-utils'
import resultCard from '../../src/components/sidebar/MapSideBar/resultCard.vue'
import store from '../../src/store'
import Vuex from 'vuex'


describe('test.vue', () =>{
    const localVue = createLocalVue()
    localVue.use(Vuex)
    test('Is a vue instance', () =>{
        const wrapper = mount(resultCard, {
            store,
            localVue,
            bar: {
              name: 'yeet',
              zipcode: '123',
              adress: 'teststraat 3',
              telephoneNumber:'1236456978',
            }
          })
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})