const keyboard = document.querySelector('.keyboard');
const swara1 = document.querySelector('.swara1');
const swara2 = document.querySelector('.swara2');
const symbol = document.querySelector('.symbol');
const rom = document.querySelector('.rom');
const rom_simple = document.querySelector('.rom_simple');
const dev = document.querySelector('.dev');
const dev_simple = document.querySelector('.dev_simple');

const outputElement = document.querySelector('#output');
const textInput = document.querySelector('#textInput');
let latexOutput = '';
let newlatexOutput = '';
let numColumn = 3
let numRow = 4

// Get all input elements with class "inputCell"
const inputCells = document.querySelectorAll('.inputCell');

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Subscript', 'SuperScript', 'Left SuperScript' , 'Single Overline', 'Double Overline', 'Triple Overline', 'Dot', 'Double Dot', 'UnderDot', 'Double UnderDot', 'Single Underline', 'Curve', '⌣ (anudhruta)', '⌣', '⌢', '| above', '×', ',', '.', ';', '-', '=', '(', ')', '\'', '"', '/', '+', '*', 'o'];

const swara1Keys =  ['S', 'R1', 'R2', 'G1', 'G2', 'M1', 'M2', 'P', 'D1', 'D2', 'N1', 'N2'];

const swara2Keys = ['s', 'r', 'R', 'g', 'G', 'm', 'M', 'P', 'd', 'D', 'n', 'N'];


const romKeys = ['a', 'ā', 'i', 'ī', 'u', 'ū', 'r', 'ė', 'ē', 'ai', 'o', 'ō', 'au', 'ṁ', 'ḥ'];

const romKeys_simple = ['k', 'kh', 'g', 'gh', 'jñ', 'c̣', 'c̣h', 'j', 'jh', 'ñ', 'ṭ', 'ṭh', 'ḍ', 'ḍh', 'ṇ', 't', 'th', 'd', 'dh', 'n', 'p', 'ph', 'b', 'bh', 'm', 'y', 'r', 'l', 'v', 'ś', 'ṣ', 's', 'h', 'ḷ', 'kṣ'];

// const devKeys = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ए' ,'ऐ', 'ओ', 'ओ', 'औ','अं', 'अः', 'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'ळ', 'क्ष'];

const devKeys = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ए' ,'ऐ', 'ओ', 'ओ', 'औ','अं', 'अः'];


