import React from 'react';
import {shallow} from 'enzyme';
import {TodoAdd} from "../../../components/08-useReducer/TodoAdd";
import {demoTodos} from "../../fixtures/demoTodos";


describe('Pruebas en <TodoAdd />', ()=> {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            todoListItem={demoTodos}
            handleAddTodo={handleAddTodo}
        />
    );


    test('No debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('debe de llamar la función handleAddTodo', () => {

        const value = 'Aprender React';

        const input = wrapper.find('input').simulate('change', {
            target:{
                value: value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
        expect(wrapper.find('input').prop('value')).toBe('');
    });

});