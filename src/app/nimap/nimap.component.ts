import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-nimap',
  templateUrl: './nimap.component.html',
  styleUrls: ['./nimap.component.css']
})
export class NimapComponent implements OnInit {

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private Serv:ServiceService, private act:ActivatedRoute) { }

  sort:any
  obj_id:any
  ngOnInit(): void {
    this.act.params.subscribe((para) => {
      this.sort = para['name']
      console.log(this.sort)
      this.getData(this.sort)
    }
  )
    this.pagi()
  }
 
  prodDetail = new FormGroup({
    ctid: new FormControl(''),
    prodid: new FormControl(''),
    prodname: new FormControl(),
    prodprice: new FormControl(''),
    ctname: new FormControl('')
  })

  
  

  sot:any
  getData(name:any){
    console.log(name)
    this.Serv.ctProdDetails(name).subscribe((data)=>{
      this.sot = data
      console.log(data)
        })
    }
  
    pagi(){
      this.Serv.onGetData().subscribe(
        (response) => {
          this.POSTS = response;
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    object_id:any
    edit(id:any){
      this.object_id=id
      
      this.getDat(this.object_id)
    }

    data:any 
    getDat(id:any){
      // console.log(id)
      this.Serv.searchUserDetails(id).subscribe((data)=>{
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
       this.Serv.updateDetails(this.prodDetail.value,this.object_id).subscribe
      ((mdata)=>{
       console.log(mdata)
        })
        window.location.reload()
     }
          
     addData(){
      console.log(this.prodDetail.value)
        this.Serv.addUserDetails(this.prodDetail.value).subscribe((user)=>{
          console.log(user)
        })
          window.location.reload()
      }
        
     delete(id:any){
      this.Serv.deleteDetails(id).subscribe((mdata)=>{
        console.log(mdata)
      })
      window.location.reload()
     }


     onTableDataChange(event: any) {
      this.page = event;
      this.pagi();
    }
    onTableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.pagi();
    }

}
