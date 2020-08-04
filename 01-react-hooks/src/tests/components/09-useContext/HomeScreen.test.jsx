import React, {useContext} from 'react';
import {shallow, mount} from 'enzyme';
import {HomeScreen} from "../../../components/09-useContext/HomeScreen";
import {UserContext} from "../../../components/09-useContext/UserContext";


describe('Pruebas en <HomeScreen />', ()=> {
    const user = {
        user: 'zaquiel',
        email: 'zaquihex@gmail.com'
    };
    const wrapper = mount(
        <UserContext.Provider value={{user}}>
        <HomeScreen />
        </UserContext.Provider>);

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

});