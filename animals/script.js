const response = await fetch("animals.json")
const animals = await response.json();
console.log(animals)

const main = document.getElementById("main")
animals.forEach((animal)=>{

    const article = document.createElement("article");
    main.appendChild(article)

    const img = document.createElement("img");
    img.alt = animal["animal"]
    img.src = animal["image"]
    article.appendChild(img);

    const div = document.createElement("div")
    div.className = "info"
    article.appendChild(div)

    const h2 = document.createElement("H2")
    h2.textContent = animal["animal"]
    div.appendChild(h2)
    
    const p = document.createElement("p")
    p.textContent = animal["description"]
    div.appendChild(p)

    const ul = document.createElement("ul")
    div.appendChild(ul)

    const allanswers = animal["answers"]
    allanswers.forEach((an)=>{
        const li = document.createElement("li")
        li.textContent = an
        ul.appendChild(li)
    })
})