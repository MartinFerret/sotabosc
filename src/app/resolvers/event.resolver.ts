import {ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {EventService} from "../services/event.service";
import {Event} from '../models/event.model';

export const eventResolver: ResolveFn<Event[]> = () => {
  return inject(EventService).getEvents();
};
