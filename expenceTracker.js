var form = document.getElementById('addForm');
form.addEventListener('submit', submit);
var itemList =document.getElementById('users');
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', editItem);
//console.log("hello")

let lc = JSON.parse(localStorage.getItem("formData"));

lc.forEach(function(item)
{
    var expense = item.expence;
  var description = item.description;
  var choice = item.choice;
  var combined = expense+" "+description+" "+choice+" ";
  var li = document.createElement('li');
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');
  deleteBtn.className = 'delete';
  editBtn.className = 'edit';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  editBtn.appendChild(document.createTextNode('Edit'));

  li.className ='list-group-item';
  li.appendChild(document.createTextNode(combined));
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  itemList.appendChild(li);

  // Do something with the values
//   console.log("Expense:", expense);
//   console.log("Description:", description);
//   console.log("Choice:", choice);
//   console.log();
});
    // var expence = document.getElementById('expence').value;
    // var description = document.getElementById('description').value;
    // var choice = document.getElementById('choice').value;
    //var combined = expence+" "+description+" "+choice+" ";

    //let formData = JSON.parse(localStorage.getItem('formData'));
    


function submit(e)
{
    e.preventDefault();
    var expence = document.getElementById('expence').value;
    var description = document.getElementById('description').value;
    var choice = document.getElementById('choice').value;
    var combined = expence+" "+description+" "+choice+" ";

    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    editBtn.className = 'edit';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    editBtn.appendChild(document.createTextNode('Edit'));

    li.className ='list-group-item';
    li.appendChild(document.createTextNode(combined));
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push({expence, description,choice});
    localStorage.setItem('formData', JSON.stringify(formData));
}

function removeItem(e)
    {
        e.preventDefault();
        //console.log(1);
        if(e.target.classList.contains('delete'))
            {
                var li = e.target.parentElement;
                itemList.removeChild(li);  

                var expence = li.textContent.split(' ')[0]; // Extract the email from the list item text
                console.log(expence)
                var formData = JSON.parse(localStorage.getItem('formData')) || [];

                // Find the item in the array with the matching email
                var itemIndex = formData.findIndex(item => item.expence === expence);
                    console.log(itemIndex)
                if (itemIndex !== -1) {
                    console.log("yes")
                    formData.splice(itemIndex,1); // Remove the item from the array
                    localStorage.setItem('formData', JSON.stringify(formData)); // Update the localStorage
                }

                
            }
    }

    function editItem(e)
    {
        e.preventDefault();
        //console.log(1);
        if(e.target.classList.contains('edit'))
        {    
                var li = e.target.parentElement;  
                var expence = li.textContent.split(' ')[0]; // Extracts the name form the list item text
                var description = li.textContent.split(' ')[1]; // Extract the email from the list item text
                var choice = li.textContent.split(' ')[2];
                var itemInputBoxexpence = document.getElementById('expence');
                var itemInputBoxdescription = document.getElementById('description');
                var itemInputBoxchoice = document.getElementById('choice');
                itemInputBoxexpence.value = expence;
                itemInputBoxdescription.value = description;
                itemInputBoxchoice.value = choice;
                //console.log('name',name);
                //console.log(email);
                itemList.removeChild(li);
                var formData = JSON.parse(localStorage.getItem('formData')) || [];

                // Find the item in the array with the matching email
                var itemIndex = formData.findIndex(item => item.expence === expence);
                    //console.log(itemIndex)
                if (itemIndex !== -1) {
                    //console.log("yes")
                    formData.splice(itemIndex,1); // Remove the item from the array
                    localStorage.setItem('formData', JSON.stringify(formData)); // Update the localStorage
                }

                
            }

    }