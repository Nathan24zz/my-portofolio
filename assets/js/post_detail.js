// get the post that will show more details
var a = sessionStorage.getItem('code');

fetch("./assets/data/post_data.json")
    .then(res => res.json())
    .then(data => {
        const container = document.querySelector('body #wrapper #main .post');

        for (var i = 0; i < data.length; ++i) {
            if (a == data[i]["detail_project"]) {
                var result = data[i];
                const content = `
                    <header class="major">
                        <span class="date">${result.date}</span>
                        <h1>${result.title}</h1>
                        <p>${result.detail_desc_1}</p>
                    </header>
                    <div class="image main"><img src=${result.image} alt="" /></div>
                    <p>${result.detail_desc_2}</p>
        
                    <!-- change not a link -->
                    <a class="button primary small">Tech</a> 
                    ${result.tech}
                    <br>
                    <a href=${result.detail_project} class="button small">Github</a>
                `
                container.innerHTML += content;
                break;
            }
        }
    });
