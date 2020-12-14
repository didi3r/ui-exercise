import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
import { ButtonComponent } from './components/button/button.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { SideBarComponent } from './containers/side-bar/side-bar.component';
import { EmailCategoriesComponent } from './components/email-categories/email-categories.component';
import { ComposeButtonComponent } from './components/compose-button/compose-button.component';
import { EmailListComponent } from './containers/email-list/email-list.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { EmailItemComponent } from './components/email-item/email-item.component';
import { BadgeComponent } from './components/badge/badge.component';
import { FilterByTagPipe } from './pipes/filter-by-tag.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconButtonComponent,
    SearchInputComponent,
    SettingsComponent,
    SettingsMenuComponent,
    ButtonComponent,
    ClickOutsideDirective,
    SideBarComponent,
    EmailCategoriesComponent,
    ComposeButtonComponent,
    EmailListComponent,
    CheckboxComponent,
    EmailItemComponent,
    BadgeComponent,
    FilterByTagPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
