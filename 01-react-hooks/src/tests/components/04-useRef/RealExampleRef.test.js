import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

import { renderHook, act } from '@testing-library/react-hooks';
describe('Pruebas en <RealExampleRef />', () => {

    const wrapper = shallow( <RealExampleRef /> );

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    test('debe mostrarse el componente <MultipleCustomHooks />', () => {
        expect( wrapper.find('button').simulate('click') );
        expect( wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
})