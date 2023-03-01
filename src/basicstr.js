const toDoListDisplay = () => {
// reference the div element delelist from markup
  const deleteList = document.querySelector('.deletelist');
  // const newTask = document.createElement('li');
  // newTask.classList.add('deleteli');
  // deleteList.appendChild(newTask);

  // array of objects

  const toDoLists = [
    {
      description: 'Wake up ',
      completed: false,
      id: 0,
    },

    {
      description: 'Have Brush ',
      completed: false,
      id: 1,
    },

    {
      description: 'Take Breakfast ',
      completed: false,
      id: 2,
    },

    {
      description: 'Dress up Wel ',
      completed: false,
      id: 3,
    },

    {
      description: 'Start Coding',
      completed: false,
      id: 4,
    },
  ];
  const brkEle = document.createElement('br');
  for (let i = 0; i < toDoLists.length; i += 1) {
    deleteList.innerHTML += `<li class='deleteli'><input type='checkbox' id="chkbox" class= 'chkbox'></input><span>${toDoLists[i].description}</span></li>`;
    deleteList.insertAdjacentElement('afterend', brkEle);
  }
};

export default toDoListDisplay;
