import { Injectable } from '@angular/core';
import {
    Action,
    Selector,
    State,
    StateContext,
    createSelector,
} from '@ngxs/store';
import { AddMushroom, DelMushroom } from '../model/storeAction';
import { StoreStateModel } from './store-state-model';


@State<StoreStateModel>({
    name: 'mushrooms',
    defaults: {
        mushrooms: [],
    },
})
@Injectable()
export class StoreState {
    @Selector()
    static getNbMushrooms(state: StoreStateModel) {
        return state.mushrooms.length;
    }

    static getNbMushroomsFavorite(fav: boolean) {
        return createSelector([StoreState], (state: StoreStateModel) => {
            return state.mushrooms.filter((c) => c.favorite == fav).length;
        });
    }
    @Selector()
    static getListMushrooms(state: StoreStateModel) {
        return state.mushrooms;
    }

    @Selector()
    static getFavoriteMushrooms(state: StoreStateModel) {
        return state.mushrooms.filter((x) => x.favorite);
    }

    @Action(AddMushroom)
    add(
        { getState, patchState }: StateContext<StoreStateModel>,
        { payload }: AddMushroom
    ) {
        const state = getState();
        patchState({
            mushrooms: [...state.mushrooms, payload],
        });
    }

    @Action(DelMushroom)
    del(
        { getState, patchState }: StateContext<StoreStateModel>,
        { payload }: DelMushroom
    ) {
        const state = getState();
        patchState({
            mushrooms: state.mushrooms.filter(
                (x) => !(payload.name == x.name)
            ),
        });
    }
}