const variantsDict = {
    'क': [
      'क',  'का', 'कि', 'की',
      'कु',  'कू',  'के',  'कै',
      'को', 'कौ', 'कं',  'कः',
      'क्',  'कृ',  'कॄ',  'कॅ',
      'कॉ'
    ],
    'ख': [
      'ख',  'खा', 'खि', 'खी',
      'खु',  'खू',  'खे',  'खै',
      'खो', 'खौ', 'खं',  'खः',
      'ख्',  'खृ',  'खॄ',  'खॅ',
      'खॉ'
    ],
    'ग': [
      'ग',  'गा', 'गि', 'गी',
      'गु',  'गू',  'गे',  'गै',
      'गो', 'गौ', 'गं',  'गः',
      'ग्',  'गृ',  'गॄ',  'गॅ',
      'गॉ'
    ],
    'घ': [
      'घ',  'घा', 'घि', 'घी',
      'घु',  'घू',  'घे',  'घै',
      'घो', 'घौ', 'घं',  'घः',
      'घ्',  'घृ',  'घॄ',  'घॅ',
      'घॉ'
    ],
    'ङ': [
      'ङ',  'ङा', 'ङि', 'ङी',
      'ङु',  'ङू',  'ङे',  'ङै',
      'ङो', 'ङौ', 'ङं',  'ङः',
      'ङ्',  'ङृ',  'ङॄ',  'ङॅ',
      'ङॉ'
    ],
    'च': [
      'च',  'चा', 'चि', 'ची',
      'चु',  'चू',  'चे',  'चै',
      'चो', 'चौ', 'चं',  'चः',
      'च्',  'चृ',  'चॄ',  'चॅ',
      'चॉ'
    ],
    'छ': [
      'छ',  'छा', 'छि', 'छी',
      'छु',  'छू',  'छे',  'छै',
      'छो', 'छौ', 'छं',  'छः',
      'छ्',  'छृ',  'छॄ',  'छॅ',
      'छॉ'
    ],
    'ज': [
      'ज',  'जा', 'जि', 'जी',
      'जु',  'जू',  'जे',  'जै',
      'जो', 'जौ', 'जं',  'जः',
      'ज्',  'जृ',  'जॄ',  'जॅ',
      'जॉ'
    ],
    'झ': [
      'झ',  'झा', 'झि', 'झी',
      'झु',  'झू',  'झे',  'झै',
      'झो', 'झौ', 'झं',  'झः',
      'झ्',  'झृ',  'झॄ',  'झॅ',
      'झॉ'
    ],
    'ञ': [
      'ञ',  'ञा', 'ञि', 'ञी',
      'ञु',  'ञू',  'ञे',  'ञै',
      'ञो', 'ञौ', 'ञं',  'ञः',
      'ञ्',  'ञृ',  'ञॄ',  'ञॅ',
      'ञॉ'
    ],
    'ट': [
      'ट',  'टा', 'टि', 'टी',
      'टु',  'टू',  'टे',  'टै',
      'टो', 'टौ', 'टं',  'टः',
      'ट्',  'टृ',  'टॄ',  'टॅ',
      'टॉ'
    ],
    'ठ': [
      'ठ',  'ठा', 'ठि', 'ठी',
      'ठु',  'ठू',  'ठे',  'ठै',
      'ठो', 'ठौ', 'ठं',  'ठः',
      'ठ्',  'ठृ',  'ठॄ',  'ठॅ',
      'ठॉ'
    ],
    'ड': [
      'ड',  'डा', 'डि', 'डी',
      'डु',  'डू',  'डे',  'डै',
      'डो', 'डौ', 'डं',  'डः',
      'ड्',  'डृ',  'डॄ',  'डॅ',
      'डॉ'
    ],
    'ढ': [
      'ढ',  'ढा', 'ढि', 'ढी',
      'ढु',  'ढू',  'ढे',  'ढै',
      'ढो', 'ढौ', 'ढं',  'ढः',
      'ढ्',  'ढृ',  'ढॄ',  'ढॅ',
      'ढॉ'
    ],
    'ण': [
      'ण',  'णा', 'णि', 'णी',
      'णु',  'णू',  'णे',  'णै',
      'णो', 'णौ', 'णं',  'णः',
      'ण्',  'णृ',  'णॄ',  'णॅ',
      'णॉ'
    ],
    'त': [
      'त',  'ता', 'ति', 'ती',
      'तु',  'तू',  'ते',  'तै',
      'तो', 'तौ', 'तं',  'तः',
      'त्',  'तृ',  'तॄ',  'तॅ',
      'तॉ'
    ],
    'थ': [
      'थ',  'था', 'थि', 'थी',
      'थु',  'थू',  'थे',  'थै',
      'थो', 'थौ', 'थं',  'थः',
      'थ्',  'थृ',  'थॄ',  'थॅ',
      'थॉ'
    ],
    'द': [
      'द',  'दा', 'दि', 'दी',
      'दु',  'दू',  'दे',  'दै',
      'दो', 'दौ', 'दं',  'दः',
      'द्',  'दृ',  'दॄ',  'दॅ',
      'दॉ'
    ],
    'ध': [
      'ध',  'धा', 'धि', 'धी',
      'धु',  'धू',  'धे',  'धै',
      'धो', 'धौ', 'धं',  'धः',
      'ध्',  'धृ',  'धॄ',  'धॅ',
      'धॉ'
    ],
    'न': [
      'न',  'ना', 'नि', 'नी',
      'नु',  'नू',  'ने',  'नै',
      'नो', 'नौ', 'नं',  'नः',
      'न्',  'नृ',  'नॄ',  'नॅ',
      'नॉ'
    ],
    'प': [
      'प',  'पा', 'पि', 'पी',
      'पु',  'पू',  'पे',  'पै',
      'पो', 'पौ', 'पं',  'पः',
      'प्',  'पृ',  'पॄ',  'पॅ',
      'पॉ'
    ],
    'फ': [
      'फ',  'फा', 'फि', 'फी',
      'फु',  'फू',  'फे',  'फै',
      'फो', 'फौ', 'फं',  'फः',
      'फ्',  'फृ',  'फॄ',  'फॅ',
      'फॉ'
    ],
    'ब': [
      'ब',  'बा', 'बि', 'बी',
      'बु',  'बू',  'बे',  'बै',
      'बो', 'बौ', 'बं',  'बः',
      'ब्',  'बृ',  'बॄ',  'बॅ',
      'बॉ'
    ],
    'भ': [
      'भ',  'भा', 'भि', 'भी',
      'भु',  'भू',  'भे',  'भै',
      'भो', 'भौ', 'भं',  'भः',
      'भ्',  'भृ',  'भॄ',  'भॅ',
      'भॉ'
    ],
    'म': [
      'म',  'मा', 'मि', 'मी',
      'मु',  'मू',  'मे',  'मै',
      'मो', 'मौ', 'मं',  'मः',
      'म्',  'मृ',  'मॄ',  'मॅ',
      'मॉ'
    ],
    'य': [
      'य',  'या', 'यि', 'यी',
      'यु',  'यू',  'ये',  'यै',
      'यो', 'यौ', 'यं',  'यः',
      'य्',  'यृ',  'यॄ',  'यॅ',
      'यॉ'
    ],
    'र': [
      'र',  'रा', 'रि', 'री',
      'रु',  'रू',  'रे',  'रै',
      'रो', 'रौ', 'रं',  'रः',
      'र्',  'रृ',  'रॄ',  'रॅ',
      'रॉ'
    ],
    'ल': [
      'ल',  'ला', 'लि', 'ली',
      'लु',  'लू',  'ले',  'लै',
      'लो', 'लौ', 'लं',  'लः',
      'ल्',  'लृ',  'लॄ',  'लॅ',
      'लॉ'
    ],
    'व': [
      'व',  'वा', 'वि', 'वी',
      'वु',  'वू',  'वे',  'वै',
      'वो', 'वौ', 'वं',  'वः',
      'व्',  'वृ',  'वॄ',  'वॅ',
      'वॉ'
    ],
    'श': [
      'श',  'शा', 'शि', 'शी',
      'शु',  'शू',  'शे',  'शै',
      'शो', 'शौ', 'शं',  'शः',
      'श्',  'शृ',  'शॄ',  'शॅ',
      'शॉ'
    ],
    'ष': [
      'ष',  'षा', 'षि', 'षी',
      'षु',  'षू',  'षे',  'षै',
      'षो', 'षौ', 'षं',  'षः',
      'ष्',  'षृ',  'षॄ',  'षॅ',
      'षॉ'
    ],
    'स': [
      'स',  'सा', 'सि', 'सी',
      'सु',  'सू',  'से',  'सै',
      'सो', 'सौ', 'सं',  'सः',
      'स्',  'सृ',  'सॄ',  'सॅ',
      'सॉ'
    ],
    'ह': [
      'ह',  'हा', 'हि', 'ही',
      'हु',  'हू',  'हे',  'है',
      'हो', 'हौ', 'हं',  'हः',
      'ह्',  'हृ',  'हॄ',  'हॅ',
      'हॉ'
    ],
    'ळ': [
      'ळ',  'ळा', 'ळि', 'ळी',
      'ळु',  'ळू',  'ळे',  'ळै',
      'ळो', 'ळौ', 'ळं',  'ळः',
      'ळ्',  'ळृ',  'ळॄ',  'ळॅ',
      'ळॉ'
    ],
    'क्ष': [
      'क्ष',  'क्षा', 'क्षि', 'क्षी',
      'क्षु',  'क्षू',  'क्षे',  'क्षै',
      'क्षो', 'क्षौ', 'क्षं',  'क्षः',
      'क्ष्',  'क्षृ',  'क्षॄ',  'क्षॅ',
      'क्षॉ'
    ]
  }

