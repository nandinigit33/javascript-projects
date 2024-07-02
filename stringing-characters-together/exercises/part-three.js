//Part Three section one

let language = "JavaScript";

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0, 1) + language.slice(4, 5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.substring(0, 1) + language.substring(4, 5));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let initials = "JS";
console.log(`The abbreviation for '${language}' is '${initials}'.`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.replace("J", "Z").slice(0, 5).indexOf("Z"));
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = "title case";
notTitleCase = notTitleCase.split(" ");

for (let i = 0; i < notTitleCase.length; i++) {
  notTitleCase[i] =
    notTitleCase[i].charAt(0).toUpperCase() + notTitleCase[i].slice(1);
}
notTitleCase = notTitleCase.join(" ");

console.log(notTitleCase);
//notTitleCaseArray[0].charAt(0).toUpperCase() +
// notTitleCaseArray[0].charAt(6).toUpperCase();
