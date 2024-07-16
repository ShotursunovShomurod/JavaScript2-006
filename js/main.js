const API__USERS = "https://jsonplaceholder.typicode.com";
const hero__context = document.querySelector(".hero__context");
const modal = document.getElementById("myModal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let usersData = [];
const itemsPerPage = 3;
let currentPage = 1;

window.onload = function() {
    fetchUsers(API__USERS);
};

closeModal.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

async function fetchUsers(api) {
    try {
        let response = await fetch(`${api}/users`);
        usersData = await response.json();
        console.log(usersData);
        createCard(); // Avvalgi kartalarni yaratish
    } catch (err) {
        console.log(err);
    }
}

function createCard() {
    hero__context.innerHTML = ''; // Avvalgi kartalarni tozalash
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = usersData.slice(startIndex, endIndex);

    paginatedData.forEach((post) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="./assets/men.png" alt="Profile Picture">
        <h3>${post.name}</h3>
        <p>${post.company.catchPhrase}</p>
        <button onclick="showModal(${post.id})">View More</button>`;
        
        hero__context.appendChild(card);
    });

    setupCarousel();
}

function showModal(id) {
    fetch(`${API__USERS}/users/${id}`)
        .then(response => response.json())
        .then(data => {
            modalBody.innerHTML = `
                <h2>${data.name}</h2>
                <p><strong>Username:</strong> ${data.username}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Address:</strong> ${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Website:</strong> ${data.website}</p>
                <p><strong>Company:</strong> ${data.company.name}</p>
                <p><strong>Catch Phrase:</strong> ${data.company.catchPhrase}</p>
            `;
            modal.style.display = "flex";
        });
}

function setupCarousel() {
    let maxPages = Math.ceil(usersData.length / itemsPerPage);

    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            createCard();
        }
    };

    nextButton.onclick = () => {
        if (currentPage < maxPages) {
            currentPage++;
            createCard();
        }
    };
}
