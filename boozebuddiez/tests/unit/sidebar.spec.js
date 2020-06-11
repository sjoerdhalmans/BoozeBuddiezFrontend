import {  createLocalVue ,shallowMount, mount } from '@vue/test-utils'
import SideBar from '../../src/components/sidebar/SideBar.vue'
import Vuex from 'vuex'
import store from '../../src/store'

describe('SideBar.vue', () =>{
    const localVue = createLocalVue()
    localVue.use(Vuex)

    test('Is a vue instance', () =>{
        const wrapper = shallowMount(SideBar, {

        })
        expect(wrapper.isVueInstance()).toBeTruthy()
    });

    test('Is sidebar name Search a bar! ', () =>{
        const sideBarName = "Search a bar!"
        const wrapper = mount(SideBar, {
            store,
            localVue
        })
        expect(wrapper.html()).toContain(sideBarName)
    })

    test('Is sidebar name My Timeline ', () =>{
        const sideBarName = "My Timeline"
        const wrapper = mount(SideBar, {
            store,
            localVue,
            data(){
                return{
                    chosenSideBar: 1
                }
            }
        })
        expect(wrapper.html()).toContain(sideBarName)
    })

    test('Is sidebar name My Friends', () =>{
        const sideBarName = "My Friends"
        const wrapper = mount(SideBar, {
            store,
            localVue,
            data(){
                return{
                    chosenSideBar: 2
                }
            }
        })
        expect(wrapper.html()).toContain(sideBarName)
    })
})

