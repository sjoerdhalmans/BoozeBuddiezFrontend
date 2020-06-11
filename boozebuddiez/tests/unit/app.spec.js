import {  createLocalVue ,shallowMount, mount } from '@vue/test-utils'
import app from '../../src/App.vue'
import router from '../../src/store'

describe('App.vue', () =>{
    test('Is a vue instance', () =>{
        const wrapper = shallowMount(app, {

        })
        expect(wrapper.isVueInstance()).toBeTruthy()
    });
});

