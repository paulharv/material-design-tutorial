import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconComponent } from './icon/icon.component';
import { BadgeComponent } from './badge/badge.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectControlComponent } from './select-control/select-control.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ToolTipComponent } from './tool-tip/tool-tip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DatatableComponent } from './datatable/datatable.component';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'icons', component: IconComponent },
  { path: 'badges', component: BadgeComponent },
  { path: 'spinners', component: SpinnerComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'list', component: ListComponent },
  { path: 'grid-list', component: GridListComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'card', component: CardComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'input', component: InputComponent },
  { path: 'select', component: SelectControlComponent },
  { path: 'autocomplete', component: AutocompleteComponent},
  { path: 'checkbox', component: CheckboxComponent},
  { path: 'datepicker', component: DatepickerComponent},
  { path: 'tooltip', component: ToolTipComponent},
  { path: 'snackbar', component: SnackbarComponent},
  { path: 'dialog', component: DialogComponent},
  { path: 'datatable', component: DatatableComponent},
  { path: 'scrolling', component: VirtualScrollingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }