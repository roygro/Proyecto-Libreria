import { LibrarysService } from '../../services/library.service';
import { ReplaySubject } from 'rxjs';
import { Component, OnInit, HostBinding } from '@angular/core';



@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {

  @HostBinding('class')classes='row';
  librarys:any=[];

  constructor(private librarysService:LibrarysService){}

  ngOnInit(){
    this.librarysService.getLibrarys().subscribe(
      resp => {
        this.librarys = resp
      },
        
        //console.log(resp),
      err => console.log(err)
    );
  }
}
