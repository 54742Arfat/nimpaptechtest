import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-products',
  templateUrl: './prodash.component.html',
  styleUrls: ['./prodash.component.css']
})
export class ProdashComponent implements OnInit {

  // prodDetail !: FormGroup

  constructor( private serv : ServiceService) { }
  prodlist:any

  ngOnInit(): void {
    this.serv.onGetData().subscribe((user)=> {
      console.log(user)
      this.prodlist=user

    })
  }


      delete(id:any){
  this.serv.deleteDetails(id).subscribe((data)=>{
    console.log(data)
  })
}

  prodDetail = new FormGroup({
    ctid: new FormControl(''),
    prodid: new FormControl(''),
    prodname: new FormControl(),
    prodprice: new FormControl(''),
    ctname: new FormControl('')
  })


  addData(){
    console.log(this.prodDetail.value)
      this.serv.addUserDetails(this.prodDetail.value).subscribe((user)=>{
        console.log(user)
      })}

    
   
      object_id:any
      Edit(id:any){
        this.object_id=id
        // console.log(id)
        this.getDat(this.object_id)
      }

      data:any 
      getDat(id:any){
        console.log(id)
        this.serv.searchUserDetails(id).subscribe((data)=>{
          console.log(data)
          this.data=data
          this.setData(this.data)
        })
      }

      setData(data:any){
  console.log(data[0])
  this.prodDetail.patchValue({
  ctid: data[0].ctid,
  prodid: data[0].prodid,
  prodname: data[0].prodname,
  prodprice: data[0].prodprice,
  ctname: data[0].ctname
})
      }
  
  upData(){
    console.log(this.prodDetail.value)
     this.serv.updateDetails(this.prodDetail.value,this.object_id).subscribe
    ((mdata)=>{
     console.log(mdata)
      })
      window.location.reload()
   }
        




  }