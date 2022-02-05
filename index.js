var API = "Your API Key";
var PrefixURL = "https://www.googleapis.com/blogger/v3/blogs/";
var requestURL = PrefixURL + "4773301202353643011?key=" + API;
var proxy = "https://thawing-lake-15954.herokuapp.com/";
var requestURL = proxy + PrefixURL + "4773301202353643011/posts?key=" + API;
console.log(requestURL);
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
request.send();

//var blog = 'abc';

request.onload = function () {
    blogstr = request.response;
    blog = JSON.parse(blogstr);
    console.log(blog.items);
    
    for (var x=0; x<blog.items.length; x++) {
        
        item = document.createElement('div');
        item.setAttribute('class', 'col-11 col-lg-5 my-3 mb-5 border border-dark item');
        item.setAttribute('id', x);
        item.setAttribute('onclick', 'show(this.id)')

        title = document.createElement('div');
        title.setAttribute('class', 'bg-primary border border-dark text-center title');
        title.innerHTML = "<h4>" + blog.items[x].title + "</h4>";
        item.appendChild(title);
        
        content = document.createElement('div')
        content.setAttribute('class', 'bg-danger text-light border border-dark text-justify px-2 content');
        content.innerHTML = blog.items[x].content;
        
        item.appendChild(content);


        canvas = document.getElementById('canvas');
        canvas.appendChild(item);



    }
    
}

//console.log(blog);
