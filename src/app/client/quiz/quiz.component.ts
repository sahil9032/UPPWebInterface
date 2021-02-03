import { Component, OnInit } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {    
  }

  tiles: Tile[] = [
    {text: 'Subject 1', cols: 3, rows: 1, color: '#f1f1f1'},
    {text: 'Subject 2', cols: 1, rows: 2, color: '#f7f6e7'},
    {text: 'Subject 3', cols: 1, rows: 1, color: '#f4f5db'},
    {text: 'Subject 4', cols: 2, rows: 1, color: '#ffe8e8'},
    
    {text: 'Subject 1', cols: 1, rows: 2, color: '#f7f6e7'},
    {text: 'Subject 2', cols: 3, rows: 1, color: '#f1f1f1'},
    {text: 'Subject 3', cols: 1, rows: 1, color: '#f4f5db'},
    {text: 'Subject 4', cols: 2, rows: 1, color: '#ffe8e8'},

    {text: 'Subject 1', cols: 3, rows: 1, color: '#f1f1f1'},
    {text: 'Subject 2', cols: 1, rows: 2, color: '#f7f6e7'},
    {text: 'Subject 3', cols: 1, rows: 1, color: '#f4f5db'},
    {text: 'Subject 4', cols: 2, rows: 1, color: '#ffe8e8'},
    
    {text: 'Subject 1', cols: 1, rows: 2, color: '#f7f6e7'},
    {text: 'Subject 2', cols: 3, rows: 1, color: '#f1f1f1'},
    {text: 'Subject 3', cols: 1, rows: 1, color: '#f4f5db'},
    {text: 'Subject 4', cols: 2, rows: 1, color: '#ffe8e8'},
  ];



}
