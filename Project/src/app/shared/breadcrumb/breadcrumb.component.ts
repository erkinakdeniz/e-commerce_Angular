import { AfterViewInit, Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit,AfterViewInit {

  constructor(private route: ActivatedRoute) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {

  }


}
