import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck,
   AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy,ViewChild,ElementRef,
  ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
 AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element:{type:string,name:string,content:string};
  @Input() name:string;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;
  constructor() {
    console.log("constructor called");
   }
  ngOnChanges(changes:SimpleChanges) {
    console.log("changes called");
    console.log("changes-->", changes);
  }
  ngOnInit() {
    console.log("ngOn init called");
    console.log("text content"+ this.header.nativeElement.textContent  );
    console.log("text content of paragraph"+ this.paragraph.nativeElement.textContent  );
  }
  ngDoCheck(){
    console.log("ngDoCheck init called");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit init called");
    console.log("text content of paragraph"+ this.paragraph.nativeElement.textContent  );
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked init called");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit init called");
    console.log("text content"+ this.header.nativeElement.textContent  );
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked init called");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy init called");
  }
}
