function setPrompt(element){

    document.getElementById("prompt").value =
    element.innerText;

}

async function generateImage(){

    const prompt =
    document.getElementById("prompt").value;

    const output =
    document.getElementById("output");

    const downloadBtn =
    document.getElementById("downloadBtn");

    if(prompt === ""){
        alert("Please enter a prompt");
        return;
    }

    output.style.display = "block";

    output.src =
    "https://via.placeholder.com/512?text=Generating...";

    const encodedPrompt =
    encodeURIComponent(prompt);

    const imageURL =
    `https://image.pollinations.ai/prompt/${encodedPrompt}`;

    output.src = imageURL;

    downloadBtn.href = imageURL;
}