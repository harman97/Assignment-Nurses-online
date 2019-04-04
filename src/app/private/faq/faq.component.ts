import { Component, OnInit } from '@angular/core';
import { GetFaqService } from './get-faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs: any
  constructor(private _getService: GetFaqService) { }

  ngOnInit() {
    this._getService.getFaq().subscribe(response => {
      this.faqs = response;
      console.log(this.faqs);
      console.log(response);
    });
  }

}
