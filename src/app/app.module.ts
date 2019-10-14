import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent, DialogDisplayComponent } from './app.component';
import { RegularsComponent } from './regulars/regulars.component';
import { RegularDetailComponent } from './regular-detail/regular-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ButtonComponent } from './button/button.component';
import { AppRoutingModule } from './app-routing.module';
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
import { ScrollingModule } from '@angular/cdk/scrolling'; 
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogDisplayComponent,
    RegularsComponent,
    RegularDetailComponent,
    ButtonComponent,
    ButtonToggleComponent,
    IconComponent,
    BadgeComponent,
    SpinnerComponent,
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectControlComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    ToolTipComponent,
    SnackbarComponent,
    DialogComponent,
    DatatableComponent,
    VirtualScrollingComponent
  ],
  entryComponents:[DialogDisplayComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
