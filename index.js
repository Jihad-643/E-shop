let cartCount = 0;
const buyButtons = document.querySelectorAll('.btn-primary'); 
buyButtons.forEach(button => { 
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount; 
        const productName = button.closest('.card-body').querySelector('.card-title').innerText; 
        alert(`${productName} added to cart 🛒`); 
    });
});
