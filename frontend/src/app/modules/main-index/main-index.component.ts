import { Component, OnInit, OnDestroy } from '@angular/core';
import { SerieServiceService } from 'src/app/serie-service.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Serie } from 'src/app/serie';

@Component({
  selector: 'app-main-index',
  templateUrl: './main-index.component.html',
  styleUrls: ['./main-index.component.css']
})
export class MainIndexComponent implements OnInit, OnDestroy {
  seriesPorVer: Serie[] = [];
  //cambiosSeriesPorVer: Subscription = Subscription.EMPTY;
  seriesViendoActualmente: Serie[] = [];
  seriesFinalizados: Serie[] = [];

  addSerieForm: FormGroup;

  constructor(private serieService: SerieServiceService, private fb: FormBuilder) {
    this.addSerieForm = this.fb.group({
      titulo: ['', Validators.required],
      sinopsis: ['', Validators.required],
      numero_episodios: ['', Validators.required],
      url_imagen: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtieneSeriesPorVer();
    /*this.cambiosSeriesPorVer = this.serieService.getCambiosSeriesPorVer().subscribe(
      (data) => {
        this.seriesPorVer = data;
      }
    );*/

    this.obtieneSeriesViendoActualmente();
    this.obtieneSeriesFinalizados();
  }

  ngOnDestroy(): void{
    //this.cambiosSeriesPorVer.unsubscribe();
  }

  // Obtener series por categoría
  obtieneSeriesPorVer(){
    this.serieService.getSeriesPorVer().subscribe(
      (data) => {
        this.seriesPorVer = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtieneSeriesViendoActualmente(){
    this.serieService.getSeriesViendoActualmente().subscribe(
      (data) => {
        this.seriesViendoActualmente = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtieneSeriesFinalizados(){
    this.serieService.getFinalizados().subscribe(
      (data) => {
        this.seriesFinalizados = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Agregar serie
  agregarSerie(){
    const SERIE: Serie = {
      titulo: this.addSerieForm.get('titulo')?.value,
      sinopsis: this.addSerieForm.get('sinopsis')?.value,
      url_imagen: this.addSerieForm.get('url_imagen')?.value,
      numero_episodios: this.addSerieForm.get('numero_episodios')?.value,
      episodios: [{
        numero_episodio: undefined,
        titulo_episodio: undefined,
        fecha_vista: undefined,
      }]
    }

    this.serieService.addSerie(SERIE).subscribe(
      (data) => {
        this.obtieneSeriesPorVer();
        //console.log(SERIE);
        document.getElementById("btnModalClose")?.click();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}