import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { CardsComponent } from './cards/cards.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { NavsComponent } from './navs/navs.component';
import { TablesComponent } from './tables/tables.component';
import { TabsComponent } from './tabs/tabs.component';
import {ProductCreateComponent} from "../products/product-create/product-create.component";
import {ProductListComponent} from "../products/product-list/product-list.component";
import {MarketListComponent} from "../markets/market-list/market-list.component";
import {MarketListProductComponent} from "../products/market-list-product/market-list-product.component";


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },

      {
        path: 'cards',
        component: ProductListComponent,
        data: {
          title: 'Cards',
        },
      },
      {
        path: 'carousel',
        component: ProductCreateComponent,
        data: {
          title: 'Ajouter ',
        },
      },

      {
        path: 'list-group',
        component: MarketListComponent,
        data: {
          title: 'List Group',
        },
      },
      {
        path: 'navs',
        component: MarketListProductComponent,
        data: {
          title: 'Navs & Tabs',
        },
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables',
        },
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs',
        },
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}

