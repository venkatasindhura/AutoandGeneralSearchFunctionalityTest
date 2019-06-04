import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
@NgModule({
    imports: [MatCardModule, MatButtonModule, MatPaginatorModule],
    exports: [MatCardModule, MatButtonModule, MatPaginatorModule]
})
export class MaterialModule { }
