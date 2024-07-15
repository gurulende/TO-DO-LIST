const addButton = document.getElementById('addButton');
const NewInput = document.getElementById('NewToDo');
const ToDoList = document.getElementById('ToDoList');

function addToDO(){

  const NewTodoText = NewInput.value;
  NewInput.value = '';

  const CompleteCheckBox = document.createElement('input');
  CompleteCheckBox.type = 'checkbox';


  const ToDoText = document.createElement('span');
  ToDoText.textContent = NewTodoText;

  const DeleteButton = document.createElement('button');
  DeleteButton.textContent = 'Delete';

  const ListItem = document.createElement('li');
  ListItem.appendChild(CompleteCheckBox);
  ListItem.appendChild(ToDoText);
  ListItem.appendChild(DeleteButton);

  ToDoList.append(ListItem);

  DeleteButton.addEventListener('click',function(){
    ToDoList.removeChild(ListItem);
  })

  CompleteCheckBox.addEventListener('change',function(){
    if(CompleteCheckBox.checked){
      ListItem.classList.add('completed');
    }
    else{
      ListItem.classList.remove('completed');
    }
  })

  NewInput.focus();


  }

  addButton.addEventListener('click',addToDO);

  const toastTrigger = document.getElementById('addButton')
  const toastLiveExample = document.getElementById('liveToast')
  
  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }