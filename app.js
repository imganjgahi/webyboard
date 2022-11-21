let isCapsLocked = false
let lang = 'en'
const langs = {
    en: {
        normalMode: [
            ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
            ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
            ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
            ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
            ['Space']
        ],
        capMode: [
            ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
            ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
            ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
            ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
            ['Space']
        ]
    },
    en: {
        normalMode: [
            ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
            ['Tab', 'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'چ', 'پ'],
            ['Caps Lock', 'ش', 'س', 'ی', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ک', 'گ', 'Enter'],
            ['Shift', 'ظ', 'ط', 'ز', 'ر', 'ذ', 'د', 'ئ', 'و', '.', '/', 'Shift'],
            ['Space']
        ],
        capMode: [
            ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
            ['Tab', 'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'چ', 'پ'],
            ['Caps Lock', 'ش', 'س', 'ی', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ک', 'گ', 'Enter'],
            ['Shift', 'ظ', 'ط', 'ز', 'ر', 'ذ', 'د', 'ئ', 'و', '.', '/', 'Shift'],
            ['Space']
        ]
    },
}
document.getElementById('inputArea').addEventListener('focus', () => {
    renderKeyboard(langs[lang].normalMode)
})
document.getElementById('inputArea').addEventListener('blur', () => {
    const keyboardArea = document.getElementById('keyboardArea')
    keyboardArea.innerHTML = ""
})
window.addEventListener('keypress', (e) => {
    if(e.altKey && e.shiftKey) {
        lang = lang === "en" ? "fa" : "en"
    }
    console.log("L: ", e.altKey && e.shiftKey)
    if (e.getModifierState('CapsLock')) {
        renderKeyboard(langs[lang].capMode)
    } else {
        renderKeyboard(langs[lang].normalMode)
    }
})
function renderKeyboard(keys) {
    const keyboardArea = document.getElementById('keyboardArea')
    keyboardArea.innerHTML = ""
    keys.forEach(rowKeys => {
        const row = document.createElement('div')
        row.className = 'row'
        rowKeys.forEach((keyChar, index) => {
            const key = document.createElement('div')
            key.className = getClassName(keyChar)
            key.innerHTML = keyChar
            row.appendChild(key)
        })
        keyboardArea.appendChild(row)
    })
}

function getClassName(key) {
    switch (key) {
        case 'Space':
            return 'key space'
        case 'Backspace':
            return 'key backspace'
        case 'Caps Lock':
            return 'key capsLock'
        default:
            return 'key'
    }
}