// Generating dynamic html element from a javascript array
// reference: https://stackoverflow.com/questions/54706080/generating-dynamic-html-cards-from-a-javascript-array 

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
                        <h2><a href="${result.detail_project}">${result.title}</a></h2>
                    </header>
                    <a href="${result.detail_project}" class="${result.image_class}"><img src=${result.image} alt="" /></a>
                    <p>${result.desc}</p>
                    <ul class="actions special">
                        <li><a href="${result.detail_project}" class="button">View Project</a></li>
                    </ul>
                </article>
            `;
            
            // Append newyly created element to the container
            container.innerHTML += content;
            // console.log(container);
        })
    });
