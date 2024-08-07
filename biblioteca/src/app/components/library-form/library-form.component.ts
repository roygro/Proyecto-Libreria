import { Component, OnInit, HostBinding } from '@angular/core';
import { Library } from '../../models/Library';
import { LibrarysService } from '../../services/library.service';

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrl: './library-form.component.css'
})
export class LibraryFormComponent {
  @HostBinding ('class') classes="row";

  library : Library = {
    id:0,
    title:'',
    description:'',
    image:'',
    created_at: new Date()

    
  };

  constructor(private librarysService : LibrarysService){}
  ngOnInit(){}

  saveNewLibrary(){
    this.librarysService.saveLibrary(this.library).subscribe(
    resp => {console.log(resp)},
    err=> console.log(err)
  )
  }
}
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
