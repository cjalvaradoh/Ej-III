document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comentarioFor"); 
    const commentList = document.getElementById("comentarioLista");
    const commentInput = document.getElementById("comentario");
    const charCount = document.getElementById("contador");

    commentInput.addEventListener("input", function () {
        const remaining = 200 - commentInput.value.length;
        charCount.textContent = `${remaining} caracteres restantes`;
    });

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const comment = commentInput.value.trim();

        if (username && comment) {
            const li = document.createElement("li");
            li.classList.add("list-group-item");

            li.innerHTML = `<strong>${username}</strong>: ${comment} 
                <button class="btn btn-danger btn-sm float-end delete-btn">Eliminar</button>`;

            commentList.appendChild(li);

            commentForm.reset();
            charCount.textContent = "200 caracteres restantes";

            li.querySelector(".delete-btn").addEventListener("click", function () {
                commentList.removeChild(li);
            });
        }
    });
});
