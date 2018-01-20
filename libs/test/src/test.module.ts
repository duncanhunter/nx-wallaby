import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TestComponent } from './test/test.component';

export const testRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TestComponent]
})
export class TestModule {}
