import {
  python,
  tensorflow,
  scikit_learn,
  pytorch,
  keras,
  numpy,
  pandas,
  pycharm,
  jupyter,
  mobile,
  backend,
  creator,
  web,
  gan_dapt,
  neuro_drive,
  market_predict,
  microsoft,
  adani,
  bn_software,
  ericsson,
  kamel_tourki,
  nati_gezahegn,
  zakaria,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Mobile App Development',
    icon: web,
  },
  {
    title: 'Web App Development',
    icon: mobile,
  },
  {
    title: 'UI/UX',
    icon: backend,
  },
  {
    title: 'Cloud & AI',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Tensorflow',
    icon: tensorflow,
  },
  {
    name: 'Scikit Learn',
    icon: scikit_learn,
  },
  {
    name: 'PyTorch',
    icon: pytorch,
  },
  {
    name: 'Keras',
    icon: keras,
  },
  {
    name: 'NumPy',
    icon: numpy,
  },
  {
    name: 'Pandas',
    icon: pandas,
  },
  {
    name: 'PyCharm',
    icon: pycharm,
  },
  {
    name: 'Jupyter',
    icon: jupyter,
  },
];

const experiences = [
  {
    title: 'Digital Engineering',
    company_name: 'Mobile App| Web App | UI/UX | Quality Assurance & Security',
    icon: bn_software,
    iconBg: '#383E56',
    date: '',
    points: [
      'We emphasize on delivering swift and stable apps with a sleek interface be it iOS, Android or hybrid platforms.',
      'Modern web apps revolutionize business operations. Whether for your corporate site, Intranet, or cloud-based setup, our solutions enhance client service. ',
      'From seamless navigation to captivating visual elements, our UI/UX team creates designs that resonate with your users ensuring intuitive, enjoyable and memorable experience which increases business success.',
      'Our Quality Assurance (QA) team ensures that your app adheres to the latest web standards and security protocols, in addition to increased usability, fast webpage loading time and web-designed interfaces.',
    ],
  },
  {
    title: 'Resource Augmentation and DevOps',
    company_name: '',
    icon: adani,
    iconBg: '#E6DEDD',
    date: '',
    points: [
      'Whether you need a single specialist or a cross-functional team, we can swiftly assemble the right talent mix tailored to your projects unique requirements.',
      'Resource augmentation offers a flexible workforce solution, allowing you to scale your team up or down based on project demands, optimizing costs and efficiency.',
      'Implementing DevOps best practices to enhance the software development and deployment process, increasing efficiency and collaboration across teams.',
      'Automating testing and deployment procedures through DevOps, reducing errors and accelerating the delivery of high-quality software.',
    ],
  },
  {
    title: 'Cloud and Artificial Intelligence',
    company_name: 'Cloud computing | Cloud security & compliance | AI as a service(AlaaS) | Knowledge-based System',
    icon: microsoft,
    iconBg: '#383E56',
    date: '',
    points: [
      ' Access data and apps globally, facilitating remote work and collaboration.',
     ' Automated backups and recovery for protection against unexpected events.',
      'Integrate AI capabilities into your applicatons, processes , or systems, without having to develop AI models from scratch.',
      'Mine extensive data to generating high-quality leads, optimizing your workforce, and fostering business growth.',
    ],
  },
  {
    title: 'Master Internship: 3GPP RAN4 AI',
    company_name: 'Ericsson',
    icon: ericsson,
    iconBg: '#E6DEDD',
    date: 'Mar 2023 - Present',
    points: [
      'Working on optimization of OFDM using Deep Learning.',
      'Currently working on cGAN and trying to develop an advanced algorithm for optimization of OFDM.',
      'Reviewed state of the art on OFDM 5G NR and developed a novel solution for the project task.',
      'Learning about 3GPP 5G NR standard through mentors, video lectures and meetings.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'We have experienced improved efficiency in our ICT infrastructure enhancing smooth running of our daily operations. We highly recommend Techbiz to anyone seeking top-notch ICT services and support.',
    name: 'Yobesh Oyaro',
    designation: 'Head of Procurement',
    company: 'KPA',
    image: kamel_tourki,
  },
  {
    testimonial:
      'We are grateful to find a software partner that truly cares about our success. We highly recommend Techbiz Limited to any organization seeking reliable software solutions.',
    name: 'Mustafa Ramadhan',
    designation: 'Vice President',
    company: 'KNCCI',
    image: nati_gezahegn,
  },
  {
    testimonial:
     'We had the pleasure of working with Techbiz Limited on implementing our software solutions and it was a game changer for our manufacturing companies. They showed exceptional professionalism and dedication.',
    name: 'Ahmed Bajaber',
    designation: 'Director',
    company: 'Kitui Floor Mills & Vipingo Industries',
    image: zakaria,
  },
];

const projects = [
  {
    name: 'PayDay',
    description:
      'Leveraging domain-invariant image translations, I combined domain adaptation and generalization techniques for improved image segmentation.',
    tags: [
      {
        name: 'IOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Android',
        color: 'green-text-gradient',
      },
      {
        name: 'Web',
        color: 'pink-text-gradient',
      },
    ],
    image: gan_dapt,
    source_code_link: 'https://demo.techbizafrica.com/techbiz',
  },
  {
    name: '47CRM Alerts',
    description:
      'Successfully trained a cutting-edge self-driving car using Convolution neural networks (CNN) utilizing a state-of-the-art simulator provided by Udacity.',
    tags: [
      {
        name: 'IOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Android',
        color: 'green-text-gradient',
      },
      {
        name: 'Web',
        color: 'pink-text-gradient',
      },
    ],
    image: neuro_drive,
    source_code_link: 'https://demo.techbizafrica.com/techbiz',
  },
  {
    name: '47Pro',
    description:
      "We developed a powerful regression model using machine learning algorithms to predict professional football players' market value accurately.",
    tags: [
      {
        name: 'IOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Android',
        color: 'green-text-gradient',
      },
      {
        name: 'Web',
        color: 'pink-text-gradient',
      },
    ],
    image: market_predict,
    source_code_link:
      'https://demo.techbizafrica.com/techbiz',
  },
];

export { services, technologies, experiences, testimonials, projects };
