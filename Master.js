document.querySelector('.hamburger').addEventListener('click', function() {
    window.location.href = "/pro"; 
});


	document.getElementById("decrypt-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const url = document.getElementById("url").value;
    const password = document.getElementById("password").value;
    const algorithm = document.getElementById("algorithm").value;
    const spinner = document.getElementById("spinner");
    const resultDiv = document.getElementById("result");
    const resultText = document.getElementById("result-text");

    // List of algorithms that do not require a password
    const noPasswordAlgorithms = ["BASE-N7", "MasterDevz", "MasterDevznew", "SylnetDev", "AlaminDev", "DexBuild"];

    // Validation: Check if URL is empty or password is required but not provided
    if (!url || (!noPasswordAlgorithms.includes(algorithm) && !password)) {
        alert("Please enter the URL, password (if required), and select an algorithm.");
        return;
    }

    // Show the spinner when processing
    spinner.style.display = "block";
    resultDiv.style.display = "none"; // Hide result div during processing

    // Perform the decryption request
    fetch("/decrypt", {
            method: "POST",
            body: new URLSearchParams(new FormData(event.target)),
        })
        .then(response => response.json())
        .then(data => {
            // Hide the spinner when process is complete
            spinner.style.display = "none";
            if (data.decrypted) {
                resultText.textContent = data.decrypted;
                resultDiv.style.display = "block"; // Show the result div
            } else {
                resultText.textContent = "Error: " + data.error;
                resultDiv.style.display = "block"; // Show the result div with error
            }
        })
        .catch(error => {
            // Hide the spinner if an error occurs
            spinner.style.display = "none";
            console.error("Error:", error);
            showToast('Failed url copy text. Please try again.');
            //alert("An error occurred while decrypting. Please try again.");
        });
});

// Handle algorithm selection change
document.getElementById("algorithm").addEventListener("change", function() {
    const passwordContainer = document.querySelector(".password-container");
    const passwordInput = document.getElementById("password");

    // List of algorithms that do not require a password
    const noPasswordAlgorithms = ["BASE-N7", "MasterDevz", "MasterDevznew", "SylnetDev", "AlaminDev", "DexBuild"];

    // Check if the selected value is in the list of no-password algorithms
    if (noPasswordAlgorithms.includes(this.value)) {
        // Hide the password input
        passwordContainer.style.display = "none";
        passwordInput.removeAttribute("required");
    } else {
        // Show the password input for other algorithms
        passwordContainer.style.display = "flex";
        passwordInput.setAttribute("required", "required");
    }
});


document.getElementById("delete-button").addEventListener("click", function() {
    // Clear the input fields
    document.getElementById("url").value = ""; // Clear URL input
    document.getElementById("password").value = ""; // Clear password input
    document.getElementById("algorithm").selectedIndex = 0; // Reset algorithm selection

    // Hide and clear the result
    const resultDiv = document.getElementById("result");
    const resultText = document.getElementById("result-text");
    resultDiv.style.display = "none"; // Hide the result section
    resultText.textContent = ""; // Clear the result text content

    // Hide the spinner if it's visible
    const spinner = document.getElementById("spinner");
    if (spinner) {
        spinner.style.display = "none"; // Hide the spinner if it's visible
    }
});

document.getElementById('copy-button').addEventListener('click', () => {
    const resultTextElement = document.getElementById('result-text');
    const textToCopy = resultTextElement.textContent.trim(); // Use trim() to remove any extra whitespace
    if (textToCopy === "") {
        showToast('No result to copy!');
        return; // Exit the function if there's no text
    }
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Text copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        showToast('Failed to copy text. Please try again.');
    });
});

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Handle save result to file
document.getElementById("save-button").addEventListener("click", function() {
    const resultText = document.getElementById("result-text").textContent;
    if (!resultText || resultText.trim() === "") {
        showToast("Result cannot be empty.");
        return;
    }
    const blob = new Blob([resultText], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "result.txt");
});

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000); // Adjust the time as needed
}

// Trigger the algorithm change event to ensure the password field is correct on load
document.getElementById("algorithm").dispatchEvent(new Event("change"));

// Open the modal when the "Show All Links" button is clicked
document.getElementById('openModalBtn').onclick = function() {
    document.getElementById('myModal').style.display = "block";
}

// Close the modal when the user clicks the close button inside the modal
document.getElementById('closeModalBtn').onclick = function() {
    document.getElementById('myModal').style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}

