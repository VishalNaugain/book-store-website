document.addEventListener("DOMContentLoaded", () => {
  let cartCount = 0;
  const buttons = document.querySelectorAll(".book-card button");
  const cart = document.getElementById("cart");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      cartCount++;
      cart.textContent = "Cart (" + cartCount + ")";
    });
  });

  
  function searchBooks() {
    let input = searchInput.value.toLowerCase();
    let books = document.querySelectorAll(".book-card");

    books.forEach(book => {
      let title = book.querySelector("h3").textContent.toLowerCase();
      if (title.includes(input)) {
        book.style.display = "block";  
      } else {
        book.style.display = "none";
      }
    });
  }

  searchBtn.addEventListener("click", searchBooks);
  searchInput.addEventListener("keyup", searchBooks);
});
