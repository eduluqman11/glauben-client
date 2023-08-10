import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  collection:any[]=[
    {image:'/assets/images/image2.avif',category:'Sofa',title:"L-Shape Sofa", description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    },
    {image:'/assets/images/image3.avif',category:'Chair',title:"Matrix", description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    },
    {image:'/assets/images/image4.avif',category:'Office table',title:"Office Table", description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    },
    {image:'/assets/images/image7.avif',category:'Carpet',title:"Office Table", description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
   },
    {image:'/assets/images/iamge10.avif',category:'Cafeteria',title:"Office Table", description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
   },
  {image:'/assets/images/image4.avif',category:'Office table',title:"Office Table", description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
  },
  ]

}
