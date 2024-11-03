import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Ajusta la ruta según la ubicación de tu servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  usuarios: any[] = []; // Asegúrate de definir la estructura correcta según tu modelo

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.authService.getAllUsers().subscribe(
      (data: any[]) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }

  editUser(id: number): void {
    this.router.navigate([`/editarUsuario/${id}`]);
  }

  deleteUser(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.authService.deleteUser(id).subscribe(
        () => {
          this.loadUsers();
        },
        (error) => {
          console.error('Error al eliminar el usuario:', error);
        }
      );
    }
  }
}
