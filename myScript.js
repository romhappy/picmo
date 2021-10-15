var pictoBoire = "media/boire.png";
var pictoManger = "media/manger.png";
let count = 0;
let result;

function createimg(key,sizeA,sizeB) {
var theimage = document.createElement("img");
theimage.setAttribute('src', key);
theimage.setAttribute('alt', 'image');
theimage.height = sizeA;
theimage.width = sizeB;
if (count<5) {
    document.getElementById('sentence_container').append(theimage); 
   } else {
       alert("effacez les pictos")
   }
count = count + 1;
}
