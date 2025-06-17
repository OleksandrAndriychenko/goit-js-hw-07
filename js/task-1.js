const numberCategory = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberCategory.length}`);
numberCategory.forEach(el => {
    const title = el.querySelector('h2').textContent;
    const cat = el.querySelectorAll('ul li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${cat}`)
})