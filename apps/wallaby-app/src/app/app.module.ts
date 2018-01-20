import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { testRoutes } from '@nx-wallaby/test';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([{ path: 'test', children: testRoutes }], { initialNavigation: 'enabled' })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
