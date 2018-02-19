import { NgModule } from '@angular/core';
import { TodoStatusPipe } from './todo-status/todo-status';
@NgModule({
	declarations: [TodoStatusPipe],
	imports: [],
	exports: [TodoStatusPipe]
})
export class PipesModule {}
