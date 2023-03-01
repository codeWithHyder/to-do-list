const toDoListDisplay = () => {
  const deleteList = document.querySelector('.deletelist');
  // array of objects

  const toDoLists = [
    {
      description: 'Wake up ',
      completed: false,
      index: 0,
    },

    {
      description: 'Have Brush ',
      completed: false,
      index: 1,
    },

    {
      description: 'Take Breakfast ',
      completed: false,
      index: 2,
    },

    {
      description: 'Dress up Wel ',
      completed: false,
      index: 3,
    },

    {
      description: 'Start Coding',
      completed: false,
      index: 4,
    },
  ];
  const brkEle = document.createElement('br');
  for (let i = 0; i < toDoLists.length; i += 1) {
    deleteList.innerHTML += `<li class='deleteli'><input type='checkbox' id="chkbox" class= 'chkbox'></input><span>${toDoLists[i].description}</span></li>`;
    deleteList.insertAdjacentElement('afterend', brkEle);
  }
};

export default toDoListDisplay;
