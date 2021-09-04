const yaml = require('js-yaml');
const { readFileSync, mkdirSync, writeFileSync } = require('fs');

// Get document, or throw exception on error
try {
    const doc = yaml.load(readFileSync('./src/friendslist.yml', 'utf8'));
    try {
        mkdirSync('./dist/');
    } catch ({ code }) {
        if (code !== 'EEXIST') return;
    }
    writeFileSync('./dist/friendslist.json', JSON.stringify(doc));
} catch (e) {
    console.error(e);
}