// // Add variants for each character
// devKeys.forEach(char => {
//     variantsDict[char] = [
//         char, // Original character
//         char + 'ा', // Vowel sign 'aa'
//         char + 'ि', // Vowel sign 'i'
//         char + 'ी', // Vowel sign 'ii'
//         char + 'ु', // Vowel sign 'u'
//         char + 'ू', // Vowel sign 'uu'
//         char + 'े', // Vowel sign 'e'
//         char + 'ै', // Vowel sign 'ai'
//         char + 'ो', // Vowel sign 'o'
//         char + 'ौ', // Vowel sign 'au'
//         char + 'ं', // Anusvara
//         char + 'ः', // Visarga
//         char + '्', // Virama (Halant)
//         char + 'ृ', // Vowel sign 'ru'
//         char + 'ॄ', // Vowel sign 'ruu'
//         char + 'ॅ', // Vowel sign 'l'
//         char + 'ॉ', // Vowel sign 'll'
//     ];
// });


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
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 10; // Move cursor position
            textInput.selectionEnd = cursorPosition + 10;
        } else if (key === 'Double Overline') {
            textInput.value = textBeforeCursor + '\\overline{\\overline{}}' + textAfterCursor; // Add \overline{\overline{}} template
            latexOutput = textBeforeCursor + '\\overline{\\overline{}}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 20; // Move cursor position
            textInput.selectionEnd = cursorPosition + 20;
        } else if (key === 'Triple Overline') {
            textInput.value = textBeforeCursor + '\\overline{\\overline{\\overline{}}}' + textAfterCursor; // Add \overline{\overline{}} template
            latexOutput = textBeforeCursor + '\\overline{\\overline{\\overline{}}}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 30; // Move cursor position
            textInput.selectionEnd = cursorPosition + 30;
        } else if (key === 'Single Underline') {
            textInput.value = textBeforeCursor + '\\underline{}' + textAfterCursor; // Add \underline{} template
            latexOutput = textBeforeCursor + '\\underline{}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 11; // Move cursor position
            textInput.selectionEnd = cursorPosition + 11;
        } else if (key === 'Subscript') {
            textInput.value = textBeforeCursor + '_{}' + textAfterCursor; // Modified: Use _{} template for subscript
            latexOutput = textBeforeCursor + '_{}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 2; // Modified: Move cursor position
            textInput.selectionEnd = cursorPosition + 2;
        } else if (key === 'SuperScript') {
            textInput.value = textBeforeCursor + '^{}' + textAfterCursor; // Modified: Use ^{} template for superscript
            latexOutput = textBeforeCursor + '^{}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 2; // Modified: Move cursor position
            textInput.selectionEnd = cursorPosition + 2;
        } else if (key === 'Left SuperScript') {
            textInput.value = textBeforeCursor + '^\\text{power}{Base}' + textAfterCursor; 
            latexOutput = textBeforeCursor + '^\\text{power}{Base}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 19; // Modified: Move cursor position
            textInput.selectionEnd = cursorPosition + 19;
        } else if (key === ' ') {
            textInput.value = textBeforeCursor + ' ' + textAfterCursor; // Add space
            latexOutput = textBeforeCursor + ' ' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 1; // Move cursor position
            textInput.selectionEnd = cursorPosition + 1;
        } else if (key === 'Dot') { 
            textInput.value = textBeforeCursor + '\\dot{}' + textAfterCursor; // Add \dot{} template
            latexOutput = textBeforeCursor + '\\dot{}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 5; // Move cursor position
            textInput.selectionEnd = cursorPosition + 5;
        } else if (key === 'Double Dot') { 
            textInput.value = textBeforeCursor + '\\ddot{}' + textAfterCursor; // Add \dot{} template
            latexOutput = textBeforeCursor + '\\ddot{}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 6; // Move cursor position
            textInput.selectionEnd = cursorPosition + 6;
        } else if (key === 'UnderDot') { 
            textInput.value = textBeforeCursor + '\\underset{\\cdot}{\\text{}}' + textAfterCursor; 
            latexOutput = textBeforeCursor + '\\underset{\\cdot}{\\text{}}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 23; // Move cursor position
            textInput.selectionEnd = cursorPosition + 23;
        } else if (key === 'Double UnderDot') { 
            textInput.value = textBeforeCursor + '\\underset{\\cdot\\cdot}{\\text{}}' + textAfterCursor; 
            latexOutput = textBeforeCursor + '\\underset{\\cdot\\cdot}{\\text{}}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 28; // Move cursor position
            textInput.selectionEnd = cursorPosition + 28;
        } else if (key === 'Curve') { 
            textInput.value = textBeforeCursor + '\\widetilde{}' + textAfterCursor; // Add \widetilde{} template
            latexOutput = textBeforeCursor + '\\widetilde{}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 11; // Move cursor position
            textInput.selectionEnd = cursorPosition + 11;
        } else if (key === '⌣') { 
            textInput.value = textBeforeCursor + '\\underset{\\smile}{\\text{}}' + textAfterCursor; // Add \underset{\smile}{\text{}} template
            latexOutput = textBeforeCursor + '\\underset{\\smile}{\\text{}}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 24; // Move cursor position
            textInput.selectionEnd = cursorPosition + 24;
          } else if (key === '⌣ (anudhruta)') { 
            textInput.value = textBeforeCursor + '\\smile{}' + textAfterCursor; // Add \underset{\smile}{\text{}} template
            latexOutput = textBeforeCursor + '\\smile{}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 8; // Move cursor position
            textInput.selectionEnd = cursorPosition + 8;
        } else if (key === '⌢') { 
            textInput.value = textBeforeCursor + '\\overset{\\frown}{\\text{}}' + textAfterCursor; // Add \underset{\smile}{\text{}} template
            latexOutput = textBeforeCursor + '\\overset{\\frown}{\\text{}}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 23; // Move cursor position
            textInput.selectionEnd = cursorPosition + 23;
        } else if (key === '| above') { 
            textInput.value = textBeforeCursor + '\\overset{|}{}' + textAfterCursor; // Add \underset{\smile}{\text{}} template
            latexOutput = textBeforeCursor + '\\overset{|}{}' + textAfterCursor;
            // renderLatexOutput();
            textInput.selectionStart = cursorPosition + 12; // Move cursor position
            textInput.selectionEnd = cursorPosition + 12;
        } 
        else {
            textInput.value = textBeforeCursor + key + textAfterCursor; // Append key to text input
            latexOutput = textBeforeCursor + key + textAfterCursor;
            textInput.selectionStart = cursorPosition + key.length; // Move cursor position
            textInput.selectionEnd = cursorPosition + key.length;
            // renderLatexOutput();
            console.log('textInput value:', textInput.value);
            console.log('Latex value:', latexOutput);
        }
    });
    keyboard.appendChild(keyElement);
});


