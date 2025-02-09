// function slugify(title) {
//     const slugifyNew = title.toLowerCase().split(" ");
//     const slug = slugifyNew.join("-");
//     return slug
// }

function slugify(title){
    return title.toLowerCase().replaceAll(" ","-");
}

console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 