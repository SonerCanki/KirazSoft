import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  ItemArray=[
    {Name:'Kalem',Price:12},
    {Name:'Silgi',Price:5},
    {Name:'Açacak',Price:3}
    ]
    
  constructor() { }

  ngOnInit(): void {
  }

  Delete(data:any){
    const index: number = this.ItemArray.indexOf(data);
    if (index !== -1) {
        this.ItemArray.splice(index, 1);
    }    
  }

}
