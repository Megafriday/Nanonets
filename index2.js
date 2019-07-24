var request = require('request');   // install request module by - 'npm install request'
var querystring = require('querystring')

const form_data = {
    'modelId' : 'fc6ce06b-974b-441f-a33a-f64988f6be12',
    'urls': 'https://cdn-ak.f.st-hatena.com/images/fotolife/p/paiza/20190724/20190724131419.jpg'
}

const options = {
    url : 'https://app.nanonets.com/api/v2/ImageCategorization/LabelUrls/',
    body: querystring.stringify(form_data),
    headers: {
        'Authorization' : 'Basic ' + Buffer.from('FNi2-9_We0QpPnFRZkcyGhTJ2pcTbMoS' + ':').toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}
request.post(options, function(err, httpResponse, body) {
    console.log(JSON.parse(body).result[0].prediction);
});