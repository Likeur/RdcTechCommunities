import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ActivatedRoute, Router} from '@angular/router';
import { BoxCommunitiesComponent } from '../../components/box-communities/box-communities.component';
import { Communities } from '../../model/community';
import { CommunityDataService } from '../../services/community-data.service';

@Component({
  selector: 'app-detail-community',
  standalone: true,
  imports: [CommonModule, NavbarComponent, BoxCommunitiesComponent],
  templateUrl: './detail-community.component.html',
})
export default class DetailCommunityComponent {

  public communities_object: Communities[] = inject(CommunityDataService).communities 
  private route = inject(ActivatedRoute)
  community: Communities|undefined
  private router = inject(Router)

  ngOnInit(){
    const communityId: string|null = this.route.snapshot.paramMap.get('id')

    if(communityId){
      this.community = this.communities_object.find(community => community.id == +communityId)
    }
  }

  goBack(){
    this.router.navigate(['/homepage'])
  }
}
