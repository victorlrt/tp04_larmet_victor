import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { StoreState } from '../core/state/store-state';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.css']
})
export class ComponentHeaderComponent {

  @Select(StoreState.getNbMushrooms) nb$: Observable<number>;
  @Select(StoreState.getNbMushroomsFavorite(true)) nbFav$: Observable<number>;
  constructor() {}

}
