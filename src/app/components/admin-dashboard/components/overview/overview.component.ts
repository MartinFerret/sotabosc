import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject, input,
  Output, signal
} from '@angular/core';
import {TableDataColumnModel} from "../../../../models/column.model";
import {CurrencyPipe, NgForOf, NgIf, SlicePipe, TitleCasePipe} from "@angular/common";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ConfirmService} from "../../../../services/confirm.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {EventService} from "../../../../services/event.service";
import {ToastModule} from "primeng/toast";
import {Event} from "../../../../models/event.model";

@Component({
  selector: 'app-overview',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfirmService, ConfirmationService],
  imports: [
    NgIf,
    TableModule,
    NgForOf,
    ButtonModule,
    CurrencyPipe,
    TitleCasePipe,
    ConfirmDialogModule,
    SidebarComponent,
    SlicePipe,
    ToastModule
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  private readonly _confirmService = inject(ConfirmService);
  private readonly _eventService = inject(EventService);
  private readonly _cdref = inject(ChangeDetectorRef);
  private readonly _toastService = inject(MessageService);
  eventToEdit! : Event;
  events = input.required<Event[] | undefined>()
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() dupdateEvent = new EventEmitter<Event>();
  displaySidebar = signal(false);

  tableData: TableDataColumnModel = {
    headers: [
      { field: 'title', header: 'Títol' },
      { field: 'description', header: 'Descripció' },
      { field: 'date', header: 'Data' },
      { field: 'hour', header: 'Hores' },
      {
        field: 'price',
        header: 'Preu',
      },
      { field: 'status', header: 'Estat' },
    ],
    filters: [
      { field: 'title', order: -1 },
      { field: 'description', order: 1 },
      { field: 'date', order: 1 },
    ],
    rowPerPage: [25, 50, 100],
  };

  confirmDeletion(title: string) {
    this._confirmService.openConfirm({
      message: `Esteu segur que vols suprimir : ${title} ?`,
      accept: () => this.eventDeletion(title),
    })
  }
  eventDeletion(title: string) {
    this.deleteEvent.emit(title);
    this._toastService.add({
      icon: 'pi pi-check',
      severity: 'success',
      detail: 'Esdeveniment esborrat amb èxit.'
    })
    this._cdref.detectChanges();
  }

  editEventAndDisplaySidebar(event: Event) {
    this.displaySidebar.set(true);
    this.eventToEdit = event;
  }

  modifyEvent(event: Event) {
    this._eventService.modifyEvent(this.eventToEdit.title, event).then(() => {
      this.eventToEdit = event;
    });
    this.displaySidebar.set(false);
    this._toastService.add({
      icon: 'pi pi-check',
      severity: 'success',
      detail: 'Editat correctament, carregar la pàgina.'
    })
    this._cdref.detectChanges();
  }
}
