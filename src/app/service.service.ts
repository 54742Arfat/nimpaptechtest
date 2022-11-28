import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  onGetData(){
    return this.http.get('http://localhost:3000/getdata')
  }

  addUserDetails(formData:any){
    return this.http.post('http://localhost:3000/addData',formData)
  }

  updateurl = 'http://localhost:3000/updateData'
  updateDetails(formData:any,id:any){
    console.log(formData)
    return this.http.put(`${this.updateurl}/${id}`,formData)
  }

  delurl= "http://localhost:3000/deletedata"  
deleteDetails(id:any){
    return this.http.delete(`${this.delurl}/${id}`)

  }

  // search api
  searchUserDetails(id:any){
    // console.log(id)
    return this.http.get(`http://localhost:3000/searchData/${id}`)
  }

  // category wise data api
  ctProdDetails(name:any){
    return this.http.get(`http://localhost:3000/catData/${name}`)
  }


}
