// Generating dynamic html element from a javascript array
// reference: https://stackoverflow.com/questions/54706080/generating-dynamic-html-cards-from-a-javascript-array
//            https://stackoverflow.com/questions/6041593/adding-click-event-via-addeventlistener-to-confirm-navigation-from-a-hyperlink

// data for posts
fetch("./assets/data/post_data.json")
    .then(res => res.json())
    .then(data => {
        const container = document.querySelector('body #wrapper #main .posts');
        data.forEach((result, idx) => {
            // Construct content
            const content = `
                <article>
                    <header>
                        <span class="date">${result.date}</span>
                        <h2><a>${result.title}</a></h2>
                    </header>
                    <a class="${result.image_class}"><img src=${result.image} alt="" /></a>
                    <p>${result.desc}</p>
                    <ul class="actions special">
                        <li><a href="generic.html" class="button view" id=${result.detail_project}>View Project</a></li>
                    </ul>
                </article>
            `;
            
            // Append newyly created element to the container
            container.innerHTML += content;
            // console.log(container);
        })

        var view_buttons = document.getElementsByClassName("button view");

        for (var i = 0; i < view_buttons.length ; i++) {
            view_buttons[i].addEventListener("click", function (event) {
                // save github link in the ID of html tag, get the ID
                sessionStorage.setItem('code', this.id);
            })
        }
    });
