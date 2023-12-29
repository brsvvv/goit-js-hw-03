// function slugify(title) {
//   const lowertitle = title.toLowerCase;
//   const newTitle = lowertitle.split(` `);
//   const crossTitle = newTitle.join(`-`);
//   return crossTitle;

function slugify(title) {
  const lowertitle = title.toLowerCase();
  const newTitle = lowertitle.split(" ");
  const crossTitle = newTitle.join("-");
  return crossTitle;
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
