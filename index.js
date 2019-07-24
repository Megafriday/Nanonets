const imgURL = 'https://cdn-ak.f.st-hatena.com/images/fotolife/p/paiza/20190724/20190724131419.jpg';
const data = 'modelId=fc6ce06b-974b-441f-a33a-f64988f6be12&urls=' + imgURL;

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
	console.log(JSON.parse(this.responseText).result[0].prediction);
  }
});

xhr.open("POST", "https://app.nanonets.com/api/v2/ImageCategorization/LabelUrls/");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("authorization", "Basic " + btoa("FNi2-9_We0QpPnFRZkcyGhTJ2pcTbMoS:"));

xhr.send(data);
