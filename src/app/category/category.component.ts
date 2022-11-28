import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  route: any;

  constructor(private service: ServiceService, private router :Router){ }

    prodlist:any=[]
    data:any
  
    ngOnInit(): void {
      this.service.onGetData().subscribe((data)=>{
        console.log(data)
        this.data = data
  
        for(let d of this.data){
          console.log(d.ctname)
          if(!(this.prodlist).includes(d.ctname)){
            // this.prodlist.push(d.ctid)
            this.prodlist.push(d.ctname)
          }
          else{
            continue
          }
        }
        console.log(this.prodlist)       
          })
     }  
    
    onRou(i:any){
      this.router.navigate(['/sorted',i])
    }
  
   
  
  
  
  }
  