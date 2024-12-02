let cart = [];
let totalPrice = 0;

function addToCart(book, price) {
  cart.push({ book, price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const totalPriceElement = document.getElementById('total-price');

  cartList.innerHTML = '';
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.book} - $${item.price}`;
    cartList.appendChild(listItem);
  });

  totalPriceElement.textContent = totalPrice;
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been received.`);
      document.getElementById('contact-form').reset();
    } else {
      alert('Please fill in all fields.');
    }
  });

  function navigateToCategory(category) {
    // Scroll to the Books Available section
    document.getElementById('books').scrollIntoView({ behavior: 'smooth' });
  
    // Apply filter for the selected category
    filterBooks(category);
  }
  
  function filterBooks(category) {
    const books = document.querySelectorAll('.book-card');
    
    books.forEach(book => {
      if (category === 'all' || book.dataset.category === category) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  }

  let currentIndex = 0;

function moveCarousel(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const offset = -currentIndex * (items[0].offsetWidth + 20); // 20px is the margin between items
  document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

function filterBooks(category) {
  // Ambil semua buku
  const allBooks = document.querySelectorAll('.book-card');

  // Sembunyikan semua buku terlebih dahulu
  allBooks.forEach(book => {
      book.style.display = 'none';
  });

  // Tampilkan buku sesuai kategori yang dipilih
  const selectedBooks = document.querySelectorAll('.book-card.' + category);
  selectedBooks.forEach(book => {
      book.style.display = 'block';
  });
}

// Function to add book to cart
function addToCart(bookName, bookPrice) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingItem = cart.find(item => item.name === bookName);

  if (existingItem) {
    existingItem.quantity += 1; // Increment quantity if the book is already in the cart
  } else {
    cart.push({
      name: bookName,
      price: bookPrice,
      quantity: 1,
      image: getBookImage(bookName)
    });
  }

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Notify the user that the item has been added to the cart
  alert(`${bookName} telah ditambahkan ke keranjang!`);
}

// Function to get the image URL of the book (replace with your actual images)
function getBookImage(bookName) {
  switch (bookName) {
    case 'Algoritma Pemrograman': return 'gambar/Algoritma.jpg';
    case 'Godam': return 'gambar/Godam.jpeg';
    case 'Juki': return 'gambar/Juki.jpg';
    case 'Marvel Comic 1000': return 'gambar/Marvel.jpg';
    case 'BLUELOCK': return 'gambar/Bluelock.jpg';
    default: return 'gambar/default.jpg';
  }
}

function filterBooks(category) {
  const allBooks = document.querySelectorAll('.book-card');
  allBooks.forEach(book => {
      if (book.dataset.category === category || category === 'all') {
          book.style.display = 'block';
      } else {
          book.style.display = 'none';
      }
  });
}

document.querySelector('form').addEventListener('submit', function(e) {
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();
  if (!name || !email || !message) {
      e.preventDefault();
      alert('Semua bidang harus diisi.');
  }
});

  
  