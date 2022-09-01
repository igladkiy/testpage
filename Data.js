import firstFirst from './assets/firstFirst.svg';
import firstSecond from './assets/firstSecond.svg';
import second from './assets/second.svg';
import third from './assets/third.svg';
import fourth from './assets/fourth.svg';
import fifth from './assets/fifth.svg';
import sixth from './assets/sixth.svg';

const data = {
  'cards': [
    {
      'id': '1',
      'name': 'Renderings',
      'list': [
        'Drone Photography',
        'Interiors',
        'Exteriors / Architectural',
      ],
      'text': [
        'Every photograph we produce finds the beauty in your property while serving as a profitable asset.',
      ],
      'images': [firstFirst, firstSecond],
    },
    {
      'id': '2',
      'name': 'Virtual Staging',
      'list': [],
      'text': [
        'Our staging will help you sell the potential of your space.',
        'We can work off of our own photography or photos you provide.',
      ],
      'images': [second],
    },
    {
      'id': '3',
      'name': 'Renderings',
      'list': [
        'Interiors',
        'Exteriors',
      ],
      'text': [
        'Renderings are the gold standard in pre-construction marketing.',
      ],
      'images': [third],

    },
    {
      'id': '4',
      'name': 'Interactive Tours',
      'list': [
        'Matterport',
        'Video Walkthroughs',
      ],
      'text': [
        'Give your audience the ability to explore your property without requiring in-person travel.',
      ],
      'images': [fourth],

    },
    {
      'id': '5',
      'name': 'Floor Plans',
      'list': [
        'On-site Measure',
        '2D Floor Plans',
        '3D Floor Plans',
      ],
      'text': [
        'We produce laser-precise floor plans faster than any other service.',
      ],
      'images': [fifth],

    },
    {
      'id': '6',
      'name': 'Video',
      'list': [
        'Drone Cinematography',
        'Interiors',
        'Exteriors / Architectural',
      ],
      'text': [
        [
          'Video content has higher engagement and will help your property stand out online.',
        ],
      ],
      'images': [sixth],

    },
  ],
};
export default data;