swara1Keys.forEach(key => {
    const keyElement = document.createElement('div');
    keyElement.classList.add('key');
    keyElement.textContent = key;
    keyElement.addEventListener('click', () => {
        const cursorPosition = textInput.selectionStart; // Get cursor position
        const textBeforeCursor = textInput.value.substring(0, cursorPosition);
        const textAfterCursor = textInput.value.substring(cursorPosition);
  
        textInput.value = textBeforeCursor + key + textAfterCursor; // Append key to text input
        textInput.focus();
        latexOutput = textBeforeCursor + key + textAfterCursor;
        textInput.selectionStart = cursorPosition + key.length; // Move cursor position
        textInput.selectionEnd = cursorPosition + key.length;
        // renderLatexOutput();
        console.log('textInput value:', textInput.value);
        console.log('Latex value:', latexOutput);
        
    });
    swara1.appendChild(keyElement);
});

swara2Keys.forEach(key => {
    const keyElement = document.createElement('div');
    keyElement.classList.add('key');
    keyElement.textContent = key;
    keyElement.addEventListener('click', () => {
        const cursorPosition = textInput.selectionStart; // Get cursor position
        const textBeforeCursor = textInput.value.substring(0, cursorPosition);
        const textAfterCursor = textInput.value.substring(cursorPosition);
  
        textInput.value = textBeforeCursor + key + textAfterCursor; // Append key to text input
        latexOutput = textBeforeCursor + key + textAfterCursor;
        textInput.selectionStart = cursorPosition + key.length; // Move cursor position
        textInput.selectionEnd = cursorPosition + key.length;
        // renderLatexOutput();
        console.log('textInput value:', textInput.value);
        console.log('Latex value:', latexOutput);
        
    });
    swara2.appendChild(keyElement);
});

