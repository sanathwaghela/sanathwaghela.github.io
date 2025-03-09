'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

// Sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", function () {
        elementToggleFunc(sidebar);
    });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event listeners to all nav links
navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
        const targetPage = this.innerText.toLowerCase();

        // Remove 'active' class from all pages and links
        pages.forEach(page => page.classList.remove("active"));
        navigationLinks.forEach(nav => nav.classList.remove("active"));

        // Activate the correct page
        pages.forEach(page => {
            if (page.dataset.page === targetPage) {
                page.classList.add("active");
            }
        });

        // Activate the clicked navbar link
        this.classList.add("active");

        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Testimonials modal
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
};

// Add event listener for testimonials
testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();
    });
});

// Close modal event listeners
if (modalCloseBtn && overlay) {
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    overlay.addEventListener("click", testimonialsModalFunc);
}

// Custom select dropdown
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");

if (select) {
    select.addEventListener("click", function () {
        elementToggleFunc(this);
    });

    selectItems.forEach(item => {
        item.addEventListener("click", function () {
            let selectedValue = this.innerText.toLowerCase();
            selectValue.innerText = this.innerText;
            elementToggleFunc(select);
            filterFunc(selectedValue);
        });
    });
}

// Filter function
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterFunc = function (selectedValue) {
    filterItems.forEach(item => {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};

// Filter buttons
const filterBtn = document.querySelectorAll("[data-filter-btn]");
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
});

// Form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
    input.addEventListener("input", function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
});
