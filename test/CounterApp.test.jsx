import { render, screen } from "@testing-library/react";
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
});