romKeys.forEach(key => {
    const keyElement = document.createElement('div');
    keyElement.classList.add('key');
    keyElement.textContent = key;
    keyElement.addEventListener('click', () => {
        const cursorPosition = textInput.selectionStart; // Get cursor position
        const textBeforeCursor = textInput.value.substring(0, cursorPosition);
        const textAfterCursor = textInput.value.substring(cursorPosition);
  
        textInput.value = textBeforeCursor + key + textAfterCursor; // Append key to text input
        latexOutput = textBeforeCursor + key + textAfterCursor;
        textInput.selectionStart = cursorPosition + key.length; // Move cursor position
        textInput.selectionEnd = cursorPosition + key.length;
        // renderLatexOutput();
        console.log('textInput value:', textInput.value);
        console.log('Latex value:', latexOutput);
        
    });
    rom.appendChild(keyElement);
});

romKeys_simple.forEach(key => {
  const keyElement = document.createElement('div');
  keyElement.classList.add('key');
  keyElement.textContent = key;
  keyElement.addEventListener('click', () => {
      const cursorPosition = textInput.selectionStart; // Get cursor position
      const textBeforeCursor = textInput.value.substring(0, cursorPosition);
      const textAfterCursor = textInput.value.substring(cursorPosition);

      textInput.value = textBeforeCursor + key + textAfterCursor; // Append key to text input
      latexOutput = textBeforeCursor + key + textAfterCursor;
      textInput.selectionStart = cursorPosition + key.length; // Move cursor position
      textInput.selectionEnd = cursorPosition + key.length;
      // renderLatexOutput();
      console.log('textInput value:', textInput.value);
      console.log('Latex value:', latexOutput);
      
  });
  rom_simple.appendChild(keyElement);
});

