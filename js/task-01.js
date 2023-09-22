const mainList = document.querySelector('#categories')
console.log(`Number of categories: ${mainList.childElementCount}\n\n` )
const arr = [...mainList.children]
arr.forEach(element => {
    const header = element.firstElementChild
    const innerList = element.lastElementChild
    console.log(`Category: ${header.textContent}`)
    console.log(`Elements: ${innerList.childElementCount}\n\n`);
});