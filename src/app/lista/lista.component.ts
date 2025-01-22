import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogoComponent} from '../dialogo/dialogo.component';
import { NomeDialogoComponent } from '../dialogo-nome/dialogo-nome.component';
import { PrecoDialogoComponent } from '../dialogo-preco/dialogo-preco.component';
import { TipoDialogoComponent } from '../dialogo-tipo/dialogo-tipo.component';
import { MarcaDialogoComponent } from '../dialogo-marca/dialogo-marca.component';



interface Frutas {
  name: string;
  peso: number;
  price: number;
  tipo: string[];
  marca: string;
  edited: boolean;
}

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    MatCheckboxModule,
    PesquisaComponent,
    MatPaginator,
    MatDialogModule,
  ],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})

export class ListaComponent {

  Frutas = [
    { name: 'Laranja', peso: 200, price: 3, tipo: ['acida'], marca: 'Citrus', edited: false },
    { name: 'Limão', peso: 150, price: 2, tipo: ['acida'], marca: 'Siciliano', edited: false },
    { name: 'Abacaxi', peso: 500, price: 5, tipo: ['acida'], marca: 'Tropical', edited: false },
    { name: 'Maçã', peso: 180, price: 4, tipo: ['doce'], marca: 'Fuji', edited: false },
    { name: 'Banana', peso: 120, price: 2, tipo: ['doce'], marca: 'Prata', edited: false },
    { name: 'Pera', peso: 220, price: 3, tipo: ['doce'], marca: 'Williams', edited: false },
    { name: 'Caju', peso: 100, price: 4, tipo: ['oleaginosa'], marca: 'Nordeste', edited: false },
    { name: 'Amêndoa', peso: 50, price: 10, tipo: ['oleaginosa'], marca: 'Natura', edited: false },
    { name: 'Noz', peso: 60, price: 12, tipo: ['oleaginosa'], marca: 'Natural', edited: false },
    { name: 'Avelã', peso: 80, price: 15, tipo: ['oleaginosa'], marca: 'Turca', edited: false }
  ];

  paginatedfruta: Frutas[] = [];
  itemsPerPage = 5;
  pageIndex=0;

  formData: any = { name: '', peso: '', price: null, tipo: [], marca: '' };
  Tipofruta: string[] = ['doce', 'acida', 'oleagenosa'];
  showForm: boolean = false;
  filteredfruta = [...this.Frutas];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.updatePaginatedfruta();
  }

  ngOnChanges() {
    this.updatePaginatedfruta();
  }


  updatePaginatedfruta() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
  
    this.paginatedfruta = this.filteredfruta.slice(startIndex, endIndex);
  }

  filterfruta(selectedCategories: any) {
    this.filteredfruta = this.Frutas.filter(Frutas =>
      Frutas.tipo.some(tipo => selectedCategories[tipo])
    );
    this.pageIndex = 0; 
    this.updatePaginatedfruta(); 
  }

  
  pageChanged(event: any) {
    this.pageIndex = event.pageIndex;
    this.updatePaginatedfruta();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  constructor(private dialog: MatDialog) {}


  addfruta() {
    if (this.formData.peso < 12) {
      this.openDialogpeso();
      return;
    }
    if (this.formData.name.length == 0) {
      this.openDialogNome();
      return;
    }
    if (this.formData.price == 0 || this.formData.price == null) {
      this.openDialogPreco();
      return;
    }
    if (this.formData.marca.split('.').length < 1 ) {
      this.openDialogmarca();
      return;
    }

    this.Frutas.push({ ...this.formData });
    this.formData = { name: '', peso: '', price: null, tipo: [], marca: '' };
    this.filteredfruta = [...this.Frutas];
    this.toggleForm();
    this.showForm = false;
  }

  openDialogpeso() {
    this.dialog.open(DialogoComponent);
  }
  openDialogNome() {
    this.dialog.open(NomeDialogoComponent);
  }
  openDialogPreco() {
    this.dialog.open(PrecoDialogoComponent);
  }
  openDialogTipo() {
    this.dialog.open(TipoDialogoComponent);
  }
  openDialogmarca() {
    this.dialog.open(MarcaDialogoComponent);
  }

  ontipoChange(tipo: string, isChecked: boolean) {
    if (isChecked) {
      this.formData.tipo.push(tipo);
    } else {
      this.formData.tipo = this.formData.tipo.filter((t: string) => t !== tipo);
      this.openDialogTipo();
    }
  }

  deletefruta(index: number) {
    this.Frutas.splice(index, 1);
    this.updatePaginatedfruta();
  }
  

  editfruta(index: number) {
    this.formData = { ...this.Frutas[index] };
    this.showForm = true;
  
    this.Frutas.splice(index, 1);
  }
}