import {inject, Injectable} from '@angular/core';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  setDoc,
  updateDoc
} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Event, EventBar} from "../models/event.model";
import {Constants} from "../components/constants";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  firestore = inject(Firestore);

  getEvents() : Observable<Event[]> {
    const events = collection(this.firestore, Constants.events);
    return collectionData(events) as Observable<Event[]>;
  }

  createEvent(event: Event, docName: string){
    const collectionRef = collection(this.firestore, Constants.events);
    const docRef = doc(collectionRef, docName);

    return setDoc(docRef, event);
  }

  deleteEvent(title: string) {
    const eventDocRef = doc(this.firestore, Constants.events, title);
    return deleteDoc(eventDocRef);
  }

  modifyEvent(title: string, event: any) {
    const eventDocRef = doc(this.firestore, Constants.events, title);
    return updateDoc(eventDocRef, event);
  }

  getEventBarConfig() {
    const eventBar = doc(this.firestore, Constants.eventBar, Constants.eventBar);
    return getDoc(eventBar);
  }

  modifyEventBar(status : any) {
    const eventDocRef = doc(this.firestore, Constants.eventBar, Constants.eventBar);
    return updateDoc(eventDocRef, status);
  }
}
