import { Component } from '@angular/core';

@Component({
  selector: 'app-type-filter',
  template: `
    <div class="type mb-4">
      <span class="d-block mb-2 fw-medium" >Type de bien</span>
      <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked1">
          <label class="form-check-label" for="flexCheckChecked1">
              Chambres
          </label>
      </div>
      <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2">
          <label class="form-check-label" for="flexCheckChecked2">
              Maisons
          </label>
      </div>
      <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked3">
          <label class="form-check-label" for="flexCheckChecked3">
              Studios
          </label>
      </div>
      <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked4">
          <label class="form-check-label" for="flexCheckChecked4">
              Terrains
          </label>
      </div>
    </div>
  `,
  styleUrl: './type-filter.component.css'
})
export class TypeFilterComponent {

}
