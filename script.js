const keyboard = document.querySelector('.keyboard');
const outputElement = document.querySelector('#output');
const textInput = document.querySelector('#textInput');
let latexOutput = '';

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Subscript', 'SuperScript', 'Single Overline', 'Double Overline', 'Dot', 'UnderDot', 'Single Underline', 'Curve', '⌣', 'p', 'S', 'R1', 'R2', 'G1', 'G2', 'M1', 'M2', 'P', 'D1', 'D2', ',', '.', ';', '-', '=', '(', ')', '\'', '"', '/'];

keys.forEach(key => {
    const keyElement = document.createElement('div');
    keyElement.classList.add('key');
    keyElement.textContent = key;
    keyElement.addEventListener('click', () => {
        const cursorPosition = textInput.selectionStart; // Get cursor position
        const textBeforeCursor = textInput.value.substring(0, cursorPosition);
        const textAfterCursor = textInput.value.substring(cursorPosition);

        if (key === 'Single Overline') {
            textInput.value = textBeforeCursor + '\\overline{}' + textAfterCursor; // Add \overline{} template
            latexOutput = textBeforeCursor + '\\overline{}' + textAfterCursor;
            renderLatexOutput();
            textInput.selectionStart = cursorPosition + 10; // Move cursor position
            textInput.selectionEnd = cursorPosition + 10;
        } else if (key === 'Double Overline') {
            textInput.value = textBeforeCursor + '\\overline{\\overline{}}' + textAfterCursor; // Add \overline{\overline{}} template
            latexOutput = textBeforeCursor + '\\overline{\\overline{}}' + textAfterCursor;
            renderLatexOutput();
            textInput.selectionStart = cursorPosition + 20; // Move cursor position
            textInput.selectionEnd = cursorPosition + 20;
        } else if (key === 'Single Underline') {
            textInput.value = textBeforeCursor + '\\underline{}' + textAfterCursor; // Add \underline{} template
            latexOutput = textBeforeCursor + '\\underline{}' + textAfterCursor;
            renderLatexOutput();
            textInput.selectionStart = cursorPosition + 11; // Move cursor position
            textInput.selectionEnd = cursorPosition + 11;
        } else if (key === 'Subscript') {
            textInput.value = textBeforeCursor + '_{}' + textAfterCursor; // Modified: Use _{} template for subscript
            latexOutput = textBeforeCursor + '_{}' + textAfterCursor;
            renderLatexOutput();
            textInput.selectionStart = cursorPosition + 2; // Modified: Move cursor position
            textInput.selectionEnd = cursorPosition + 2;
        } else if (key === 'SuperScript') {
            textInput.value = textBeforeCursor + '^{}' + textAfterCursor; // Modified: Use ^{} template for superscript
            latexOutput = textBeforeCursor + '^{}' + textAfterCursor;
            renderLatexOutput();
            textInput.selectionStart = cursorPosition + 2; // Modified: Move cursor position
            textInput.selectionEnd = cursorPosition + 2;
        } else if (key === ' ') {
            textInput.value = textBeforeCursor + ' ' + textAfterCursor; // Add space
            latexOutput = textBeforeCursor + ' ' + textAfterCursor;
            renderLatexOutput();
            textInput.selectionStart = cursorPosition + 1; // Move cursor position
            textInput.selectionEnd = cursorPosition + 1;
        } else if (key === 'Dot') { 
            textInput.value = textBeforeCursor + '\\dot{}' + textAfterCursor; // Add \dot{} template
            latexOutput = textBeforeCursor + '\\dot{}' + textAfterCursor;
            renderLatexOutput();
            textInput.selectionStart = cursorPosition + 5; // Move cursor position
            textInput.selectionEnd = cursorPosition + 5;
        } else if (key === 'UnderDot') { 
            textInput.value = textBeforeCursor + '\\underset{\\cdot}{\\text{}}' + textAfterCursor; 
            latexOutput = textBeforeCursor + '\\underset{\\cdot}{\\text{}}' + textAfterCursor;
            renderLatexOutput();
            textInput.selectionStart = cursorPosition + 23; // Move cursor position
            textInput.selectionEnd = cursorPosition + 23;
        } else if (key === 'Curve') { 
            textInput.value = textBeforeCursor + '\\widetilde{}' + textAfterCursor; // Add \widetilde{} template
            latexOutput = textBeforeCursor + '\\widetilde{}' + textAfterCursor;
            renderLatexOutput();
            textInput.selectionStart = cursorPosition + 11; // Move cursor position
            textInput.selectionEnd = cursorPosition + 11;
        } else if (key === '⌣') { 
            textInput.value = textBeforeCursor + '\\underset{\\smile}{\\text{}}' + textAfterCursor; // Add \underset{\smile}{\text{}} template
            latexOutput = textBeforeCursor + '\\underset{\\smile}{\\text{}}' + textAfterCursor;
            renderLatexOutput();
            textInput.selectionStart = cursorPosition + 24; // Move cursor position
            textInput.selectionEnd = cursorPosition + 24;
        }  else {
            textInput.value = textBeforeCursor + key + textAfterCursor; // Append key to text input
            latexOutput = textBeforeCursor + key + textAfterCursor;
            textInput.selectionStart = cursorPosition + key.length; // Move cursor position
            textInput.selectionEnd = cursorPosition + key.length;
            renderLatexOutput();
        }
    });
    keyboard.appendChild(keyElement);
});

function renderLatexOutput() {
    outputElement.innerHTML = '$$' + latexOutput + '$$';
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, outputElement]);
}

function downloadLatexOutputAsImage() {
    html2canvas(document.querySelector("#output"), {
        allowTaint: true,
        useCORS: true
    }).then(function(canvas) {
        const imgData = canvas.toDataURL('image/png');
        const tempLink = document.createElement('a');
        tempLink.download = 'latex-output.png';
        tempLink.href = imgData;
        tempLink.click();
    });
}


function copyLatexOutputAsImage() {
    html2canvas(document.querySelector("#latexOutputContainer"), {
        allowTaint: true,
        useCORS: true
    }).then(function(canvas) {
        // Copy the canvas image to the clipboard
        canvas.toBlob(function(blob) {
            navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
            .then(function() {
                alert('Image copied to clipboard!');
            }) 
            .catch(function(error) {
                console.error('Error copying image:', error);
                alert('Failed to copy image.');
            });
        }, 'image/png');
    }).catch(function(error) {
        console.error('Error creating canvas:', error);
        alert('Failed to create image.');
    });
}




// Update latexOutput when user edits the text input
textInput.addEventListener('input', () => {
    latexOutput = textInput.value;
    renderLatexOutput();
});

// Function to copy LaTeX code from the textarea to clipboard
function copyLatexCode() {
    const latexCode = document.querySelector('#textInput').value;
    const textarea = document.createElement('textarea');
    textarea.value = latexCode;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('LaTeX code copied to clipboard!');
}

// Event listener for the copy button
document.querySelector('#copyButton').addEventListener('click', copyLatexCode);

document.querySelector('#copyImageButton').addEventListener('click', copyLatexOutputAsImage);

document.querySelector('#downloadImageButton').addEventListener('click', downloadLatexOutputAsImage);