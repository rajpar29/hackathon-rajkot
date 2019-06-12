import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage'
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})

export class UploadImagesComponent implements OnInit {

  @Output() outputDownloadURl = new EventEmitter<string>();
  downloadUrl: string;

  // Main task 
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage) { }

  
  ngOnInit() {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }


  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `products/${file.name}_${new Date().getTime()}`;

    // Totally optional metadata
    const customMetadata = { app: 'My Ceramic App!' };

    
    this.task = this.storage.upload(path, file, { customMetadata });
    this.task.then(()=>{
          const ref = this.storage.ref(path);
      const downloadURL = ref.getDownloadURL().subscribe(url => {
        this.downloadUrl = url; // for ts
        this.outputDownloadURl.emit(this.downloadUrl);
        console.log(url);
      })
    })
    
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges()

  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }



}
