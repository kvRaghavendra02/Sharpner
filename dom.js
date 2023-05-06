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


// var headeritem = document.getElementById('h2-header');
// console.log(item);
// headeritem.style.fontWeight = 'bold';
// headeritem.style.fontStyle = 'italic';
// headeritem.style.color = 'green';



//GETELEMENTBYCLASS //
// var item = document.getElementsByClassName('list-group-item');
// console.log(item);


// for(var i=0; i<item.length;i++)
// {
//     item[i].style.fontWeight = 'bold';
//     item[i].style.backgroundColor="#f4f4f4";
// }
// item[2].style.backgroundColor="green";

//console.log(document.all);


//GETELEMENTBYTAGNAME

var li = document.getElementsByTagName('li');
console.log(li);


for(var i=0; i<li.length;i++)
{
    li[i].style.fontWeight = 'bold';
    li[i].style.backgroundColor="#f4f4f4";
}
li[2].style.backgroundColor="green";
