import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

const value = 100;
describe('Prueba Counter App', () => {
    test('Hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
    });
    test('Debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={value} />);
        expect(screen.getByText(value)).toBeTruthy();
    });
    test('Debe incrementar con el botón +1', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(value + 1)).toBeTruthy();
    });
    test('Debe decrementar con el botón -1', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(value - 1)).toBeTruthy();
    });
    test('Debe funcionar el boton de reset', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText(value)).toBeTruthy();
    });
});