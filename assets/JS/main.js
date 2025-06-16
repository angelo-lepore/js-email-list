const emailListEl = document.getElementById("emailList");
// const btnGeneraEl = document.getElementById("btnGenera");

const array = Array.from({ length: 10 });

array.forEach(() => {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => {
      const mailRandom = data.response;

      // gen <li>
      const li = document.createElement("li");
      li.textContent = mailRandom;
      li.classList.add("list-group-item");
      emailListEl.appendChild(li);
    });
});
