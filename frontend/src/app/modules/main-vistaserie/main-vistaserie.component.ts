import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieServiceService } from 'src/app/serie-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Serie } from 'src/app/serie';

@Component({
  selector: 'app-main-vistaserie',
  templateUrl: './main-vistaserie.component.html',
  styleUrls: ['./main-vistaserie.component.css']
})
export class MainVistaserieComponent implements OnInit, OnDestroy {
  private idSerie: string = '';
  private sub: Subscription = Subscription.EMPTY;
  protected serie: Serie = new Serie();

  modifySerieForm: FormGroup;
  addEpisodioForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private serieService: SerieServiceService, private fb: FormBuilder){
    this.modifySerieForm = this.fb.group({
      titulo: [''],
      sinopsis: [''],
      numero_episodios: [''],
      url_imagen: [''],
    });

    this.addEpisodioForm = this.fb.group({
      numero_episodio: ['', Validators.required],
      fecha_vista: ['', Validators.required],
      titulo_episodio: [''],
    });
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.idSerie = params['id'];
    })

    this.obtieneSerie();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  rellenaModifySerieForm(serie: Serie){
    this.modifySerieForm.setValue({
      titulo: serie.titulo,
      sinopsis: serie.sinopsis,
      numero_episodios: serie.numero_episodios,
      url_imagen: serie.url_imagen,
    });
  }

  obtieneSerie(){
    this.serieService.getSeriePorId(this.idSerie).subscribe(
      (data) => {
        this.serie = data;

        this.rellenaModifySerieForm(data);

        console.log(this.serie);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminaSerie(){
    this.serieService.deleteSeriePorId(this.idSerie).subscribe(
      (data) => {
        document.getElementById("btnElimSerieModalClose")?.click();
        this.router.navigate(['/']);
      },
      (error) => {
        console.error(error);
      }
    );
    //console.log('Funciona xd');
  }

  // modificar serie
  modificaSerie(){
    const SERIE: Serie = {
      titulo: this.modifySerieForm.get('titulo')?.value,
      sinopsis: this.modifySerieForm.get('sinopsis')?.value,
      url_imagen: this.modifySerieForm.get('url_imagen')?.value,
      numero_episodios: this.modifySerieForm.get('numero_episodios')?.value,
      episodios: [{
        numero_episodio: undefined,
        titulo_episodio: undefined,
        fecha_vista: undefined,
      }]
    }

    this.serieService.updateSerie(this.serie._id!, SERIE).subscribe(
      (data) => {
        //console.log(SERIE);
        document.getElementById("btnModSerieModalClose")?.click();
        this.obtieneSerie();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Agregar episodio a una serie por ID
  agregaEpisodio(){
    const episodio = {
      numero_episodio: this.addEpisodioForm.get('numero_episodio')?.value,
      fecha_vista: this.addEpisodioForm.get('fecha_vista')?.value,
      titulo_episodio: this.addEpisodioForm.get('titulo_episodio')?.value,
    }

    this.serieService.addEpisodioSerie(this.serie._id!, episodio).subscribe(
      (data) => {
        document.getElementById("btnAgEpModalClose")?.click();
        this.addEpisodioForm.reset();
        this.obtieneSerie();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Elimina episodio de una serie por ID
  eliminarEpisodio(idEpisodio:String){
    this.serieService.deleteEpisodioSerie(this.serie._id!, idEpisodio).subscribe(
      (data) => {
        this.obtieneSerie();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
