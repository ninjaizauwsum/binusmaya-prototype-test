const buttons = document.querySelectorAll(".subtab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button =>{

    button.addEventListener("click", () =>{
        //remove active from all buttons
         buttons.forEach(btn => btn.classList.remove("active"));

         //remove active from all content
         contents.forEach(content => content.classList.remove("active"));

         //activate clicked button
         button.classList.add("active");


         //show matching tab
         const tabId = button.getAttribute("data-tab");

          document.getElementById(tabId)
            .classList.add("active");
    });
});

const folders = document.querySelectorAll(".folder-header");

folders.forEach(folder => {

    folder.addEventListener("click", () => {

        const content = folder.nextElementSibling;

        if(content.style.display === "block") {

            content.style.display = "none";

        } else {

            content.style.display = "block";

        }

    });

});