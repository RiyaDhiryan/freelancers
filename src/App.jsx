import './App.css';
import Card from './components/card';
function App(){
  const Data = [
  {
    pay: "$55/hr",
    name: "Riya Mehta",
    role: "UI/UX Designer",
    tag1: "UI",
    tag2: "UX",
    tag3: "Figma",
    tag4: "+5",
    intro: "Passionate UI UX designer creating user focused interfaces with clean layouts and meaningful digital experiences.",
    img:"https://imageio.forbes.com/specials-images/imageserve/707219908/960x0.jpg?height=474&width=711&fit=bounds"
  },
  {
    pay: "$48/hr",
    name: "Aarav Singh",
    role: "Mobile App Designer",
    tag1: "Mobile",
    tag2: "iOS",
    tag3: "Android",
    tag4: "+3",
    intro: "Creative mobile designer specializing in smooth app experiences intuitive navigation and modern visual design.",
    img:"https://thumbs.dreamstime.com/b/profile-picture-smiling-male-employee-posing-workplace-close-up-headshot-portrait-smiling-caucasian-businessman-look-190961990.jpg"
  },
  {
    pay: "$60/hr",
    name: "Rohan Verma",
    role: "Product Designer",
    tag1: "Product",
    tag2: "UX",
    tag3: "Research",
    tag4: "+6",
    intro: "Product designer focused on solving real problems through research driven design and thoughtful user journeys.",
    img:"https://img.freepik.com/free-photo/male-entrepreneur-working-computer-home_637285-12152.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    pay: "$40/hr",
    name: "Simran Kaur",
    role: "Graphic Designer",
    tag1: "Branding",
    tag2: "Illustrator",
    tag3: "ai",
    tag4: "+4",
    intro: "Graphic designer creating strong brand visuals engaging graphics and eye catching marketing design assets.",
    img:"https://img.freepik.com/free-photo/outdoor-city-fashion-portrait-young-businesswoman-working-cafe-terrace-sunny-day-casual-stylish-outfit-mint-details-using-her-laptop-cafe-break-business-concept_291049-679.jpg"
  },
  {
    pay: "$52/hr",
    name: "Kabir Singh",
    role: "Web Designer",
    tag1: "Web",
    tag2: "HTML",
    tag3: "CSS",
    tag4: "+2",
    intro: "Web designer crafting responsive modern websites focused on usability performance and clean visual structure.",
    img:"https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg"
  },
  {
    pay: "$45/hr",
    name: "Ananya Roy",
    role: "UX Researcher",
    tag1: "UX",
    tag2: "Research",
    tag3: "Testing",
    tag4: "+5",
    intro: "UX researcher understanding user behavior through testing insights data analysis and real user feedback.",
    img:"https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg"
  },
  {
    pay: "$70/hr",
    name: "Daniel Lee",
    role: "Design Lead",
    tag1: "Leadership",
    tag2: "Strategy",
    tag3: "UI",
    tag4: "+4",
    intro: "Design lead guiding teams building scalable design systems and delivering impactful user centered products.",
    img:"https://images.unsplash.com/photo-1622151834677-70f982c9adef?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    pay: "$38/hr",
    name: "Pooja Patel",
    role: "Junior UI Designer",
    tag1: "UI",
    tag2: "Figma",
    tag3: "Canva",
    tag4: "+6",
    intro: "Junior UI designer learning fast creating simple interfaces and improving visual skills daily.",
    img:"https://img.freepik.com/free-photo/portrait-smiling-young-woman-female-student-doing-distance-learning-course-using-laptop-studying_1258-255002.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    pay: "$65/hr",
    name: "Alex Brown",
    role: "Interaction Designer",
    tag1: "ui",
    tag2: "Prototyping",
    tag3: "Motion",
    tag4: "+3",
    intro: "Interaction designer crafting engaging micro interactions animations and smooth user interface transitions.",
    img:"https://www.shutterstock.com/image-photo/young-professional-specialist-latin-businessman-600nw-2717142905.jpg"
  },
  {
    pay: "$50/hr",
    name: "Vikram Joshi",
    role: "Visual Designer",
    tag1: "Visual",
    tag2: "Branding",
    tag3: "UI",
    tag4: "+2",
    intro: "Visual designer focused on storytelling through colors typography layouts and strong brand identity.",
    img:"https://static.vecteezy.com/system/resources/thumbnails/053/630/733/small/a-man-in-a-suit-and-tie-standing-with-his-arms-crossed-photo.jpeg"
  },
  {
    pay: "$42/hr",
    name: "Sara Khan",
    role: "Social Media Designer",
    tag1: "Social",
    tag2: "promo",
    tag3: "Content",
    tag4: "+5",
    intro: "Social media designer creating scroll stopping visuals engaging content and consistent brand presence.",
    img:"https://img.freepik.com/premium-photo/portrait-young-asian-businesswoman-beautiful-charming-smiling-sitting-working-office-look-camera_37714-814.jpg"
  },
  {
    pay: "$58/hr",
    name: "Mohit Arora",
    role: "Dashboard Designer",
    tag1: "Dashboard",
    tag2: "Data",
    tag3: "UI",
    tag4: "+4",
    intro: "Dashboard designer simplifying complex data into clean readable and actionable user friendly interfaces.",
    img:"https://img.freepik.com/premium-photo/face-profile-vision-with-man-studio-gray-background-with-space-future-planning-ideas-mockup-thinking-with-serious-business-person-contemplation-problem-solving-job_590464-391511.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    pay: "$47/hr",
    name: "Emily White",
    role: "No Code Designer",
    tag1: "Webflow",
    tag2: "NoCode",
    tag3: "UI",
    tag4: "+3",
    intro: "No code designer building fast scalable websites without code using modern visual development tools.",
    img:"https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    pay: "$62/hr",
    name: "Rahul Nair",
    role: "SaaS Product Designer",
    tag1: "SaaS",
    tag2: "Product",
    tag3: "UX",
    tag4: "+6",
    intro: "SaaS designer building complex platforms with scalable components smooth workflows and business focused design.",
    img:"https://t4.ftcdn.net/jpg/05/50/45/65/360_F_550456541_mMBkyPx1G6XtqPYrT8mG12O8Uz5XBTCZ.jpg"
  },
  {
    pay: "$35/hr",
    name: "Neha Malhotra",
    role: "Design Intern",
    tag1: "UI",
    tag2: "UX",
    tag3: "Learning",
    tag4: "+2",
    intro: "Design intern exploring UI UX fundamentals learning tools and building strong design foundations.",
    img:"https://img.freepik.com/free-photo/young-businesswoman-working-computer-outside-cafe_1303-18771.jpg?semt=ais_hybrid&w=740&q=80"
  }
];

  return(
    <div className='parent'>
     {Data.map((item,index)=>{
      return(
        <Card  pay={item.pay} name={item.name} role={item.role} tag1={item.tag1} tag2={item.tag2} tag3={item.tag3} tag4={item.tag4} intro={item.intro} img={item.img} />
      )
     })}
    </div>
  )
}
export default App;