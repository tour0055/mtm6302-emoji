const emojis = [
  128512,
  128513,
  128514,
  128515,
  128516,
  128517,
  128518,
  128519,
  128520,
  128521,
  128522,
  128523,
  128524,
  128525,
  128526
];

const gallery = document.getElementById("emoji-gallery");

for (let i = 0; i < emojis.length; i++) {

  const card = document.createElement("div");

  card.classList.add("emoji-card");

  card.innerHTML =
    '<span class="emoji">&#' + emojis[i] + ';</span>' +
    '<code>' + emojis[i] + '</code>';

  gallery.appendChild(card);

}
