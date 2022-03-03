import Graph from '@/components/Graph.vue'
import Header from '@/components/Header.vue'
import { shallowMount } from '@vue/test-utils';

describe('Testing Graph Component props', () => {
    const wrapper = shallowMount(Graph, {
        propsData: {
            graphNameX: "X",
            graphNameY: "Y",
            graphDataX: '[1,1,1]',
            graphDataY: '[2,2,2]',
            graphChart: 'Chart',


        }
    });

    it('Checks the prop graph name X', () => {
        expect(wrapper.props().graphNameX).toBe('X');
    })

    it('Checks the prop graph name Y', () => {
        expect(wrapper.props().graphNameY).toBe('Y');
    })

    it('Checks the prop graph data X', () => {
        expect(wrapper.props().graphDataX).toBe('[1,1,1]');
    })

    it('Checks the prop graph data Y', () => {
        expect(wrapper.props().graphDataY).toBe('[2,2,2]');
    })

    it('Checks the prop graph chart data', () => {
        expect(wrapper.props().graphChart).toBe('Chart');
    })
})

describe('Testing Toggle Component props', () => {
    const wrapper = shallowMount(Header, {
        propsData: {
            mode: "dark",
        }
    });

    it('Checks the prop mode', () => {
        expect(wrapper.props().mode).toBe('dark');
    })


})