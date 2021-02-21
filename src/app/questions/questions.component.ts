import { Component, OnInit } from '@angular/core';

interface Question {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  activeQuestion: number;

  public questions: Question[] = [
    {
      id: 1,
      title: 'How do I change my details?',
      description: `We provide only the best trading software. The trading terminal
        MetaTrader4 is the most popular and convenient platform for access to
        global exchanges. You can work anywhere. All you need is the Internet
        because the necessary trading tools are already collected in one place
        and are available in a couple of clicks. Use only the best and develop
        with us!`,
    },
    {
      id: 2,
      title: 'What platforms will I be able to use?',
      description: `We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!`,
    },
    {
      id: 3,
      title: 'How do I change my details?',
      description: `We provide only the best trading software. The trading terminal
        MetaTrader4 is the most popular and convenient platform for access to
        global exchanges. You can work anywhere. All you need is the Internet
        because the necessary trading tools are already collected in one place
        and are available in a couple of clicks. Use only the best and develop
        with us!`,
    },
    {
      id: 4,
      title: 'How do I change my?',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero voluptas illum quas perferendis ab? Qui perspiciatis unde blanditiis ipsum.`,
    },
    {
      id: 5,
      title: 'How do I change my details?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero voluptas illum quas perferendis ab? Qui perspiciatis unde blanditiis ipsum.',
    },
    {
      id: 6,
      title: 'How do I change my details?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero voluptas illum quas perferendis ab? Qui perspiciatis unde blanditiis ipsum.',
    },
    {
      id: 7,
      title: 'How do I change my details?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero voluptas illum quas perferendis ab? Qui perspiciatis unde blanditiis ipsum.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle(id: number) {
    if (this.activeQuestion === id) {
      this.activeQuestion = null;
      return;
    }
    this.activeQuestion = id;
  }
}
