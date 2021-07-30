var xhttp = new XMLHttpRequest();

xhttp.onload = function() {
    if (this.status == 200 && this.readyState == 4) {
        var articles = JSON.parse(this.responseText).articles;
        for (var i = 0; i < articles.length; i++) {
            document.getElementById("row").innerHTML +=
                `<div class="col-md-6">
            <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                <div class="card-body d-flex flex-column align-items-start">
                    <strong class="d-inline-block mb-2 text-primary">World</strong>
                    <h6 class="mb-0">
                        <a target="_blank" class="text-dark" href="${articles[i].url}">${articles[i].title}</a>
                    </h6>
                    <div class="mb-1 text-muted small">${articles[i].publishedAt}</div>
                    <p class="card-text mb-auto">${articles[i].description}</p>
                    <a class="btn btn-outline-primary btn-sm" role="button" href="http://www.jquery2dotnet.com/">Continue reading</a>
                </div>
                <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="${articles[i].urlToImage}" style="width: 200px; height: 250px;">
            </div>
        </div>
            `;
        }
    }
};

/*

*/

xhttp.open(
    "GET",
    "https://newsapi.org/v2/everything?q=sports&apiKey=3914d570b5c24f30b1afca67377c83ef"
);
xhttp.send();