import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  featureSelected = 'recipe'

  navigateFeature(feature: string){
    this.featureSelected = feature;
  }

}
