class Task{

    constructor(title, year, description){
        this.title = title;
        this.year = year;
        this.description = description;
    }

}


class UI{

    addTask(task){
        const taskList = document.querySelector('.taskList');
        const element = document.createElement('div');
        element.innerHTML = `
                <div class='card mb-2'>
                    <div class='card-body text-center'>
                    <strong>Titulo: </strong> ${task.title}
                    <strong>Año: </strong> ${task.year}
                    <strong>Descripcion:</strong>${task.description}
                    <a href="#" class='btn btn-info' name='delete'>Borrar</a>
                </div>
                    
                </div>
        `;
        taskList.appendChild(element);
    }

    resetFrom(){
        document.getElementById('form').reset();
    }

    deleteTask(element){
     if(element.name === 'delete'){
         element.parentElement.parentElement.parentElement.remove();
         this.showMenssege('Tarea eliminada', 'danger')
     }
    }

    showMenssege(mensaje, colors){
        const div = document.createElement('div')
        div.className = `alert alert-${colors}`;
        div.appendChild(document.createTextNode(mensaje));

        const container = document.querySelector('.container')
        const app = document.querySelector('.app')
        container.insertBefore(div, app );

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000);
    }

}


document.getElementById('form').addEventListener('submit', (e)=>{
    
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const description = document.getElementById('description').value;
    

    const task = new Task(title, year, description);
    const Ui = new UI();
    if(title === '' || year === '' || description === ''){
       return Ui.showMenssege('Complete los campos', 'danger')
    }
    
    Ui.addTask(task);
    Ui.resetFrom()
    Ui.showMenssege( 'Tarea agregado correctamente','info ')
    
    

    e.preventDefault();
});

document.querySelector('.taskList').addEventListener('click', (e)=>{
    const mensaje = 'Tarea eliminada';
    const ui = new UI();
    ui.deleteTask(e.target);
});

