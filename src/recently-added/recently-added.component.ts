import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recently-added',
    templateUrl: './recently-added.component.html',
    styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {

    words: string[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    addWord(word: string) {
        this.words.push(word);
    }

}