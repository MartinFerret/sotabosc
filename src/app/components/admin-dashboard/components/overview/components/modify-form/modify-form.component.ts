import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {FileUploadModule} from "primeng/fileupload";
import {InputNumberModule} from "primeng/inputnumber";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-modify-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ButtonModule,
    FileUploadModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './modify-form.component.html',
  styleUrl: './modify-form.component.scss'
})
export class ModifyFormComponent implements OnInit {
  private readonly _cdref = inject(ChangeDetectorRef);

  @Input({ required: true }) eventToEdit!: any;
  @Output() eventToPersist = new EventEmitter<Event>();

  eventForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    hour: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(10),
    isOpen: new FormControl(true, [Validators.required]),
    googleFormLink: new FormControl(''),
  });

  ngOnInit() {
    if (this.eventToEdit) {
      this.eventForm.controls.title.setValue(this.eventToEdit.title);
      this.eventForm.controls.description.setValue(this.eventToEdit.description);
      this.eventForm.controls.date.setValue(this.eventToEdit.date);
      this.eventForm.controls.hour.setValue(this.eventToEdit.hour);
      this.eventForm.controls.price.setValue(this.eventToEdit.price);
      this.eventForm.controls.isOpen.setValue(this.eventToEdit.isOpen);
      this.eventForm.controls.googleFormLink.setValue(this.eventToEdit.googleFormLink);
      this.eventForm.controls.title.disable();
    }
  }

  editExistingEvent() {
    if (this.eventForm.valid) {
      const modifiedEvent: any = this.buildFormValues();
      if (this.eventToEdit) {
        this.eventToPersist.emit(modifiedEvent);
        this._cdref.markForCheck();
      }
    }
  }

  buildFormValues() {
    const formValues = this.eventForm.value;
    return {
      id: this.eventToEdit.id,
      title: this.eventToEdit.title,
      description: formValues.description ?? '',
      date: formValues.date ?? '',
      image: this.eventToEdit.image,
      hour: formValues.hour ?? '',
      isOpen: formValues.isOpen ?? false,
      price: formValues.price ?? 0,
      imageUrl: this.eventToEdit.imageUrl,
      googleFormLink: formValues.googleFormLink ?? '',
    };
  }
}
