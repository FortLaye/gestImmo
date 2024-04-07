import { Component } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  template: `
    <div class="category mb-4">
      <span class="d-block mb-2 fw-medium">Catégorie</span>
      <div class="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
          <label class="btn btn-outline-info" for="btnradio1">All</label>
        
          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
          <label class="btn btn-outline-info" for="btnradio2">Location</label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
          <label class="btn btn-outline-info" for="btnradio3">Vente</label>
      </div>
    </div>
  `,
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent {

}
