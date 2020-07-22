import { useForm } from '../../hooks/useForm';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Pruebas en useForm', () => {


    const initialForm = {
        name: 'Zaquiel',
        email: 'zaquihex@gmail.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm());
        const [values, handleInputChange, reset] = result.current
        expect(values).toEqual({});
    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        act(() => {
            handleInputChange({ target: { name: 'name', value: 'Zaquiel modified' } });
        })
        const [newValues: values] = result.current;

        expect(newValues).toEqual({...initialForm, name:'Zaquiel modified'});
    });

    test('debe de re-establecer el formulario con RESET', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange] = result.current;
        act(() => {
            handleInputChange({ target: { name: 'name', value: 'Zaquiel modified' } });
        })
        const [newValues: values, newHandle:handleInputChange,reset] = result.current;

        expect(newValues.name).toEqual('Zaquiel modified');
        act(() => {
            reset();
        })
        const [newValuesReset: values] = result.current;
        expect(newValuesReset.name).toEqual('Zaquiel');
    });
})