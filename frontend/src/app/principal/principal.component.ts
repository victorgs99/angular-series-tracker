import { Component, ElementRef, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  constructor(private elementRef: ElementRef){}

  ngOnInit(): void {
    var scriptFunctions = document.createElement("script");
    scriptFunctions.type = "text/javascript";
    scriptFunctions.src = "../assets/principalFunctions.js";
    this.elementRef.nativeElement.appendChild(scriptFunctions);
  }
}
