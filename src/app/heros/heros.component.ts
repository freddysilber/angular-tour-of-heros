import { Component, OnInit } from '@angular/core'

import { Hero } from '../hero'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstrom'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
