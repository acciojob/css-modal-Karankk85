//your JS code here. If required.
const openModal = document.getElementById("openModal");
        const modal = document.getElementById("modal");
        const closeModal = document.getElementById("closeModal");
        
        openModal.addEventListener("click", () => {
            modal.style.display = "block";
        });
        
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
        
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });