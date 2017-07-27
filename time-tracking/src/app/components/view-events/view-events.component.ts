import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {

  arr: FirebaseListObservable<any[]>;
  constructor(public database: AngularFireDatabase) { }

  ngOnInit() {
    this.arr = this.database.list('/events');
  }

  remove($key) {
    this.arr.remove($key);
  }

  like($key, like) {
    this.arr.update($key, { likes: like + 1 });;
  }

}
