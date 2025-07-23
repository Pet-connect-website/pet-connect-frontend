import { useState } from "react";
import {getGPTResponse} from "../service/AImodel.js";

export default function ChatBox() {
    const [userInput, setUserInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSend = async () => {
        if (!userInput.trim()) return;

        setLoading(true);
        setError("");
        setResponse("");

        try {
            const reply = await getGPTResponse(userInput);
            setResponse(reply);
        } catch (err) {
            setError(err.message || "Error calling GPT");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
            <h2>Chat with GPT</h2>
            <textarea
                rows={4}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message here..."
                style={{ width: "100%", padding: 10 }}
            />
            <button
                onClick={handleSend}
                disabled={loading}
                style={{
                    marginTop: 10,
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: 5,
                    cursor: "pointer",
                }}
            >
                {loading ? "Thinking..." : "Send"}
            </button>

            {response && (
                <div
                    style={{
                        marginTop: 20,
                        backgroundColor: "#f5f5f5",
                        padding: 15,
                        borderRadius: 5,
                        whiteSpace: "pre-wrap",
                    }}
                >
                    <strong>Response:</strong> {response}
                </div>
            )}

            {error && (
                <div style={{ marginTop: 20, color: "red" }}>
                    <strong>Error:</strong> {error}
                </div>
            )}
        </div>
    );
}