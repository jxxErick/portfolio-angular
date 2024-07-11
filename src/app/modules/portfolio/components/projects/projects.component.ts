import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/spring-boot-logo.png',
      alt: 'Projeto SpringBoot',
      title: 'Vida FullStack',
      with: '100px',
      height: '51px',
      description:
        '<p>Projeto feito para competição tecnlógica promovida pela TQI, na qual fiquei em 6º lugar no rank geral</p> <p>Desenvolvido em maior parte usando Kotlin e Spring, com bancos de dados relacionais e docker. Foi feito também teste unitários com mockK e jUnit em todo o código, swagger e flyway também foram usados no processo para melhor documentação da nossa api. Que visa ser um e-commerce para mercearias</p>',
      links: [
        {
          name: 'Github',
          href: 'https://github.com/jxxErick/tqi_kotlin_backend_developer_2023',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
