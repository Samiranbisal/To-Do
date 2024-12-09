let inputBox = document.getElementById('inputBox');
let list = document.getElementById('list');
console.log('list --> ', list);
let addItem;
let box = document.querySelector('.box');
console.log('box --> ', box);


inputBox.addEventListener('keyup', function(e){
    if(e.key == 'Enter' && this.value !== ''){
       console.log( addItem(this.value));
        this.value = '';
    }
});


addItem = (inputBox) => {
    let ListItem = document.createElement('li');
    ListItem.textContent = inputBox;
    // console.log('ListItem ---> ', ListItem);
    let deleteIcon = document.createElement('i');
    deleteIcon.textContent = 'x';

    deleteIcon.addEventListener('click', function(e){
        ListItem.remove();
    });

    console.log('abc ',ListItem.appendChild(deleteIcon));

   console.log('cde -->', list.appendChild(ListItem));
}

