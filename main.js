const charsElement = document.getElementById("characters");

const phoneticData = `
Here is an example.
`;

const removeDuplicateChars = (string) => {
    let charsObject = {};
    let charsString = "";
    for (let i = 0; i < string.length; i++) {
        const currentChar = string[i];
        if (!charsObject[currentChar]) {
            charsString += currentChar;
            charsObject[currentChar] = true;
        }
    }
    return charsString;
};

const sortString = (string) => {
    let charsArray = [];
    for (let i = 0; i < string.length; i++) {
        charsArray.push(string[i]);
    }
    charsArray.sort();
    return charsArray.join("");
};

charsElement.textContent = sortString(removeDuplicateChars(phoneticData));
