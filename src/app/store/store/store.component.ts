import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Mushroom } from 'src/app/core/model/mushroom';
import { DelMushroom } from 'src/app/core/model/storeAction';
import { StoreState } from 'src/app/core/state/store-state';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{
  constructor(private store: Store) {}

  @Select(StoreState.getListMushrooms) mushrooms$: Observable<Mushroom[]>;
  
  ngOnInit(): void {
    console.log(this.mushrooms$);
  }


  delContact(m: Mushroom): void {
    this.store.dispatch(new DelMushroom(m));
  }
}
