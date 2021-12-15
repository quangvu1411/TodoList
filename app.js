// checked input thì gạch ngang chữ
//Tìm nút checkbox list__group-checked
const InpsCheckbox = document.querySelectorAll('.list__group-checked');
const InpCheckbox = InpsCheckbox;
console.log(InpCheckbox);

for (var i = 0; i < InpsCheckbox.length; i++) {
    const InpCheckbox = InpsCheckbox[i];
    InpCheckbox.addEventListener('change',(e)=>{
        const target = e.target;
        const checked = target.checked;
        const data = target.dataset;
        const checkContent = document.querySelector(`#list__group-title-${data.id}`);
        if(checked){
            checkContent.classList.add('active');
        }else{
            checkContent.classList.remove('active');
        }
    })
}

// add todo
const listElem = document.querySelector('.todo__list');
const addElem = document.querySelector('.todo__input-btn');
const inputTodo = document.querySelector('#todo__input-add');
let index = 1;

function createElement (tag){
  return document.createElement(tag)
}

addElem.addEventListener('click', function(){
    if(inputTodo.value.length==0)
    {
        alert('Chưa nhập thông tin, vui lòng thử lại')
    }else{
        const div = createElement('div');
        div.classList.add('list__group');
        div.innerHTML = `<input data-id="1" class="list__group-checked" type="checkbox" name="item-1">
                        <div class="list__group-title" id="list__group-title-1">${inputTodo.value}</div>`;
    listElem.appendChild(div);
    }
})