// Function to copy URL to clipboard
function copyToClipboard(url) {
    var tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Show toast message
    var toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        if (!link.target || link.target !== '_blank') {
            e.preventDefault();
            loader.style.display = 'block';
            setTimeout(() => {
                window.location.href = link.href;
            }, 150); // Simulate loading delay
        }
    });
});

// Data URL dan nama aplikasi
const urlData = [
    { name: "APNA Tunnel Lite", url: "https://amtun.xyz/updater/1df3d3112f9077493387694d84b2de" },
    { name: "APNA VPN", url: "https://amtun.xyz/updater/e39f8929d22f1376617d80e34f543f" },
    { name: "APNA SHIELD PRO", url: "https://shieldpanel.xyz/updater/92b6d6f57efe22b51fb93d35a6011a" },
    { name: "APNA TUNNEL", url: "https://amtun.xyz/updater/1df3d3112f9077493387694d84b2de" },
    { name: "AM TUNNEL LITE VPN", url: "https://rozarvpn.xyz/updater/bde7e4f4329872cf81727818c84c32" },
    { name: "BD NET VPN", url: "https://raw.githubusercontent.com/panigbatanc/BDNET2023/refs/heads/main/JSONKYLE" },
    { name: "Omanova VPN", url: "https://raw.githubusercontent.com/panigbatanc/Omanova2024/main/JSONKYLE" },
    { name: "UrsaNetPRO", url: "https://raw.githubusercontent.com/panigbatanc/UrsaNetPRO/main/JSONSEPT132024" },
    { name: "FNF TUNNEL BD", url: "https://arifsudi.xyz/updater/da5ab238d41b33f4425fd8793eda83" },
    { name: "MTM Tunnel Lite", url: "https://tmtunnel.com/api/app?json=cf41aecd0f6788138f71" },
    { name: "TRM Tunnel", url: "https://trmpanel.xyz/updater/5038132a9623b61feeb496ed84ba59" },
    { name: "TR Tunnel VPN", url: "https://sarkarpanel.xyz/updater/cb4d629123e01e911467838dfeb5fc" },
    { name: "TSS TUNNEL", url: "https://habibipro.xyz/api/app?json=3ec1d9e370d9e45a9748" },
    { name: "MXT Tunnel Lite", url: "https://topnetpanel.xyz/updater/497d3d85079382742dbf1923708c0f" },
    { name: "Mx Tunnel PRO", url: "https://rasedpanel.xyz/updater/b061a27fe98af618a8e73f94840720" },
    { name: "Taj Tunnel Pro", url: "https://sarkarpanel.xyz/updater/d2182556af384888505d604e3f6f00" },
    { name: "Fx Tunnel", url: "https://fxpanel.xyz/updater/cbf09fc8f7994daaa96691282b2dd9" },
    { name: "Jx Tunnel Lite", url: "https://saudinet.xyz/api/app?json=f80118a2736d25235844" },
    { name: "TG Tunnel Lite", url: "https://rasedpanel.xyz/updater/34751a4228892b1ce87173b4d5ebde" },
    { name: "XMAXVIP", url: "https://xshieldtun.xyz/updater/40d2aeacb9a9e9db46503aded122eb" },
    { name: "Mx Tunnel", url: "https://sarkarpanel.xyz/updater/d2182556af384888505d604e3f6f00" },
    { name: "XTM Tunnel", url: "https://saudinet.xyz/api/app?json=f80118a2736d25235844" },
    { name: "4U TUNNEL PRO", url: "https://ctxfitpro.xyz/updater/99ef47d1815d576fb4cce0e176f0dc" },
    { name: "HX Tunnel VPN", url: "https://ctxfitpro.xyz/updater/740e20d27826f80a81ccfd7796d838" },
    { name: "HAMARA TUNNEL", url: "https://apnashadow.xyz/updater/258acc668f3a13c702f66fe8ff15d9" },
    { name: "GT Tunnel Pro", url: "https://topnetpanel.xyz/updater/4da37074789039f11c958d01edb9a5" },
    { name: "MH Tunnel Proxy Vip", url: "https://freedomplus.pw/updater/310161d57837d6c0f7c70a822ad1d8" }
];

// Referensi elemen ul
const urlList = document.getElementById("urlList");

// Membuat elemen daftar secara dinamis
urlData.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.name}</strong> <button onclick="copyToClipboard('${item.url}')">Copy URL</button>`;
    urlList.appendChild(li);
});
