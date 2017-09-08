import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
	selector: 'sandbox',
	templateUrl: './sandbox.component.html',
	styleUrls: ['./sandbox.component.css'] 

})


export class SandboxComponent{

	data:any[] = [];
	constructor(private dataService:DataService){
		this.dataService.getData().subscribe(data => {
			this.data.push(data);
		});
	}
	
}