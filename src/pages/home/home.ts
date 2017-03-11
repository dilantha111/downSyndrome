import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController, Platform} from 'ionic-angular';
import {File} from "ionic-native";
declare var cordova;
const fs: string = cordova.file.dataDirectory;
const folderName: string = "DownSyndrome";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    private data: string[] = [];
    private fileTest: any = "before testing";
    private test: any;

    constructor(public navCtrl: NavController, public platform: Platform,
                public storage: Storage) {
        this.data = [];

        platform.ready().then(() => {
            File.checkDir(fs, folderName).then(_ => {
                storage.ready().then(() => {

                });
            }).catch(_ => {
                this.fileTest = "no folder found creating new one...";
                File.createDir(fs, folderName, true).then(_ => {
                    this.test = "folder created succesfully";
                });
            });
        });
    }

    ionViewDidLoad() {
        // don't know the reason why this file access doesn't work with a service
        // after resolving that this file access thing should be transferred to a service
        //this.fileTest = JSON.stringify(this.pictures.testData);
    }

}
