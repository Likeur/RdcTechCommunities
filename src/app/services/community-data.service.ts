import { Injectable } from '@angular/core';
import { Communities } from '../model/community';

@Injectable({
  providedIn: 'root'
})
export class CommunityDataService {

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
      photoProfil: 'https://media.licdn.com/dms/image/D4D0BAQFu9dPhgkClzw/company-logo_100_100/0/1691793553676/devscast_community_logo?e=1708560000&v=beta&t=mSidNNsuNSWVwHXqFXGixljX92fMCLMiNPzMfHC8qrw',
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
      photoProfil: 'https://media.licdn.com/dms/image/D4E0BAQGsz01EcE2wOw/company-logo_200_200/0/1694358541725?e=1708560000&v=beta&t=-DLRunSEp-yuS43I5TItHfz8cT1Vnixt2jX51Rdk1OQ',
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
      photoProfil: 'https://media.licdn.com/dms/image/D4D0BAQG36N3DsZsnfA/company-logo_100_100/0/1689950819652?e=1708560000&v=beta&t=6Ni67Xax3EtgWyTinqQn6syxFnAX-bKA6B1VgMC5s8k',
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
      photoProfil: 'https://media.licdn.com/dms/image/C4D0BAQFT3YWNHFwL2w/company-logo_100_100/0/1671046420564?e=1708560000&v=beta&t=wRMk-YjpgsqWc63nBMAKeiaxzcIAC2jdMQuweZIyzJE',
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
      photoProfil: 'https://media.licdn.com/dms/image/C5603AQEYtoCD_eTQZw/profile-displayphoto-shrink_100_100/0/1614187418976?e=1705536000&v=beta&t=16pkXPL9EZ8mnzahd-s-doKmMxOmLn5Hf9XoUPuO2S4',
      linkedin: 'https://www.linkedin.com/in/gdg-kinshasa-087b66207/',
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
      photoProfil : 'https://media.licdn.com/dms/image/D4D0BAQFA99N50Q2UmA/company-logo_200_200/0/1691056178832?e=1708560000&v=beta&t=60BwheC__irbYUJNz1ykPspCK_rodFl7jrTAoyIEnXE',
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
      photoProfil : 'https://media.licdn.com/dms/image/C4D0BAQEwdzuXWGe55A/company-logo_200_200/0/1656015392633/cercle_scientifique_math_info_logo?e=1708560000&v=beta&t=UUKf_h5Xrhx0k71Wiva2tmkDyPXJ3hOsgHUrM4_kZoc',
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
      photoProfil: 'https://media.licdn.com/dms/image/D4E0BAQEY59ibednhFg/company-logo_200_200/0/1687510219277/soracert_official_logo?e=1708560000&v=beta&t=rmW5BVEFCl9uG6C_-rFGSPigQ7EyqiEVERoaNoVFFBs',
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
      photoProfil: 'https://media.licdn.com/dms/image/C4D0BAQGFzku3TkgFcQ/company-logo_100_100/0/1670450433887/letecode_logo?e=1708560000&v=beta&t=PKxvu6sBB4rScz5hZXdM_oDijpqdmnhWAXJVzcHYvD0',
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
      photoProfil: 'https://media.licdn.com/dms/image/D4D07AQHr5Jx1UvTsgQ/group-logo_image-shrink_92x92/0/1700296486169?e=1700956800&v=beta&t=xET2gq2CfyQdhbl5HklOzQEY8k-_QkhiksfLsxnHerU',
      linkedin: 'https://www.linkedin.com/groups/9543571/',
      whatsapp : 'https://chat.whatsapp.com/KF3wrKscZRK9rDYJpPAcOB',
      youtube : '',
      github : 'https://github.com/Dotnet-Community-DRC',
      siteweb: ''
    }
  }
]
  constructor() { }


}
