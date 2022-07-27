import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent{
@Input() nombre:string=""
@Input() imagen:string=""
@Input() familia:string=""
@Input() dosis:string=""
@Input() usos:string=""
@Input() efectoAdverso:string=""
}
