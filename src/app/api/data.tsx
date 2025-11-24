import { getImgPath } from '@/utils/imagePath';

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "Captioning",
        description: "Make your content accessible with accurate captions",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "Multilingual Subtitling",
        description: "Reach a global audience with subtitles in multiple languages",
    },
];

export const cardData = [
    {
      iconUrl: getImgPath('/images/build-amazing/beautiful-design.svg'),
      title: 'Professional Quality',
      description: 'Our team of experienced linguists ensures accurate and engaging subtitles.',
      link: '/',
    },
{
      iconUrl: getImgPath('/images/build-amazing/amazing.svg'),
      title: 'Transparent Pricing',
      description: 'Our pricing is clear and upfront, with no hidden fees.',
      link: '/',
    },
    {
      iconUrl: getImgPath('/images/build-amazing/coded.svg'),
      title: 'Fast\nDelivery',
      description: 'We deliver your subtitles quickly, so you can reach your audience sooner.',
      link: '/',
    },
    {
      iconUrl: getImgPath('/images/build-amazing/beautiful-design.svg'),
      title: 'Custom Solutions',
      description: 'We tailor our subtitling services to meet your specific needs.',
      link: '/',
    },
  ];

  export const boxData = [
    {
      src: getImgPath('/images/work-grow/mobile-application.jpg'),
      alt: 'work-grow',
      title: 'Apex Mobile Application Development',
      slug: "portfolio-1"
    },
    {
      src: getImgPath('/images/work-grow/weby-dashboard-design.jpg'),
      alt: 'work-grow',
      title: 'Weby Dashboard Design',
      slug: "portfolio-2"
    },
    {
      src: getImgPath('/images/work-grow/frontend-development.jpg'),
      alt: 'work-grow',
      title: 'Frontend Development',
      slug: "portfolio-3"
    },
    {
      src: getImgPath('/images/work-grow/illustration.jpg'),
      alt: 'work-grow',
      title: 'Lying on arrow concept illustration',
      slug: "portfolio-4"
    },
    {
      src: getImgPath('/images/work-grow/financial-image.jpg'),
      alt: 'work-grow',
      title: 'Financial data concept illustration',
      slug: "portfolio-5"
    },
  ];

 export const accordionData = [
    {
      title: "How do I order subtitling services?",
      content:
        "If you are interested in our subtitling services, just fill in our provided form or contact us via email. Provide a brief of what you would like and we will answer as soon as we can.",
    },
    {
      title: "What languages does your company work in?",
      content:
        "We work with a wide range of languages to provide accurate and culturally relevant subtitles. We specialize in subtitles fro English and Spanish, but if you have a specific language in mind, feel free to ask us!",
    },
    {
      title: "Do you use Machine Translation (MT)?",
      content:
        "We use human and/or MT. Whichever model is used, all content is post-edited and QC'd by human professional translators. Andovar's view is that MT does not replace translators; rather, it helps them to be more efficient. We work with a state-of-the-art platform with built-in machine translation engines specifically trained for broadcast media content. In addition to automating the translation, our platform has terminology management tools, as well as inbuilt real-time QC checks that ensure reading speeds are respected, as well as flagging character and line limit violations.",
    },
    {
      title: "What files do you provide?",
      content:
        "We provide subtitles in various file formats to suit your needs, including SRT, VTT, and more. If you have a specific format requirement, please let us know and we will do our best to accommodate it.",
    },
  ];

  export const sections = {
    features: [
      { name: 'A video subtitling company.', href: '/' },
    ],
    resources: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/' },
      { name: 'Contact', href: '/' },
    ],
    platform: [
      { name: 'contact@captioncore.com', href: '/' },
    ],
  };