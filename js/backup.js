var results = $.get('https://jsonplaceholder.typicode.com/users').done(process_results).fail(blowup);

function process_results(data) {
  var table = document.createElement('table');
  for (var counter = 0; counter < data.length; counter++) {
    var user = data[counter];
    var tr = document.createElement('tr');

    var td = document.createElement('td');
    var inner_text = document.createTextNode(user.email);
    td.appendChild(inner_text);
    tr.appendChild(td);

    var td = document.createElement('td');
    var inner_text = document.createTextNode(user.username);
    td.appendChild(inner_text);
    tr.appendChild(td);

    var td = document.createElement('td');
    var inner_text = document.createTextNode(user.company.name);
    td.appendChild(inner_text);
    tr.appendChild(td);

    var td = document.createElement('td');
    var inner_text = document.createTextNode(user.name);
    td.appendChild(inner_text);
    tr.appendChild(td);

    var td = document.createElement('td');
    var button = document.createElement('button');
    button.addEventListener('click', edit_me);
    var inner_text = document.createTextNode('edit');
    button.appendChild(inner_text);
    td.appendChild(button);
    tr.appendChild(td);

    var td = document.createElement('td');
    var button = document.createElement('button');
    button.addEventListener('click', delete_me);
    var inner_text = document.createTextNode('delete');
    button.appendChild(inner_text);
    td.appendChild(button);
    tr.appendChild(td);

    table.appendChild(tr);
  }
  console.log(table);
document.querySelector('#users').appendChild(table);
}


function blowup(reason) {
  console.log(reason);
}
function edit_me(){
    console.log(this);
}
function delete_me(){
    console.log(this);
}