devKeys.forEach(key => {
    const keyElement = document.createElement('div');
    keyElement.classList.add('key');
    keyElement.textContent = key;
    keyElement.addEventListener('click', () => {
        const cursorPosition = textInput.selectionStart; // Get cursor position
        const textBeforeCursor = textInput.value.substring(0, cursorPosition);
        const textAfterCursor = textInput.value.substring(cursorPosition);
  
        textInput.value = textBeforeCursor + key + textAfterCursor; // Append key to text input
        latexOutput = textBeforeCursor + key + textAfterCursor;
        textInput.selectionStart = cursorPosition + key.length; // Move cursor position
        textInput.selectionEnd = cursorPosition + key.length;
        // renderLatexOutput();
        console.log('textInput value:', textInput.value);
        console.log('Latex value:', latexOutput);
        
    });
    dev_simple.appendChild(keyElement);
});


// Creating base key buttons for dev
Object.keys(variantsDict).forEach(baseKey => {
    const baseKeyElement = document.createElement('div');
    baseKeyElement.classList.add('key');
    baseKeyElement.textContent = baseKey;
    baseKeyElement.addEventListener('click', () => {
        createVariantButtons(variantsDict[baseKey]);
    });
    dev.appendChild(baseKeyElement);
});


// Function to create variant buttons
function createVariantButtons(variants) {
    // Clear existing buttons
    dev.innerHTML = '';

    // Create variant buttons for the selected base key
    variants.forEach(variant => {
        const variantKeyElement = document.createElement('div');
        variantKeyElement.classList.add('key');
        variantKeyElement.textContent = variant;
        variantKeyElement.addEventListener('click', () => {
            const cursorPosition = textInput.selectionStart; // Get cursor position
            const textBeforeCursor = textInput.value.substring(0, cursorPosition);
            const textAfterCursor = textInput.value.substring(cursorPosition);
    
            textInput.value = textBeforeCursor + variant + textAfterCursor; // Append key to text input
            latexOutput = textBeforeCursor + variant + textAfterCursor;
            textInput.selectionStart = cursorPosition + variant.length; // Move cursor position
            textInput.selectionEnd = cursorPosition + variant.length;
            // renderLatexOutput();
        });
        dev.appendChild(variantKeyElement);
    });

    // Add back button
    const backButton = document.createElement('div');
    backButton.classList.add('key');
    backButton.textContent = '←';
    backButton.addEventListener('click', () => {
        // Go back to base key buttons
        dev.innerHTML = '';

        // Creating base key buttons for Group 1
        Object.keys(variantsDict).forEach(baseKey => {
            const baseKeyElement = document.createElement('div');
            baseKeyElement.classList.add('key');
            baseKeyElement.textContent = baseKey;
            baseKeyElement.addEventListener('click', () => {
                createVariantButtons(variantsDict[baseKey]);
            });
            dev.appendChild(baseKeyElement);
        });

    });
    dev.appendChild(backButton);
}



