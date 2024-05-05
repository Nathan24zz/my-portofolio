// get the post that will show more details
var a = sessionStorage.getItem('code');

fetch("./assets/data/post_data.json")
    .then(res => res.json())
    .then(data => {
        console.log(data.length);
        const container = document.querySelector('body #wrapper #main .posts');
        for (var i = 0; i < data.length; ++i) {
            if (a == data[i]["detail_project"]) {
                console.log(data[i].detail_project);
                break;
            }
        }
    });
