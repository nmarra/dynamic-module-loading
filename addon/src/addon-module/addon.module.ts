// External modules
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Components and directives
import { AddonViewComponent } from "./components/index";

@NgModule({
	imports: [CommonModule],
	exports: [AddonViewComponent],
	declarations: [AddonViewComponent],
	entryComponents: [AddonViewComponent],
	providers: []
})
export class AddonModule {
	static getViewComponent() {
		return AddonViewComponent;
	}
}