// function renderLatexOutput() {
//     const modifiedLatexOutput = latexOutput.replace(/ /g, '\\ ');
//     outputElement.innerHTML = '$$' + modifiedLatexOutput + '$$';
//     MathJax.Hub.Queue(["Typeset", MathJax.Hub, outputElement]);
// }

// function renderLatexOutput() {
//     const modifiedLatexOutput = newlatexOutput.replace(/ /g, '\\ ').replace(/\n/g, '\\\\');
//     outputElement.innerHTML = '$$' + modifiedLatexOutput + '$$';
//     MathJax.Hub.Queue(["Typeset", MathJax.Hub, outputElement]);
//     console.log("Triggered")
//     console.log(modifiedLatexOutput)
//     console.log(newlatexOutput)
// }

function renderLatexOutput() {
  const modifiedLatexOutput = newlatexOutput.replace(/ /g, '\\ ').replace(/\n/g, '\\\\');
  outputElement.innerHTML = '$$\\begin{aligned}' + modifiedLatexOutput + '\\end{aligned}$$'; // Add alignment environment
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, outputElement]);
}


function addWhiteSpaceToCanvas(canvas, whitespaceWidth) {
    const newCanvas = document.createElement('canvas');
    const context = newCanvas.getContext('2d');
    
    newCanvas.width = canvas.width + (2 * whitespaceWidth);
    newCanvas.height = canvas.height;
    
    // Draw white background
    context.fillStyle = 'white';
    context.fillRect(0, 0, newCanvas.width, newCanvas.height);
    
    // Draw original canvas content with offset
    context.drawImage(canvas, whitespaceWidth, 0);
    
    return newCanvas;
}

