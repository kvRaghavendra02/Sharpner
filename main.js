// adding edit button for the existing items
// var itemList1 = document.querySelectorAll('list-group-item');
// itemList1.forEach(function(item)
// {
//     var editBtn1 = document.createElement('button');
//     editBtn1.classList.add('btn btn-secondary btn-sm float-right Edit mr-2');
//     editBtn1.textContent = 'Edit';
//     item.appendChild(editBtn1);
//     console.log(1)
// });

// main program
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var itemList1 = document.getElementById('description');
var filter = document.getElementById('filter')
// var but = document.getElementsByTagName('li');
// //console.log(but);
// Array.from(but).forEach(function(item)
//     {
//         var editBtn = document.createElement('button');
//         editBtn.className = 'btn btn-secondary btn-sm float-right Edit mr-2';
//         editBtn.appendChild(document.createTextNode('Edit'));
//         //console.log(editBtn)
        
        
//     });


// Form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup',filterItems);

//Add item

function addItem(e)
{
    e.preventDefault();

    //console.log('1');
    //Get input Value
    var newItem = document.getElementById('item').value;
    var newItem1 = document.getElementById('description').value;

    //Create new li element
    var li = document.createElement('li');
    //Add class
    li.className ='list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "+newItem1))

    //Create del buttom edit button element
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');

    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-secondary btn-sm float-right Edit mr-2';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('Edit'));

    //Append button to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    //Append li to list
    itemList.appendChild(li);

}


// remove item
function removeItem(e)
{
    //console.log(1);
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }


}

//Filter Items
function filterItems(e)
{
    // Convert to lower case
    var text = e.target.value.toLowerCase();
    // Get List
    var items =itemList.getElementsByTagName('li');
    
    //console.log(items);
    //convert to an array
    Array.from(items).forEach(function(item)
    {
        var itemName = item.firstChild.textContent;
        var description =item .childNodes[1].textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
}


