import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Analista de desenvolvimento Jr',
        p: 'PayTech Solutions | Jun 2024 - Present',
      },
      text: '<p>Desde junho de 2024, atuo como Analista de desenvolvimento Jr, destacando-me nas áreas Back-end, utilizando Java, SpringBoot, SpringSecurity, JPA, JUnit e MySQL , e Front-end, onde o Angular é aplicado, caso necessário.</p> <p>Além disso, minha experiência abrange a integração com Micro Serviços, GitLab. Atualmente, enfrento o desafio significativo de contribuir para o desenvolvimento das primeiras aplicações para a PayTech.</p> <p>Destaco também a criação de apis rest altamente utilizáveis no back-end, utilizando Spring, como parte do nosso compromisso com a eficiência e a qualidade do código.</p>',
    },
  ]);
}
