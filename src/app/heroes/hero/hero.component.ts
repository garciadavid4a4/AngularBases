import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:String = 'Ironman'
  public age: number = 45;

  get capitalizedName(){
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(nombre:string) {
    this.name = nombre;
  }
  changeAge(age:number) {
    this.age = age;
  }
  resetForm(){
    this.name = 'Ironman';
    this.age = 45;
  }
}
