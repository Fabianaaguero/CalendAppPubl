import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.css'
})
export class TutorialComponent {

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  ngOnInit() {
    if (this.videoPlayer.nativeElement) {
      this.videoPlayer.nativeElement.muted = true;
    }
  }

}