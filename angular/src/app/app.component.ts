import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CalculosService } from './calculos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apicalculos';

  lado?: number;
  area?: number;
  perimetro?: number;

  constructor(private calculos: CalculosService){ }

  enviar(): void {
    console.log(this.lado);
    const urapi = `http://localhost:3000/calculos/${this.lado}`;
    this.calculos.getJSON(urapi).subscribe((res: any) => {
      console.log(res);
      this.area = res.area;
      this.perimetro = res.perimetro;
    });
  }
}
