import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import ApiService from '../api.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {

//formGroup
collectionForm : any

//Array
collectionData:any[] = []

//string
collectionName:string | undefined
collectionImage :string | undefined

//any
selectedFile:any 

constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private api:ApiService
    ){}

ngOnInit(){
  this.collectionForm =  this.fb.group({
      collectionName : this.fb.control('',[Validators.required,Validators.minLength(3)]),
      collectionUpload : this.fb.control('',[Validators.required])
  })
  this.getAllImage()
}

checkHeaders(){

}


onFileSelected(event:any){
   this.selectedFile = event.target.files[0]
}

getAllImage(){
  this.api.getAllCollection().subscribe((response:any)=>{
    response['data'].map((x:any)=>{
      return x.collectionImage=`http://localhost:3000/${x.collectionImage}`
    })
    this.collectionData=response['data']
    console.log(this.collectionData)
  })
}

onCollectionForm(){
  const formData = new FormData();
  formData.append('image',this.selectedFile);
  formData.append('collectionName',this.collectionForm.get('collectionName').value)

  this.http.post(`${environment.baseUrl}/collection/upload`,formData).subscribe(
    (response:any)=>{
      console.log(response)
      this.collectionImage = response['image']
      this.getAllImage()
    },
    (error)=>{
      console.log(error)
    }
  )
  this.ngOnInit()
}


deleteImage(id:number,imageName:string){
 this.api.deleteImage(id,imageName).subscribe((response)=>{
  console.log(response)
  this.getAllImage()
 })
}
}
