import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "./material.module";

import { AppComponent } from "./app.component";

//add new testing components here
import { ProductAreaAComponent } from "./components/product-area-a/product-area-a.component";
import { ProductItemAComponent } from "./components/product-item-a/product-item-a.component";

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule],
  //don't forget to add component to declarations
  declarations: [AppComponent, ProductAreaAComponent, ProductItemAComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
