import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {ModifyFormComponent} from "../modify-form/modify-form.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SidebarModule,
    ButtonModule,
    DividerModule,
    ModifyFormComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Input() displaySidebar!: boolean;
  @Input({ required: true }) eventToEdit!: Event;
  @Output() returnStatusSidebar = new EventEmitter<boolean>();
  @Output() eventToPersist = new EventEmitter<Event>();

  sizeUpPanel = false;

  sidenavClose() {
    this.returnStatusSidebar.emit(false);
  }

  sizeUpPanelAction() {
    this.sizeUpPanel = !this.sizeUpPanel;
  }

  editExistingEvent(event: any) {
    this.eventToPersist.emit(event);
  }
}
