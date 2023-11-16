import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Community, Communities } from '../../model/community';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box-communities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './box-communities.component.html',
})
export class BoxCommunitiesComponent {

  communities: Communities [] = [
      {
        id : 1,
        community : {
          name: 'Devcom',
          linkedin: 'jse',
          whatsapp : '',
          youtube : '',
          github : '',
          siteweb: ''
        }
    },
    {
      id : 2,
      community : {
        name: 'Espacesis',
        linkedin: 'jse',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: ''
      }
    },
    {
      id : 3,
      community : {
        name: 'Devscast',
        linkedin: 'jse',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: 'https://devscast.org'
      }
    },
    {
      id : 4,
      community : {
        name: 'Kotlin Lubum',
        linkedin: 'jse',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: ''
      }
    }
  ]

  isSearch = false
  searchTerm : string = ''
  filteredObjects : Communities[] = []

  search(){
    this.isSearch = true
    this.filteredObjects = this.communities.filter ( obj => obj.community.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()))
  }
    
      
}
