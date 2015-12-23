onLoad();

function onLoad () {
    var temp = document.getElementById('debug');
    var loading = document.createElement('p');
    loading.innerHTML = 'loading....';
    temp.appendChild(loading);

    setTimeout(function () {
        loading.innerHTML = 'Page is loaded';
    }, 5000)
}