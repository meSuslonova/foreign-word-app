import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-go',
    templateUrl: './go.component.html',
    styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {

    words: string[] = [];
    currentWord: string;
    answer: string;
    correct: boolean;

    constructor() { }

    ngOnInit(): void {
        this.generateExercise();
    }

    generateExercise() {
        this.currentWord = this.words[Math.floor(Math.random() * this.words.length)];
    }

    checkAnswer() {
        this.correct = this.answer === this.currentWord;
    }

}