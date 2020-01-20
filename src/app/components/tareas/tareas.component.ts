import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../Tarea';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas: Tarea[];
  title: string;

  constructor(private tareasService: TareasService) {
    this.tareasService.traerTarea()
      .subscribe(tareas => {
        this.tareas = tareas;
      });
  }

  ngOnInit() {
  }

  agregarTarea(event) {
    event.preventDefault();
    const newTarea: Tarea = {
      title: this.title,
      isDone: false
    };

    this.tareasService.agregarTarea(newTarea)
      .subscribe(tarea => {
        this.tareas.push(tarea);
        this.title = '';
      });
  }

  eliminarTarea(id: string) {
    const respuesta = confirm('Desea eliminar la tarea seleccionada?')
    if (respuesta) {
      const tareas = this.tareas;
      this.tareasService.eliminarTarea(id)
        .subscribe(data => {
          if (data.n === 1) {
            for (let iteracion = 0; iteracion < tareas.length; iteracion++) {
              if (tareas[iteracion]._id === id) {
                tareas.splice(iteracion, 1);
              }
            }
          }
        });
    }
    return;
  }

  actualizarTarea(tarea: Tarea) {
    const newTarea = {
      _id: tarea._id,
      title: tarea.title,
      isDone: !tarea.isDone
    };

    this.tareasService.actualizarTarea(newTarea)
      .subscribe(res =>  {
        tarea.isDone = !tarea.isDone;
      });
  }
}
