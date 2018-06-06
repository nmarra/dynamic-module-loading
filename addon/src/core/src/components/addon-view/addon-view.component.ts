import { Component, OnInit } from "@angular/core";

@Component({
	selector: "materia-addon-view",
    templateUrl: './addon-view.component.html',
    styleUrls: ['./addon-view.component.css']
})
export class AddonViewComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	displayAlert() {
		window.alert("it works!!");
	}
}
