import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../Tarea';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  dominio = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  traerTarea() {
    return this.http.get<Tarea[]>(`${this.dominio}/api/tareas`)
      .map((response: Tarea[]) => response);
  }

  agregarTarea(newTarea: Tarea) {
    return this.http.post<Tarea>(`${this.dominio}/api/tareas`, newTarea)
    .map(res => res);
  }

  eliminarTarea(id: string) {
    return this.http.delete<Tarea>(`${this.dominio}/api/tareas/${id}`)
    .map(res => res);
  }

  actualizarTarea(newTarea: Tarea) {
    return this.http.put(`${this.dominio}/api/tareas/${newTarea._id}`, newTarea)
    .map(res => res);
  }
}
