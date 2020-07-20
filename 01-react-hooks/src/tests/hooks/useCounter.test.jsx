import { useCounter } from '../../hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';
describe('Pruebas de UseCounter', () => {

    test('debe devolver valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('debe de tener el counter en 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('debe incrementar un valor', () => {
        const { result } = renderHook(() => useCounter(10));
        const { increment } = result.current;
        act(() => {
            increment();
        })
        const { counter } = result.current;
        expect(counter).toBe(11);
    });

    test('debe decrementar un valor', () => {
        const { result } = renderHook(() => useCounter(10));
        const { decrement } = result.current;
        act(() => {
            decrement();
        })
        const { counter } = result.current;
        expect(counter).toBe(9);
    });

    test('debe decrementar un valor', () => {
        const { result } = renderHook(() => useCounter(10));
        const { decrement, reset } = result.current;
        act(() => {
            decrement();
        })
        const { counter } = result.current;
        expect(counter).toBe(9);
        act(() => {
            reset();
        })
        const { counter: counterReset } = result.current;
        expect(counterReset).toBe(10);
    });
});