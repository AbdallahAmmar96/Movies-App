const linkPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
const linkTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
function fetch(url, callBack) {
    const xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            callBack(response);
        }
    }
    xhr.open("GET", url);
    xhr.send();
}
function filter(url, callBack) {
    fetch(url, response => {
        const result = response.results.map((element) => {
            const { id, vote_average, poster_path, overview, release_date, original_title } = element;
            return {
                id: id,
                title: original_title,
                descrption: overview,
                date: release_date,
                img: poster_path,
                vote: vote_average,
            }
        })
        callBack(result);
    })
}
function call(object, callback) {
    let link = "";
    if (object[name])
        link = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${object[name]}`;
    if (object.pop)
        link = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
    if (object.top)
        link = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
    filter(link, callback);
}



























