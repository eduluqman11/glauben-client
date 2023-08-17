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
images:any[] = []
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
      collectionName : this.fb.control('',[Validators.required,Validators.minLength(2)]),
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
    this.images=[]
    response['data'].map((x:any)=>{
      this.images.push(`http://localhost:3000/${x.collectionImage}`)
    })
    console.log(this.images)

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
      
    },
    (error)=>{
      console.log(error)
    }
  )
  this.ngOnInit()
}
}
