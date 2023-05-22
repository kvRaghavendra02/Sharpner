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

// var li = document.getElementsByTagName('li');
// console.log(li);


// for(var i=0; i<li.length;i++)
// {
//     li[i].style.fontWeight = 'bold';
//     li[i].style.backgroundColor="#f4f4f4";
// }
// li[2].style.backgroundColor="green";


//QUERYSELECTOR//

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color ='red'

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color ='blue'

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor ='green'

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';
// or can use thirdItem.hidden = true



//QUERYSELECTORALL//

// var titles =document.querySelectorAll('.list-group-item');

// console.log(titles);
// titles[1].style.color='green';

// var odd =document.querySelectorAll('li:nth-child(odd)');

// for(var i=0; i<odd.length; i++)
// {
//     odd[i].style.backgroundColor = 'green';
// }

// TRAVERSING THE DOM // 

//var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.background = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);


// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.background = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
//console.log(itemList.childNodes)

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild

// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// LastChild

// console.log(itemList.lastChild);

// //firstElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
//console.log(itemList.lastChild);

// nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);

// nextElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

//createElement

//Create a div
// var newDiv =document.createElement('div')

// // Add class
// newDiv.className = 'hello';

// //Add id
// newDiv.id = 'hello1'

// //Add attr
// newDiv.setAttribute('title','Hello Div');

// //Create text node
// var newDivText= document.createTextNode("Hello World");

// //Add text to div
// newDiv.appendChild(newDivText);
// //till here this exist in java script but not in html
// // where do you want to insert
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);
// newDiv.style.fontSize ='30px';
// //now we insert it in the path that we have created

// container.insertBefore(newDiv, h1)

// var newDiv =document.createElement('li')

// // Add class
// newDiv.className = 'hello';

// //Add id
// newDiv.id = 'hello1'

// //Add attr
// newDiv.setAttribute('title','Hello Div');

// //Create text node
// var newDivText= document.createTextNode("Hello World");

// //Add text to div
// newDiv.appendChild(newDivText);
// //till here this exist in java script but not in html
// // where do you want to insert
// var container = document.querySelector('.list-group');
// var h1 = document.querySelector('li');

// console.log(newDiv);
// //newDiv.style.fontSize ='30px';
// //now we insert it in the path that we have created

// container.insertBefore(newDiv, h1)

