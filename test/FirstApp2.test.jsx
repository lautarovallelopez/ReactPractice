import { render, screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Prueba en <FirstApp />', () => {
    const title = 'Este es mi titulo';
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });
    test('Debe mostrar el mensaje "Este es mi titulo"', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
    test('Debe mostrarse en un h4', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 4 }).innerHTML).toContain(title);
    });
});