import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
    const [qrCode, SetQrCode] = useState("");
    const [input, Setinput] = useState("");
    const handleGenerateQrCode = () => {
        SetQrCode(input);
    };
    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input
                    style={{
                        fontSize: "20px",
                        width: "280px",
                        border: "1px solid",
                        padding: "5px",
                    }}
                    type="text"
                    name="Qr-Code"
                    placeholder="Enter URl or any Value"
                    onChange={(e) => Setinput(e.target.value)}
                ></input>
                <button
                    disabled={input && input.trim() !== "" ? false : true}
                    onClick={handleGenerateQrCode}
                >
                    Generate
                </button>
            </div>
            <div>
                <QRCode
                    id="qr-code-value"
                    value={qrCode}
                    size={400}
                    bgColor="white"
                />
            </div>
        </div>
    );
};

export default QRCodeGenerator;
