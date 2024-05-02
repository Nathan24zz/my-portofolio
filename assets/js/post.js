// Generating dynamic html element from a javascript array
// reference: https://stackoverflow.com/questions/54706080/generating-dynamic-html-cards-from-a-javascript-array 

// data for posts
const apiResult = [{
    date: "May 29, 2023",
    title: "Undergradute Final Project",
    detail_project: "generic.html",
    image_class: "image fit",
    image: "images/final-project-web.png",
    desc: "Create a website to record human movements, and then the robot will follow. The program use Python as a server to communicate with the Javascript client. The server uses socketio library, running on a shared thread with ROS2 nodes."
}, {
    date: "April 7, 2023",
    title: "Neural Network From Scratch",
    detail_project: "https://github.com/Nathan24zz/NeuralNetwork",
    image_class: "image fit",
    image: "images/nn.png",
    desc: `A tiny scalar-valued autograd engine and a neural net library on top of it with PyTorch-like API.
    Take reference from <a href="https://github.com/karpathy/micrograd">Karpathy Github</a>`
}, {
    date: "May 25, 2023",
    title: "Keypoint RCNN Training",
    detail_project: "https://github.com/Nathan24zz/keypoint_rcnn_training_pytorch",
    image_class: "image fit4large",
    image: "images/keypoint.jpg",
    desc: "Train a Custom Keypoint Detection Model for humanoid robot with PyTorch."
}, {
    date: "June 17, 2022",
    title: "rePLASC",
    detail_project: "https://github.com/Arnolds18/C22-CE01",
    image_class: "image fit",
    image: "images/replasc.png",
    desc: "An app to increase public awareness about plastic waste and decreasing gas emission."
}
];


// const container = document.getElementsByClassName("is-preload").getElementsById("wrapper");
const container = document.querySelector('body #wrapper #main .posts');
apiResult.forEach((result, idx) => {

    // Construct card content
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
    
    // Append newyly created card element to the container
    container.innerHTML += content;
    // console.log(container);
})
