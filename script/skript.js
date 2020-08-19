let books = document.querySelectorAll(".books"),
  book = document.querySelectorAll(".book"),
  elem = document.getElementsByTagName("a"),
  adv = document.querySelector(".adv"),
  li = document.getElementsByTagName("li"),
  ul = document.getElementsByTagName("ul");

books[0].append(book[2]);
books[0].prepend(book[1]);
book[4].after(book[3]);

document.body.style.backgroundImage = "url(./image/adv.jpg)";
elem[2].textContent = '"Книга 3. this и Прототипы Объектов"';
adv.remove();
li[9].after(li[12]);
li[10].after(li[14]);
li[13].after(li[8]);
li[46].after(li[41]);
li[38].after(li[44]);
li[41].after(li[38]);

const newElem = document.createElement("li");
newElem.textContent = "Глава 8: За пределами ES6";
ul[5].append(newElem);
li[55].after(li[57]);
