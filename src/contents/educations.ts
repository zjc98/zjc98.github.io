import sjtuLogo from '@/assets/sjtu.png';
import bitLogo from '@/assets/bit.png';

const educations = [
  {
    time: '2021.09 - 2024.03 (Expected)',
    details: [
      [
        'Master in Electronics Information at ',
        [
          'School of Electronic Information & Electrical Engineering',
          'link',
          'https://english.seiee.sjtu.edu.cn/'
        ],
        ', ',
        ['Shanghai Jiao Tong University', 'link', 'https://en.sjtu.edu.cn/'],
        ', supervised by ',
        [
          'Assoc Prof. Jiamiao Yang',
          'link',
          'https://scholar.google.com/citations?user=Thbt6zwAAAAJ'
        ],
        '.'
      ],
      ['GPA: ', ['3.7', 'bold'], '/4.0'],
      ['Research Topics: Wavefront Sensing, Stereo Vision.']
    ],
    logo: sjtuLogo
  },
  {
    time: '2017.09 - 2021.07',
    details: [
      [
        'Bachelor in Instrumental Science at ',
        ['School of Optics & Photonics', 'link', 'https://opt.bit.edu.cn/'],
        ', ',
        ['Beijing Institute of Technology.', 'link', 'https://www.bit.edu.cn']
      ],
      ['GPA: ', ['91', 'bold'], '/100 (Rank 1st)']
    ],
    logo: bitLogo
  }
];

export default educations;
