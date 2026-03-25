document.addEventListener("DOMContentLoaded", function () {
     const toggleLinks = document.querySelectorAll(".hidden-text-toggle");

     if (toggleLinks.length === 0) {
          return;
     }

     toggleLinks.forEach(function (toggleLink) {
          toggleLink.addEventListener("click", function (event) {
               event.preventDefault();

               let detail = null;
               let sibling = toggleLink.previousElementSibling;

               while (sibling) {
                    if (sibling.classList && sibling.classList.contains("hidden-text")) {
                         detail = sibling;
                         break;
                    }
                    sibling = sibling.previousElementSibling;
               }

               if (!detail) {
                    return;
               }

               detail.hidden = !detail.hidden;
               toggleLink.textContent = detail.hidden ? "[show more]" : "[show less]";
          });
     });
});
