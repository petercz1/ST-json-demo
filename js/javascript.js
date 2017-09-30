var results = $.get('https://jsonplaceholder.typicode.com/users').done(process_results).fail(blowup);

function create_td(inner_text) {
  var td = document.createElement('td');
  var inner_text = document.createTextNode(inner_text);
  td.appendChild(inner_text);
  return td;
}

function process_results(data) {
  var table = document.createElement('table');
  for (var counter = 0; counter < data.length; counter++) {
    var user = data[counter];
    var tr = document.createElement('tr');

    tr.appendChild(create_td(user.name));
    tr.appendChild(create_td(user.email));
    tr.appendChild(create_td(user.username));
    tr.appendChild(create_td(user.company.name));

    var td = document.createElement('td');
    var button = document.createElement('button');
    button.setAttribute('id', user.id);
    button.addEventListener('click', edit_me);
    var inner_text = document.createTextNode('edit');
    button.appendChild(inner_text);
    td.appendChild(button);
    tr.appendChild(td);

    var td = document.createElement('td');
    var button = document.createElement('button');
    button.setAttribute('id', user.id);
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

function edit_me() {
  console.log(this);
}

function delete_me() {
  console.log(this);
}