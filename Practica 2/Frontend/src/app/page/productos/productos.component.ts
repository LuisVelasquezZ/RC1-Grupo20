import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LibrosService } from 'src/app/service/libros.service';

//SWAL
declare var swal:any;
//JQUERY
declare var $:any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  public data:any[] = [];
  public formData:FormGroup = new FormGroup({
    'ISBN': new FormControl("", [Validators.required, Validators.maxLength(255)]),
    'titulo': new FormControl("", [Validators.required, Validators.maxLength(255)]),
    'autor': new FormControl("", [Validators.required, Validators.maxLength(255)]),
    'precio': new FormControl(0, [Validators.required]),
    'cantidad': new FormControl(0, [Validators.required]),
  });

  constructor(
    public librosService: LibrosService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll = () => {
    this.librosService.getAll()
    .subscribe((res)=>{
      console.log(res)
      this.data = [];
      this.data = res;
    });
  }

  saveChanges() {
    console.log(this.formData.value)
    this.librosService.create(this.formData.value)
    .subscribe((res)=>{
      console.log(res)
      $('#modalFormDataAdd').modal('hide');
      this.getAll();
      this.formData.reset();
    });
  }

  get ISBN() { return this.formData.get('ISBN'); }
  get titulo() { return this.formData.get('titulo'); }
  get autor() { return this.formData.get('autor'); }
  get precio() { return this.formData.get('precio'); }
  get cantidad() { return this.formData.get('cantidad'); }

}

