import useLocalStorage from "./useLocalStorage";
import "./Theme.css";
const LightDarkMode = () => {
    const [theme, SetTheme] = useLocalStorage("theme", "dark");
    const ToggleTheme = () => {
        SetTheme(theme === "light" ? "dark" : "light");
    };
    // console.log(theme);
    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                {" "}
                <p>Hello World!</p>
                <button onClick={ToggleTheme}>Changing Theme</button>
            </div>
        </div>
    );
};

export default LightDarkMode;
