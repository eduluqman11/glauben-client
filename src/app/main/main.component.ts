import { Component } from '@angular/core';
import ApiService from '../api.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  crousalData:String[]=['/assets/images/iamge10.avif','/assets/images/image2.avif','/assets/images/image3.avif','/assets/images/image4.avif','/assets/images/image5.avif','/assets/images/iamge6.avif']
  card:any[]=[
    {image:'/assets/images/image2.avif',category:'Sofa',title:"L-Shape Sofa", description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    },
    {image:'/assets/images/image3.avif',category:'Chair',title:"Matrix", description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    },
    {image:'/assets/images/iamge10.avif',category:'Office table',title:"Office Table", description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    },
    {image:'/assets/images/iamge10.avif',category:'Office table',title:"Office Table", description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
  },
  {image:'/assets/images/iamge10.avif',category:'Office table',title:"Office Table", description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
}
  ]

  constructor(private api:ApiService) {}

  ngOnInit() {
    console.log('call')
    this.api.getCategory().subscribe((data:any) => {
     console.log(data['data'])
      function removeDupliate(arr:any){
        const unique:any = {} 
        return arr.filter((obj:any)=>{
                if(!unique[obj.category]){
                    unique[obj.category] = true
                    return true
                }else{
                    return false
                }
                
        })
    }
    const category = data['data']
    console.log(removeDupliate(category))
    });
  }
}
