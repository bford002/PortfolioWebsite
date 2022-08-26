import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-projectmodal',
  templateUrl: './projectmodal.component.html',
  styleUrls: ['./projectmodal.component.css']
})
export class ProjectmodalComponent implements OnInit {

  @Input() public modal: boolean = false;
  @Input() public projects: { name: string, description: string, link: string }[] = [];

  @Output() public hideModal = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.hideModal.emit(false);
  }

}
