import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { LoginComponent } from './features/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { dashboardDataResolver } from './core/resolvers/dashboard-data.resolver';
import { FormsContainerComponent } from './features/forms/forms-container/forms-container.component';
import { StockComponent } from './features/stock/stock.component';
import { ProductCatalogComponent } from './features/product-catalog/product-catalog.component';
import { ProductComponent } from './features/product/product.component';
import { PlaygroundComponent } from './features/playground/playground.component';
import { ParentfieldComponent } from './features/parentfield/parentfield.component';
import { pendingChangesGuardGuard } from './core/guards/pending-changes-guard.guard';
import { CardComponentComponent } from './shared/components/card/card-component.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    {
        path: "app",
        component: MainLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: "dash", component: DashboardComponent, resolve: { initialProducts: dashboardDataResolver } },
            { path: "forms", component: FormsContainerComponent },
            { path: "stock", component: StockComponent },
            { path: "product", component: ProductCatalogComponent },
            { path: "scroll", component: ProductComponent },
            { path: "play", component: PlaygroundComponent },
            { path: "parentcomponent", component: ParentfieldComponent, canDeactivate: [pendingChangesGuardGuard] },
            { path: "ContentProjectionchildcomponent", component: CardComponentComponent },
            { path: "ContentProjectionparentcomponent", loadComponent: () => import('./features/parent-component/parent-component.component').then(m => m.ParentComponentComponent) },
            { path: "", redirectTo: "dash", pathMatch: "full" }
        ]
    },
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "**", redirectTo: "/login" }
];
