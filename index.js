class TvShow {
    constructor(name, genre, image, url) {
        this.name = name;
        this.genre = genre;
        this.image = image;
        this.url = url;
    }
    toText() {
        return `${this.name} - (${this.genre}) ${this.Image}`;
    }
    
    toHtml(){
        return `<h1>${this.name}</h1>
        <div>${this.genre}</div>
        <img src="${this.image}" alt="${this.name}" width=200px height=200px><br>
        <a href="${this.url}" target="blank">Tv Maze link:${this.name}</a>`;
    }
}

const request = fetch("./data.json")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        for (let i = 0; i < json.length; i++) {
            //console.log(json[i].name, json[i].genres[0]);
            const tvShow = new TvShow(json[i].name, json[i].genres[0], json[i].image.original, json[i].url);
            console.log(tvShow.toText());
            document.body.innerHTML += tvShow.toHtml();
        };
    });

console.log(request);