import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { TaskService } from './task.service';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  private obs = new Observable(val => val.next(this.showAddTask));

  constructor(private tsks: TaskService) { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.obs.subscribe(v => console.log(v+` from obs in uiService`));
    this.subject.next(this.showAddTask);
    

  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
    // return this.obs;              //why it doesnt work as an obsevabale
  }
}
