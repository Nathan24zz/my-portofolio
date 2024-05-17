// Generating dynamic html element from a javascript array
// reference: https://stackoverflow.com/questions/54706080/generating-dynamic-html-cards-from-a-javascript-array
//            https://stackoverflow.com/questions/6041593/adding-click-event-via-addeventlistener-to-confirm-navigation-from-a-hyperlink

// var global to hold json data
var data_global;

// define max article every page
const post_per_page = 4;
// define current active page
var active_page = 1;
// global var to hold amount of pages
var amount_of_page = 0;


function loadPosts() {
    // get html for posts class
    const container = document.querySelector('body #wrapper #main .posts');
    // reset inner html
    container.innerHTML = '';

    // display post according to page
    // get start index
    const start_index = (active_page-1) * post_per_page;
    // get end index
    var end_index = active_page * post_per_page - 1;
    // safety if to make sure end index does not surpass the amount of data 
    if (end_index > data_global.length - 1) {end_index = data_global.length - 1;}
    // loop to change inner html of class posts
    for (var i=start_index; i<=end_index; i++) {
        const result = data_global[i];
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
    }

    // assign function to each view button
    var view_buttons = document.getElementsByClassName("button view");
    for (var i=0; i < view_buttons.length ; i++) {
        view_buttons[i].addEventListener("click", function (event) {
            // save github link in the ID of html tag, get the ID
            sessionStorage.setItem('code', this.id);
        })
    }
};

function updateFooter(){
    const footer = document.querySelector('body #wrapper #main footer');
    // loop as many times as amount of page to create page number
    var page_number_html = '';
    for (var i=1; i<=amount_of_page; i++) {
        var active = "";
        // add string 'active' for 1st page
        if (i==active_page) {active = "active";}
        page_number_html = page_number_html + `<a href="#main" class="page ${active}" id=${i}>${i}</a>`
    }
    // change footer html
    var footer_content = `
        <div class="pagination">
            <a href="#main" class="previous">Prev</a>
            ${page_number_html}
            <a href="#main" class="next">Next</a>
        </div>
    `;
    footer.innerHTML = footer_content;

    addFuncFooter();
};

function addFuncFooter() {
    // assign function to each button in the footer section
    // get button previous
    var prev_button = document.getElementsByClassName("previous");
    // when the prev button is clicked,
    // change active page to previous page and load suitable post
    prev_button[0].addEventListener("click", function (event) {
        if (active_page > 1) {
            active_page = active_page - 1;
            loadPosts();
            updateFooter();
        }
    })

    // get button next
    var next_button = document.getElementsByClassName("next");
    // when the next button is clicked,
    // change active page to next page and load suitable post
    next_button[0].addEventListener("click", function (event) {
        if (active_page < amount_of_page) {
            active_page = active_page + 1;
            loadPosts();
            updateFooter();
        }
    })

    // get page number button 
    var page_number_buttons = document.getElementsByClassName("page");
    // when the page number button is clicked,
    // change active page to next page and load suitable post
    for (var i=0; i < page_number_buttons.length; i++) {
        page_number_buttons[i].addEventListener("click", function (event) {
            // prevent active_page become string
            active_page = Number(this.id);
            loadPosts();
            updateFooter();
        })
    }
}


// get json data when page is load
fetch("./assets/data/post_data.json")
    .then(res => res.json())
    .then(data => {
        data_global = data;

        // PAGE NUMBER
        // define max post every page
        // calculate amount of page that is needed
        amount_of_page = Math.floor(data_global.length/post_per_page);
        // add 1 page if there is a remainder  
        if (data_global.length % post_per_page != 0) {amount_of_page = amount_of_page + 1};

        updateFooter();
        loadPosts();
    });
