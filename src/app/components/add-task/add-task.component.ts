import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { Subscription,Observable} from 'rxjs';

import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = "";
  day: string = "";
  reminder: boolean = false;
  cval: boolean = false;   //testing

  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((val) => (this.showAddTask = val));
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  //#region 
  button1 = document.querySelector("div.add-form input[type='button']");
  button2 = document.getElementsByClassName("btn btn_block btn2");
  button = document.getElementById("test");
  obs=new Observable;
  //#endregion 

  onSubmit() {
    if (!this.text) {
      alert("please add task!!!")
      return
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
      cval: this.cval
    }

    this.onAddTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;

    console.log(this.button);
  }





}
