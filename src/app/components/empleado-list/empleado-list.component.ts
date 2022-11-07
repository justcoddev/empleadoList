import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleados: Empleado[] = [
    {
      legajo: 1, nombre: 'Alex', apellido: 'Contento', sexo: 'Masculino', salario: 22000
    },
    {
      legajo: 2, nombre: 'Edison', apellido: 'Cruz', sexo: 'Masculino', salario: 26000
    },
    {
      legajo: 3, nombre: 'Luis', apellido: 'Loayza', sexo: 'Masculino', salario: 26000
    },
    {
      legajo: 4, nombre: 'Jorge', apellido: 'Santana', sexo: 'Masculino', salario: 22000
    },
    {
      legajo: 5, nombre: 'Marlon', apellido: 'Villamar', sexo: 'Masculino', salario: 22000
    },
    {
      legajo: 6, nombre: 'Paulina', apellido: 'Zeins', sexo: 'Femenino', salario: 24000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
