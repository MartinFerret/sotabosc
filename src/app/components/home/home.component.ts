import {Component, OnInit} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faSeedling, faPaw, faTree} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PanelModule,
    ButtonModule,
    NgOptimizedImage,
    TranslateModule,
    RouterLink,
    FaIconComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faSeedling = faSeedling;
  faPaw = faPaw;
  faTree = faTree;

}
