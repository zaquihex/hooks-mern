import React from 'react';

import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';

import { shallow} from 'enzyme';
import { demoTodos} from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem index={0} todo={demoTodos[0]} handleDelete={handleDelete} handleToggle={handleToggle}/>
);

    test('debe de llamar la función borrar', ()=> {
        // jest.fn()
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de llamar la función toggle', ()=> {
        // jest.fn()
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de mostrar texto correctamente', ()=> {
        // jest.fn()
        const p = wrapper.find('p');
        expect(p.text()).toBe(`1. ${demoTodos[0].desc}`)
    });

    test('debe de tener la clase completa si el TODO.done = true', ()=> {
        // jest.fn()
        const todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(
            <TodoListItem  todo={todo} />);
        console.log(wrapper.html());
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });



});