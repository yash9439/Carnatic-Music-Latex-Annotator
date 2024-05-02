const keyboard = document.querySelector('.keyboard');
const keyboard1 = document.querySelector('.keyboard1');
const textInput = document.querySelector('#textInput');
let textContent = ''; 

const group1Variants = {
    'a': ['a', 'ā','a̲', 'ã', 'ạ', 'ȧ'],
    'b': ['b', 'ḃ', 'ḅ', 'ḇ'],
    'c': ['c', 'ċ'],
    'd': ['d', 'ḋ', 'ḍ', 'ḏ', 'đ'],
    'e': ['e', 'ē', 'ė', 'ẹ'],
    'f': ['f', 'ḟ'],
    'g': ['g', 'ġ', 'ğ'],
    'h': ['h', 'ḣ', 'ḥ', 'ħ'],
    'i': ['i', 'ī', 'į', 'ị', 'ĩ'],
    'j': ['j'],
    'k': ['k', 'ḳ'],
    'l': ['l', 'ḷ', 'ḹ', 'ḻ'],
    'm': ['m', 'ṁ', 'ṃ'],
    'n': ['n', 'ñ', 'ṅ', 'ṇ', 'ṉ'],
    'o': ['o', 'ō', 'õ', 'ọ', 'ȯ'],
    'p': ['p', 'ṗ'],
    'q': ['q'],
    'r': ['r', 'ř', 'ṙ', 'ṛ', 'ṟ'],
    's': ['s', 'š', 'ṡ', 'ṣ', 'ṩ'],
    't': ['t', 'ṫ', 'ṭ'],
    'u': ['u', 'ū', 'ụ', 'ũ'],
    'v': ['v', 'ṽ', 'ṿ'],
    'w': ['w', 'ẇ'],
    'x': ['x', 'ẋ'],
    'y': ['y'],
    'z': ['z', 'ž', 'ż', 'ẓ', 'ẕ']
};

const group2Variants = {
    'A': ['A', 'Ā','A̲', 'Ã', 'Ạ', 'Ȧ'],
    'B': ['B', 'Ḃ', 'Ḅ', 'Ḇ'],
    'C': ['C', 'Ċ', 'Č'],
    'D': ['D', 'Ḋ', 'Ḍ', 'Ḏ'],
    'E': ['E', 'Ē', 'Ė', 'Ě', 'Ẹ'],
    'F': ['F', 'Ḟ'],
    'G': ['G', 'Ġ', 'Ğ'],
    'H': ['H', 'Ḣ', 'Ḥ', 'Ȟ', 'Ħ'],
    'I': ['I', 'Ī', 'İ', 'Ị', 'Ĩ'],
    'J': ['J'],
    'K': ['K', 'Ḳ'],
    'L': ['L', 'Ŀ', 'Ḷ', 'Ḹ', 'Ḻ'],
    'M': ['M', 'Ṁ', 'Ṃ'],
    'N': ['N', 'Ň', 'Ñ', 'Ṅ', 'Ṇ', 'Ṉ'],
    'O': ['O', 'Ō', 'Õ', 'Ọ', 'Ȯ'],
    'P': ['P', 'Ṗ'],
    'Q': ['Q'],
    'R': ['R', 'Ř', 'Ṙ', 'Ṛ', 'Ṟ'],
    'S': ['S', 'Š', 'Ṡ', 'Ṣ', 'Ṩ'],
    'T': ['T', 'Ṫ', 'Ṭ', 'Ť'],
    'U': ['U', 'Ū', 'Ụ', 'Ũ'],
    'V': ['V', 'Ṽ', 'Ṿ'],
    'W': ['W', 'Ẇ', 'Ẉ'],
    'X': ['X', 'Ẋ'],
    'Y': ['Y', 'Ỵ'],
    'Z': ['Z', 'Ž', 'Ż', 'Ẓ', 'Ẕ']
};

// Creating base key buttons for Group 1
Object.keys(group1Variants).forEach(baseKey => {
    const baseKeyElement = document.createElement('div');
    baseKeyElement.classList.add('key');
    baseKeyElement.textContent = baseKey;
    baseKeyElement.addEventListener('click', () => {
        createVariantButtons(group1Variants[baseKey]);
    });
    keyboard.appendChild(baseKeyElement);
});


// Creating base key buttons for Group 2
Object.keys(group2Variants).forEach(baseKey => {
    const baseKeyElement = document.createElement('div');
    baseKeyElement.classList.add('key');
    baseKeyElement.textContent = baseKey;
    baseKeyElement.addEventListener('click', () => {
        createVariantButtons1(group2Variants[baseKey]);
    });
    keyboard1.appendChild(baseKeyElement);
});

// Function to create variant buttons
function createVariantButtons(variants) {
    // Clear existing buttons
    keyboard.innerHTML = '';

    // Create variant buttons for the selected base key
    variants.forEach(variant => {
        const variantKeyElement = document.createElement('div');
        variantKeyElement.classList.add('key');
        variantKeyElement.textContent = variant;
        variantKeyElement.addEventListener('click', () => {
            textContent += variant; // Update text box content variable
            textInput.value += variant;
            console.log("Updated textContent:", textContent); // Log updated textContent
        });
        keyboard.appendChild(variantKeyElement);
    });

    // Add back button
    const backButton = document.createElement('div');
    backButton.classList.add('key');
    backButton.textContent = '←';
    backButton.addEventListener('click', () => {
        // Go back to base key buttons
        keyboard.innerHTML = '';

        // Creating base key buttons for Group 1
        Object.keys(group1Variants).forEach(baseKey => {
            const baseKeyElement = document.createElement('div');
            baseKeyElement.classList.add('key');
            baseKeyElement.textContent = baseKey;
            baseKeyElement.addEventListener('click', () => {
                createVariantButtons(group1Variants[baseKey]);
            });
            keyboard.appendChild(baseKeyElement);
        });

    });
    keyboard.appendChild(backButton);
}


// Function to create variant buttons
function createVariantButtons1(variants) {
    // Clear existing buttons
    keyboard1.innerHTML = '';

    // Create variant buttons for the selected base key
    variants.forEach(variant => {
        const variantKeyElement = document.createElement('div');
        variantKeyElement.classList.add('key');
        variantKeyElement.textContent = variant;
        variantKeyElement.addEventListener('click', () => {
            textContent += variant; // Update text box content variable
            textInput.value += variant;
            console.log("Updated textContent:", textContent); // Log updated textContent
        });
        keyboard1.appendChild(variantKeyElement);
    });

    // Add back button
    const backButton = document.createElement('div');
    backButton.classList.add('key');
    backButton.textContent = '←';
    backButton.addEventListener('click', () => {
        // Go back to base key buttons
        keyboard1.innerHTML = '';


        // Creating base key buttons for Group 2
        Object.keys(group2Variants).forEach(baseKey => {
            const baseKeyElement = document.createElement('div');
            baseKeyElement.classList.add('key');
            baseKeyElement.textContent = baseKey;
            baseKeyElement.addEventListener('click', () => {
                createVariantButtons1(group2Variants[baseKey]);
            });
            keyboard1.appendChild(baseKeyElement);
        });
    });
    keyboard1.appendChild(backButton);
}