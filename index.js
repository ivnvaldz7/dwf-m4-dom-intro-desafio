const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const lista = document.querySelector(".lista");
  lista.innerHTML = "";

  cosasQueAprendimos.forEach((cosa) => {
    const li = document.createElement("li");
    li.textContent = cosa.tema;
    li.className = cosa.class;
    lista.appendChild(li);
  });
}

main();
