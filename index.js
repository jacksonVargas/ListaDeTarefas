const inputBox = document.getElementById('inputBox');
const container = document.getElementById('container');

inputBox.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    const valueInput = inputBox.value;

    if(valueInput == '') {
      alert('Adicione uma tarefa');
    }else {
      const list = document.createElement('ul');
      list.textContent = valueInput;
      container.appendChild(list);
  
      const span = document.createElement('span');
      span.textContent = '\u00d7';
      list.appendChild(span);
  
      inputBox.value = '';
      inputBox.focus();
      save();
    }
  }
});

container.addEventListener('click', (e) => {
  if(e.target.tagName === 'UL') {
    e.target.classList.toggle('active');
    save();
  }else if(e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    save();
  }
});

save = () => {
  localStorage.setItem('data', container.innerHTML);
}

showTask = () => {
  container.innerHTML = localStorage.getItem('data');
}

showTask();