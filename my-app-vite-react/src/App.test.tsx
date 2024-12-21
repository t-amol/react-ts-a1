import { render, screen} from '@testing-library/react';
import renderer from "react-test-renderer";
import App from './App';

describe('App Component', () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("test snapshot", () => {
    render(<App />);
    const linkElement = screen.getByTitle(/apptitle/i);
    //const domTree = renderer.create(<App />).toJSON();
    expect(linkElement).toMatchSnapshot();
  });

});
