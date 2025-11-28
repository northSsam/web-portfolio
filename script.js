document.getElementById("btn").addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("nama").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pesan").value = "";
    }, 5);
});   