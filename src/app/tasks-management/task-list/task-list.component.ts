import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  closeResult = '';
  singleTask: any;
  constructor(private modalService: NgbModal) { }

  openModel(content: any, item: any) {
    this.singleTask = item;
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.
      then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  taskList: any = [];
  ngOnInit(): void {
    this.taskList = localStorage.getItem('taskData');
    this.taskList = JSON.parse(this.taskList);
  }
}
