document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelectorAll("#cart-items li");
    const totalPriceElement = document.getElementById("total-price");

    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector(".price").textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector(".quantity").textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = `$${total}`;
    }

    cartItems.forEach(item => {
        const increaseButton = item.querySelector(".increase");
        const decreaseButton = item.querySelector(".decrease");
        const deleteButton = item.querySelector(".delete");
        const likeButton = item.querySelector(".like-button");
        const quantityElement = item.querySelector(".quantity");

        increaseButton.addEventListener("click", () => {
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotalPrice();
        });

        decreaseButton.addEventListener("click", () => {
            const currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
                quantityElement.textContent = currentQuantity - 1;
                updateTotalPrice();
            }
        });

        deleteButton.addEventListener("click", () => {
            item.remove();
            updateTotalPrice();
        });

        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("liked");
        });
    });

    updateTotalPrice(); // Initial calculation
});
