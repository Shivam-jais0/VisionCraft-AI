async function generateImage(){

    const prompt = document.getElementById("prompt").value;

    const image = document.getElementById("output");

    image.src =
    `https://image.pollinations.ai/prompt/${prompt}`;

}