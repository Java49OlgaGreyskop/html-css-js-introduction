/*
2.	Write function deleteWithPrefix(strings, prefix)
2.1.	Takes array of strings and a prefix value
2.2.	Returns array containing the strings from the input array without strings starting with a given prefix
2.3.	Example: deleteWithPrefix([“abc”, “old_abc”, “lmn”, “123”, “old_lmn”], “old_”) returns array [“abc”, “lmn”, “123”]
*/
let cities = ['usDetroit', 'isHaifa', 'usChicago', 'isJerusalem'];
let prefix = 'is';

function deleteWithPrefix(cities, prefix) {
    return cities.filter(element => !element.startsWith(prefix));
}

console.log(`deleteWithPrefix. input: ${cities}, prefix: ${prefix} output: ${deleteWithPrefix(cities, prefix)}`);
