async function generateImage() {

    const prompt =
    document.getElementById("prompt").value;

    const output =
    document.getElementById("output");

    // Loading placeholder
    output.src =
    "https://via.placeholder.com/512?text=Generating...";

    // Encode prompt properly
    const encodedPrompt =
    encodeURIComponent(prompt);

    // Generate image
    output.src =
    `https://image.pollinations.ai/prompt/${encodedPrompt}`;
}