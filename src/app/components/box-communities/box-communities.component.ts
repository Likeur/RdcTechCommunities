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
          name: 'Devcom Upl',
          linkedin: 'https://www.linkedin.com/company/devcom-upl/mycompany/',
          whatsapp : 'https://chat.whatsapp.com/CdqRmihyMyRHMW7oisiA5T',
          youtube : 'https://www.youtube.com/@DevelopperCommunity_upl',
          github : '',
          siteweb: ''
        }
    },
    {
      id : 2,
      community : {
        name: 'Espacesis',
        linkedin: 'https://www.linkedin.com/company/espacesis/',
        whatsapp : '',
        youtube : '',
        github : 'https://github.com/espacesis',
        siteweb: ''
      }
    },
    {
      id : 3,
      community : {
        name: 'Devscast',
        linkedin: 'https://www.linkedin.com/company/devscast-community/',
        whatsapp : '',
        youtube : 'https://www.youtube.com/@devscast_org',
        github : 'https://github.com/devscast',
        siteweb: 'https://devscast.tech/'
      }
    },
    {
      id : 4,
      community : {
        name: 'GDSC unikin',
        linkedin: 'https://www.linkedin.com/company/google-dsc-university-of-kinshasa',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: 'https://gdsc.community.dev/university-of-kinshasa/#'
      }
    },
    {
      id : 5,
      community : {
        name: 'GDG Lubum',
        linkedin: 'https://www.linkedin.com/company/gdg-lubumbashi',
        whatsapp : '',
        youtube : 'https://www.youtube.com/@gdglubumbashi',
        github : '',
        siteweb: 'https://gdg.community.dev/gdg-lubumbashi/'
      }
    },
    {
      id : 6,
      community : {
        name: 'GDSC ESIS',
        linkedin: 'https://www.linkedin.com/company/gdsc-esisalama',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: 'https://gdsc.community.dev/higher-school-of-computer-science-salama/'
      }
    },
    {
      id : 7,
      community : {
        name: 'MLSA ESIS',
        linkedin: '',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: ''
      }
    },
    {
      id : 8,
      community : {
        name: 'GDSC UNILU',
        linkedin: '',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: ''
      }
    },
    {
      id : 9,
      community : {
        name: 'GDSC UNH',
        linkedin: '',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: ''
      }
    },
    {
      id : 10,
      community : {
        name: 'GDG KIN',
        linkedin: '',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: ''
      }
    },
    {
      id : 11,
      community : {
        name: 'WTM Lubum',
        linkedin: 'https://www.linkedin.com/company/women-techmakers-lubumbashi/',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: ''
      }
    },
    {
      id : 12,
      community : {
        name: 'Math info',
        linkedin: 'https://www.linkedin.com/company/cercle-scientifique-math-info/',
        whatsapp : 'https://wa.me/0995555480',
        youtube : '',
        github : '',
        siteweb: ''
      }
    },
    {
      id : 13,
      community : {
        name: 'Soracert',
        linkedin: 'https://www.linkedin.com/company/soracert-official/',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: 'https://www.soracert.com/'
      }
    },
    {
      id : 14,
      community : {
        name: 'Letecode',
        linkedin: 'https://www.linkedin.com/company/letecode/',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: 'https://letecode.com/'
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
