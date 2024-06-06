import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';



@Component({
  selector: 'app-addfile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addfile.component.html',
  styleUrl: './addfile.component.css'
})



export class AddfileComponent {

  file: File | null = null;
  name: string = '';
  message: string = '';

  constructor(private apiService: ApiserviceService, private router: Router) { }

  handleFileChange(event: any): void {
    this.file = event.target.files[0];
  }

  handleSubmit(): void {
    if (!this.file || !this.name) {
      this.message = 'File and Name are required';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('name', this.name);

    this.apiService.addFile(formData).subscribe(
      (response: any) => {
        if (response.id) {
          this.message = 'Image uploaded successfully!';
          setTimeout(() => {
            this.router.navigate(['/']); // Navigate to home page after 5 seconds
          }, 5000);
        } else {
          this.message = response.data;
          setTimeout(() => {
            this.message = '';
          }, 5000);
        }
      },
      (error) => {
          this.message = error.message;
        setTimeout(() => {
          this.message = '';
        }, 5000);
        console.error('There was an error uploading the image!', error);
      }
    );
  }
}
