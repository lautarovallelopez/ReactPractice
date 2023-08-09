import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Prueba en <FirstApp />', () => {
    test('Debe hacer match con el snapshot', () => {
        const title = 'Este es mi titulo';
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el título en un h4', () => {
        const title = 'Este es mi titulo';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });
});