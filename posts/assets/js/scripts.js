function randomImage() {
  const max = 5;
  const min = 1;
  const num = parseInt(Math.random() * (max - min) + min);

  return `assets/img/${num}.webp`;
}

document.addEventListener("DOMContentLoaded", async function() {
  const raw = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await raw.json();

  for (let i = 0; i < res.length; i++) {
    const post = res[i];

    const card = document.querySelector(".card").cloneNode(true);

    card.children.item(0).innerHTML = post.title;
    card.children.item(1).innerHTML = post.body;

    card.style.backgroundImage = `url(${ randomImage() })`;

    document.querySelector("section").appendChild(card);
  }
});
