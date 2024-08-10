import { useEffect, useState } from "react";
import "./style.css";
const RandomColor = () => {
    const [typeOfColor, SetTypeOfColor] = useState("hex");
    const [color, SetColor] = useState("#00000");
    function randomColorUtility(len) {
        return Math.floor(Math.random() * len);
    }
    const handleCreateRandomHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        console.log(hexColor);
        SetColor(hexColor);
    };
    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        SetColor(`rgb(${r},${g}, ${b})`);
    }

    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor]);
    return (
        <div className="container" style={{ background: color }}>
            <button onClick={() => SetTypeOfColor("hex")}>
                Create HEX Color
            </button>
            <button onClick={() => SetTypeOfColor("rgb")}>
                Create RGB Color
            </button>
            <button
                onClick={
                    typeOfColor === "hex"
                        ? handleCreateRandomHexColor
                        : handleCreateRandomRgbColor
                }
            >
                Generate Random Color
            </button>
            <div className="color">
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
};

export default RandomColor;
