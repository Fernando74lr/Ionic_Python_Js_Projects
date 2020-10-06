import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-even',
  templateUrl: './slideshow-even.component.html',
  styleUrls: ['./slideshow-even.component.scss'],
})
export class SlideshowEvenComponent implements OnInit {

  @Input() movies: Movie[] = [];
    
  slidesOptions = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };

  constructor() { }

  ngOnInit() {}

}