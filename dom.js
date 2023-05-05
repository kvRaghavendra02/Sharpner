// DOCUMENT OBJECTS

//console.dir(document)
//console.log(document.domain);
//console.dir(document.URL);
//console.dir(document.title);
//console.dir(document.doctype);
//console.dir(document.head);
//console.dir(document.body);
//console.dir(document.all);

//GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(header);
//headerTitle.style.borderBottom = 'solid 3px #000';
//header.style.borderBottom = 'solid 3px #000';

//GETELEMENTBYCLASS //
var item = document.getElementsByClassName('title');
//console.log(item);
item[0].style.fontWeight = 'bold';
item[0].style.color = 'green';