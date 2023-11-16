import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BoxCommunitiesComponent } from '../../components/box-communities/box-communities.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, BoxCommunitiesComponent],
  templateUrl: './home-page.component.html',
})
export default class HomePageComponent {

}
