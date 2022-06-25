const phoneticElement = document.getElementById("characters-phonetic");
const allElement = document.getElementById("characters-all");

const phoneticData = `
Replace this text with the text you want to get the distinct characters from.
`;

const allCharsData = `
Replace this text with the text you want to get the distinct characters from.
`;

const makeStringOfUniqueChars = (string) => {
    const set = new Set(string.split(''));
    return [...set].sort().join('');
}

const updateDomElements = () => {
    phoneticElement.textContent = makeStringOfUniqueChars(phoneticData);
    allElement.textContent = makeStringOfUniqueChars(allCharsData);
}

updateDomElements();
