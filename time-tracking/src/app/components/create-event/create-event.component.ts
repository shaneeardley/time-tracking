import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'firebase/storage';
import * as firebase from 'firebase';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  arr: FirebaseListObservable<any[]>;
  public uploadTask: firebase.storage.UploadTask;

  constructor(public database: AngularFireDatabase) { }

  ngOnInit() {
     this.arr = this.database.list('/events');  
  }

  upload(f, img) {
    let storageReference = firebase.storage().ref('/images/' + f.files[0].name);
    this.uploadTask = storageReference.put(f.files[0]);
    this.uploadTask.on('state_changed', progress => {
      // Handle Progress of fileupload  
    }, err => {
      // Handle unsuccessful uploads  
    }, () => {
      // Handle successful uploads on complete  
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...  
      storageReference.getDownloadURL().then((url) => {
        // Insert url into an <img> tag to "download" 
        img.src = url;
      });
    });
  }

  add(event, img, time) {
    this.arr.push({ eventName: event.value, createdAt: new Date().toString(), time: time.value,likes:0, image: img.src });
  }

}
