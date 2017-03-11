import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {Camera, MediaPlugin} from "ionic-native";
import {File} from "ionic-native";

declare var cordova;
const fs: string = cordova.file.dataDirectory;
const folderName: string = "DownSyndrome";

@Component({
    selector: 'page-add',
    templateUrl: 'add.html'
})
export class AddPage {
    public base64Image: string = "assets/SampleImg/add.jpg";
    public erroString: string;
    public result: string;
    private audioFile: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public platform: Platform,
                public storage: Storage,) {

    }

    ionViewDidLoad() {

    }

    takePicture() { // this function works fine taking a photo and store it in another location
        Camera.getPicture({
            destinationType: Camera.DestinationType.FILE_URI,
            targetWidth: 1000,
            targetHeight: 1000
        }).then((imageData) => {
            let filePath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
            let fileName = imageData.substr(imageData.lastIndexOf('/') + 1);
            this.base64Image = imageData;
            let newPath = fs + "/" + folderName + "/";
            File.moveFile(filePath, fileName, newPath, "test").then((result) => {
                this.result = JSON.stringify(result);
                File.checkFile(newPath,"test").then((file) => {
                    this.erroString = "file moved success";
                },(err)=>{
                    this.erroString = "file move failed";
                });
            }).catch((err) => {
                this.erroString = err;
            });

        }, (err) => {
            this.erroString = JSON.parse(err);
        });
    }

    recordAudio() {
        this.audioFile = new MediaPlugin(fs+"/"+folderName+"/test.mp3");
        this.audioFile.startRecord();
    }

    stopRecording(){
        this.audioFile.stop();
    }

    playbackRecording(){
        this.audioFile.play();
    }

}
