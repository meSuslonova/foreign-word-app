import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    languages: string[] = ['Русский', 'Английский'];
    selectedLanguage1: string;
    selectedLanguage2: string;
    numWords: number;
    timeLimit: number;

    constructor() { }

    ngOnInit(): void {
    }

}