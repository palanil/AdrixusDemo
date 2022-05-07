import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {
  constructor(public activatedRoute: ActivatedRoute) { }
  @Input() singleTask!: any;
  ngOnInit(): void {
    this.singleTask = localStorage.getItem('taskData');
    this.singleTask = JSON.parse(this.singleTask);
    this.activatedRoute.params.subscribe(param => {
      this.singleTask = this.singleTask[param.id]
    })
  }

}
