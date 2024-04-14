import { Component, OnInit } from '@angular/core';
import { BienService } from '../../../services/bien.service';
import { ActivatedRoute } from '@angular/router';
import { Bien } from '../../../models/bien';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bien-details',
  templateUrl: './bien-details.component.html',
  styleUrl: './bien-details.component.css'
})
export class BienDetailsComponent implements OnInit {

  public bien!: Bien;
  fileForm!: FormGroup;

  constructor(private bienService: BienService,
            private route: ActivatedRoute,
            private fb: FormBuilder){ }

  ngOnInit(): void {

    this.fileForm = this.fb.group({
      file: ['']
    });

    const id: number = +this.route.snapshot.params['id'];

    this.bienService.getBienById(id).subscribe(((response: any) => {
      this.bien = response;
      console.log(this.bien);
    }))

  }

  onFileChange(event: any){
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const binaryString: string = reader.result as string;
      console.log('Contenu binaire du fichier:', binaryString);
    };

    reader.readAsBinaryString(file);
  }

}
