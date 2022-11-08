let todoname = document.getElementById('todo-name')

let btnsimpan = document.getElementById('btn-simpan')

btnsimpan.addEventListener('click', function (){

    if(todoname.value == '') {
        alert('nama todo tidak boleh kosong!')
    }
    else {
        let todoContainer = document.querySelector('.list-group')
        
        let todoHTML = todoContainer.innerHTML

        console.log(todoHTML)
        todoHTML +=`
            <li class="list-group-item">
                <div>                    
                    <button class="badge border-0 bg-danger btn-hapus">X</button>
                    <span>${todoname.value}</span>
                </div>
                
            </li>
        `;
    
        todoContainer.innerHTML = todoHTML;
        todoname.value = '';
        todoname.focus();

        let btnHapus = document.querySelectorAll('.btn-hapus');
        for (let X = 0; X < btnHapus.length; X++) {
            const hapus = btnHapus[X];
            hapus.addEventListener('click', function(){
                this.parentElement.remove();
            })
        }
    } 
})

