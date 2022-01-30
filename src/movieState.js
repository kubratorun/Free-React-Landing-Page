//Import Images
import athlete from "./img/mini3.jpeg";
import goodtimes from "./img/outdoor1.jpeg";
import theracer from "./img/ofis3.png";
import athlete2 from "./img/mini2.jpeg";
import goodtimes2 from "./img/outdoor2.jpeg";
import theracer2 from "./img/ofis4.jpg";

export const MovieState = () => {
  return [
    {
      title: "What is Minimalist Design?",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "What is the purpose of minimalist design?",
          description:
            "“Minimalist interior design is very similar to modern interior design and involves using the bare essentials to create a simple and uncluttered space. It's characterised by simplicity, clean lines, and a monochromatic palette with colour used as an accent..”",
        },
        {
          title: "Why is minimalist decor so popular?",
          description:
            "“Why is it so popular? Minimalist design has long been popular, but it's become even more so recently. In short, it's popular because it works so well, and it has many benefits — especially when it comes to web design. Minimalism in web design is about emphasising the content of the site instead of the design elements.”",
        },
        {
          title: "What is the concept of minimalism?",
          description:
            "“Minimalism is about avoiding the unnecessary , it's about simplicity, utility and elegance. It's all about “LESS IS MORE” in terms of embracing the most of fewer things. The most common misconception is that minimalists “suffer” and “sacrifice” while having less things and less interesting experiences.”",
        },
      ],
    },
    {
      title: "Outdoor Design",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Why outdoor design is important?",
          description:
            "“Landscape design allows you to embrace nature in a manicured and predictable way, but the plants themselves have other benefits. Adding rich amounts of foliage may improve the air quality around your home. Plants absorb harmful pollutants and chemicals, purifying the air without the use of electricity or machinery..”",
        },
        {
          title: "Is outdoor living important?",
          description:
            "“The importance of outdoor space in promoting improved health and happiness has long been recognised, and research has shown a positive relationship between green space and general well-being.”",
        },
        {
          title: "What is landscape design and its importance?",
          description:
            "“ It forms the context for our everyday lives and is reflected in our literature, music and painting. The art of landscape gardening will involve considering the total environment of any new development and then shaping it using natural elements such as landform, trees, shrubs, and water to form a pleasing harmony.””",
        },
      ],
    },
    {
      title: "Office",
      mainImg: theracer,
      url: "/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "What is the importance of office design?",
          description:
            "“Employee productivity and comfort are heavily influenced by office design, layout, and space usage. Whether your company is redesigning your workplace or relocating, proper planning and attention to detail can help you create a more efficient, successful workplace with happy employees.”",
        },
        {
          title: "How do you design a work office?",
          description:
            "“Turns out that the open office idea isn’t all it was cracked up to be. In fact, open offices are associated with lower employee satisfaction and less productivity, higher levels of stress and fatigue, and higher rates of absenteeism including more sick days. In other words, bad news all around. To combat this problem, companies are shifting more toward variety to improve productivity. Workplace strategy expert Ron Friedman recommends identifying the types of work activities your employees perform and then designing spaces for those activities. For example, he suggests having personal spaces that employees can customize to fit their preferences, social spaces for collaboration and bonding, and “thinking rooms” for when individuals need some peace and quiet.”",
        },
        {
          title: "what does the future workplace look like?",
          description:
            "“Peter Fisher, director at Bennetts Associates, says that giving employees choice makes them feel more in control. He thinks we will see office design with rooms that have different ceiling heights, paint tones and lighting, air conditioning and temperature levels. “The need for people to have perceived control is important,” he says. “Research shows that people believe they are more comfortable if they have the opportunity to change their environment, even if they’ve actually made it worse for themselves.””",
        },
      ],
    },
  ];
};
