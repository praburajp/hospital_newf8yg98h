import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LabService } from 'src/app/Services/lab.service';
const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-lab-create',
  templateUrl: './lab-create.component.html',
  styles: [`.my-drop-zone { border: dotted 3px lightgray; }
  .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */
  .another-file-over-class { border: dotted 3px green; }

  html, body { height: 100%; };
  #image {
    display: none;
}`]
})
export class LabCreateComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'image' });
  constructor(private imageServ: LabService, private router: Router) { }

  addLabtest(form: NgForm) {
    console.log(form.value);

    this.imageServ.addNewProfile(form.value).subscribe((data) => {
      console.log(' Success ..... ');
      this.router.navigate(['/']);
    }, (err) => {
      console.log(' Error ..... ');
    });
  }
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    };
  }
}
