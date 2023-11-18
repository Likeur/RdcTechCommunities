import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Community, Communities } from '../../model/community';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-box-communities',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './box-communities.component.html',
})
export class BoxCommunitiesComponent {

  communities: Communities [] = [
      {
        id : 1,
        community : {
          name: 'Devcom Upl',
          photoProfil: 'https://media.licdn.com/dms/image/D4D0BAQEQDxa7vaE7bg/company-logo_200_200/0/1686124680221/devcom_upl_logo?e=1708560000&v=beta&t=Xx9KVmQ-pnCPtY36TMmPh0s84EK76oUCurrSHXOBPQ8',
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
        photoProfil: 'https://media.licdn.com/dms/image/C4D0BAQHfRUEuwOXICg/company-logo_100_100/0/1671393306825?e=1708560000&v=beta&t=XSpDFc2Zhw2rqtHcKtqdDkglIV__keTA1UMIXQJ58Hg',
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
        photoProfil: '',
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
        photoProfil: '',
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
        photoProfil: '',
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
        photoProfil: '',
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
        photoProfil: '',
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
        photoProfil: '',
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
        photoProfil: '',
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
        photoProfil: '',
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
        photoProfil : '',
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
        photoProfil : '',
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
        photoProfil: '',
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
        photoProfil: '',
        linkedin: 'https://www.linkedin.com/company/letecode/',
        whatsapp : '',
        youtube : '',
        github : '',
        siteweb: 'https://letecode.com/'
      }
    },
    {
      id : 15,
      community : {
        name: '.NET Community DRC',
        photoProfil: '',
        linkedin: 'https://www.linkedin.com/groups/9543571/',
        whatsapp : 'https://chat.whatsapp.com/KF3wrKscZRK9rDYJpPAcOB',
        youtube : '',
        github : 'https://github.com/Dotnet-Community-DRC',
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
    
  goToDetails(){

  }
      
}
