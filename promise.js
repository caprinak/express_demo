function getData(method, url){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if(this.status >=200 && this.status <300){
            resolve(xhr.response);
            }else{
            reject({
                status: this.status,
                statusText : xhr.statusText
            });
        }
    };
        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText : xhr.statusText
            });
        };
        xhr.send();
        
    });
}

getData('GET','https://jsonplaceholder.typicode.com/albums').then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});