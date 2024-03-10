import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {InputSwitchModule} from "primeng/inputswitch";
import {ButtonModule} from "primeng/button";
import {InputTextareaModule} from "primeng/inputtextarea";
import {Event} from '../../../../models/event.model';
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {EventService} from "../../../../services/event.service";
import {FileUploadEvent, FileUploadModule} from "primeng/fileupload";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {TranslateModule} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-create-event',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputSwitchModule,
    ButtonModule,
    InputTextareaModule,
    ToastModule,
    FileUploadModule,
    TranslateModule,
  ],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss'
})
export class CreateEventComponent implements OnInit, OnDestroy {
  toastService = inject(MessageService);
  fireStorage = inject(AngularFireStorage);
  eventService = inject(EventService);
  router = inject(Router);
  subscription: Subscription = new Subscription();
  eventNumber: number = 1;

  eventForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    title: new FormControl(''),
    description: new FormControl('', [Validators.required, Validators.max(3)]),
    date: new FormControl('', [Validators.required]),
    hour: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    price: new FormControl(10),
    isOpen: new FormControl(true, [Validators.required]),
    googleFormLink: new FormControl(''),
  });

  ngOnInit() {
    this.getNumberEvents();
  }

   createEvent() {
    const newEvent: Event = this.buildFormValues();
    if (this.eventForm.valid) {
       this.eventService.createEvent(newEvent, this.eventForm.value.title ?? '');
      this.toastService.add({
        icon: 'pi pi-check',
        severity: 'success',
        detail: 'Esdeveniment creat amb èxit'
      })
      this.eventForm.reset();
      this.router.navigateByUrl('/noticies');
    } else {
      this.toastService.add({
        icon: 'pi pi-times',
        severity: 'error',
        detail: 'Error amb la creació'
      })
    }
  }

  async onUpload($event: FileUploadEvent) {
    const file = $event.files[0];
    if (file) {
      const path = `files/${file.name}`;
      await this.fireStorage.upload(path, file);
      this.eventForm.patchValue({
        image: path
      });
      this.eventForm.updateValueAndValidity();
    }
  }

  getNumberEvents() {
    this.subscription.add(this.eventService.getEvents().subscribe((m) => {
      this.eventNumber = m.length + 1;
    }));
  }

  buildFormValues() {
    const formValues = this.eventForm.value;
    return {
      id: this.eventNumber,
      title: formValues.title ?? '',
      description: formValues.description ?? '',
      date: formValues.date ?? '',
      image: formValues.image ?? '',
      hour: formValues.hour ?? '',
      isOpen: formValues.isOpen ?? false,
      price: formValues.price ?? 0,
      imageUrl: '',
      googleFormLink: formValues.googleFormLink ?? '',
    };
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
