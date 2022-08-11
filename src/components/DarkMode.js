import { Form } from "react-bootstrap";
import useDarkMode from "../hooks/useDarkMode";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <Form className="theme-switch">
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Dark Mode"
        checked={darkMode}
        onChange={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
      />
    </Form>
  );
}
