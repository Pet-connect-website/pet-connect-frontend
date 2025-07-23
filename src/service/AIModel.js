export async function getGPTResponse(message) {
    const response = await fetch("http://localhost:3000/chat/postQ", { // adjust if backend URL/port different
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        const err = await response.text();
        throw new Error(err || "Failed to get GPT response");
    }

    const data = await response.json();
    return data.reply;
}