function downloadLatexOutputAsImage() {
    html2canvas(document.querySelector("#output"), {
        allowTaint: true,
        useCORS: true
    }).then(function(canvas) {
        const canvasWithWhiteSpace = addWhiteSpaceToCanvas(canvas, 5);
        const imgData = canvasWithWhiteSpace.toDataURL('image/png');
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
        const canvasWithWhiteSpace = addWhiteSpaceToCanvas(canvas, 5);
        
        // Copy the canvas image to the clipboard
        canvasWithWhiteSpace.toBlob(function(blob) {
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
    // latexOutput = textInput.value;
    // renderLatexOutput();
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



// Add event listener to each input element
inputCells.forEach(inputCell => {
  inputCell.addEventListener('input', () => {
      // Get the value of all input cells
      const table_content = getAllCellValues();
      
      // Concatenate values with spaces
      newlatexOutput = generateLatexOutput(table_content);
      console.log(newlatexOutput)
      // Update the displayed LaTeX output
      renderLatexOutput();
  });
});


// function getAllCellValues() {
//   const cellValues = [];
//   inputCells.forEach(inputCell => {
//       cellValues.push(inputCell.value);
//   });
//   return cellValues;
// }

// Function to get all input cells
function getInputCells() {
  return document.querySelectorAll('#inputTable input[type="text"]');
}

// Function to get all input values from the cells
function getAllCellValues() {
  const cellValues = [];
  const inputCells = getInputCells();
  inputCells.forEach(inputCell => {
      cellValues.push(inputCell.value);
  });
  return cellValues;
}


// Function to generate LaTeX output with rows and columns, removing empty cells
function generateLatexOutput(table_content) {
  let newLatexOutput = '\\begin{array}{|l|l|l|}';
  let chunkCounter = 0;
  let rowIsEmpty = true;
  for (let i = 0; i < table_content.length; i++) {
      if (table_content[i].trim() !== '') {
          // Append non-empty cell
          if (!rowIsEmpty) {
              newLatexOutput += ' & '; // Add space for column
          }
          newLatexOutput += table_content[i];
          rowIsEmpty = false;
          // Add newline after every 3 elements, except for the last element
          if ((i + 1) % numColumn === 0 && i !== table_content.length - 1) {
              newLatexOutput += '\\\\\n'; // Add newline character for row
              if (chunkCounter === 2) {
                  newLatexOutput += '\\hline'; // Add horizontal line after every row
                  chunkCounter = 0;
              } else {
                  chunkCounter++;
              }
              rowIsEmpty = true;
          }
      }
  }
  newLatexOutput += '\\end{array}';
  return newLatexOutput;
}




// Add event listener for adding a row
document.getElementById('addRowButton').addEventListener('click', () => {
  const newRow = document.createElement('tr');
  for (let i = 0; i < 3; i++) {
      const newCell = document.createElement('td');
      const newInput = document.createElement('input');
      newInput.type = 'text';
      newCell.appendChild(newInput);
      newRow.appendChild(newCell);
  }
  document.getElementById('inputTable').appendChild(newRow);
  numRow = numRow + 1
});

// Add event listener for adding a column
document.getElementById('addColumnButton').addEventListener('click', () => {
  const rows = document.querySelectorAll('#inputTable tr');
  rows.forEach(row => {
      const newCell = document.createElement('td');
      const newInput = document.createElement('input');
      newInput.type = 'text';
      newCell.appendChild(newInput);
      row.appendChild(newCell);
  });
  numColumn = numColumn + 1
});

// Add event listener for deleting a row
document.getElementById('deleteRowButton').addEventListener('click', () => {
  const table = document.getElementById('inputTable');
  if (table.rows.length > 1) { // Ensure there's at least one row remaining
      table.deleteRow(-1); // Delete the last row
  } else {
      alert('Cannot delete the last row.');
  }
  numRow = numRow - 1
});

// Add event listener for deleting a column
document.getElementById('deleteColumnButton').addEventListener('click', () => {
  const rows = document.querySelectorAll('#inputTable tr');
  rows.forEach(row => {
      if (row.cells.length > 1) { // Ensure there's at least one cell remaining
          row.deleteCell(-1); // Delete the last cell in each row
      } else {
          alert('Cannot delete the last column.');
      }
  });
  numColumn = numColumn - 1
});


document.addEventListener("DOMContentLoaded", function() {
  // Function to handle the click event of the "Play Audio" button
  document.getElementById("playAudioButton").addEventListener("click", function() {
      // Get the content of the second row
      var secondRowInputs = document.querySelectorAll("#inputTable tr:nth-child(2) input.inputCell");
      var content = "";
      secondRowInputs.forEach(function(input) {
          content += input.value + " "; // Concatenate the content
      });
      content = content.trim(); // Remove trailing space

      // Split the content by space
      var tokens = content.split(" ");

      // Map tokens to corresponding audio files
      var audioFiles = {
          "S": "Assets/40.mp3",
          "R1": "Assets/41.mp3",
          "R2": "Assets/42.mp3",
          "G1": "Assets/43.mp3",
          "G2": "Assets/44.mp3",
          "M1": "Assets/45.mp3",
          "M2": "Assets/46.mp3",
          "P": "Assets/47.mp3",
          "D1": "Assets/48.mp3",
          "D2": "Assets/49.mp3",
          "N1": "Assets/50.mp3",
          "N2": "Assets/51.mp3"
      };

      // Play audio files at equal intervals
      var interval = 500; // Interval in milliseconds
      var currentIndex = 0;
      var audioInterval = setInterval(function() {
          if (currentIndex < tokens.length) {
              var token = tokens[currentIndex];
              var audioFile = audioFiles[token];
              if (audioFile) {
                  var audio = new Audio(audioFile);
                  audio.play();
              }
              currentIndex++;
          } else {
              clearInterval(audioInterval); // Stop the interval when all tokens have been played
          }
      }, interval);
  });
});
