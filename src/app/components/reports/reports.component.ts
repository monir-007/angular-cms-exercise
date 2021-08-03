import {Component, OnInit} from '@angular/core';
import {FormData} from "../../form-data";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  powers = ['Smart', 'Flexible', 'Super Hot'];
  model = new FormData(18, 'Dr IQ', this.powers[0], 'Chunk Overstressed');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero(){
    this.model = new FormData(42,'','');
  }

  //inspect element
  skyDog():FormData{
    const myHero = new FormData(42,'SkyDog', 'Fetch any object', 'Leslie rollover');
    console.log('my hero'+myHero.name);
    return myHero
  }

  showFormControls(form:any){
    return form && form.controls.name && form.controls.name.value;
}

}
