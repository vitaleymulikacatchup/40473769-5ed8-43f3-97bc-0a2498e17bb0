"use client"

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ThemeProvider } from '@/providers/ThemeProvider';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/8500421/pexels-photo-8500421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Group of students with backpacks entering a school building. Perfect for back-to-school themes."},
  {"id":"about-image","url":"https://images.pexels.com/photos/6503100/pexels-photo-6503100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling teacher writing on a whiteboard in a lively classroom setting with students."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Joyful businesswoman with curly hair smiling at camera while using laptop indoors."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/8500309/pexels-photo-8500309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful student enters the classroom where a teacher is seated at a desk, ready for class."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Happy young man holding papers with a laptop outdoors, showcasing academic achievement and joy."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/7692509/pexels-photo-7692509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful female teacher in a pink blazer writes 'Back to School' on a whiteboard."},
  {"id":"blog-1","url":"https://images.pexels.com/photos/34331045/pexels-photo-34331045.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hat toss during graduation"}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[{name:"Home",id:"home"},{name:"About",id:"about"},{name:"Blog",id:"blog"},{name:"Contact",id:"contact"}]}
          brandName="St Claret School"
        />
      </div>

      <div id="hero" data-section="hero" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <HeroSplit
            title="Welcome to St Claret School"
            description="Providing quality education for over 20 years."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[{text:"Learn More",href:"about"},{text:"Contact Us",href:"contact"}]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <TextSplitAbout
            title="About St Claret"
            description={["St Claret School is dedicated to nurturing lifelong learners.","Join us to be a part of a community that values excellence."]}
            buttons={[{text:"Explore",href:"about"}]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <TestimonialCardTwo
            title="What Our Community Says"
            description="Testimonials from students and teachers."
            testimonials={[
              {id:"1",name:"Sarah Johnson",role:"Student",testimonial:"The learning environment is wonderful!",imageSrc:assetMap.find(a => a.id === "testimonial-1")?.url ?? "/public/images/placeholder.webp"},
              {id:"2",name:"Michael Smith",role:"Teacher",testimonial:"I love the supportive community here.",imageSrc:assetMap.find(a => a.id === "testimonial-2")?.url ?? "/public/images/placeholder.webp"},
              {id:"3",name:"Emily Davis",role:"Student",testimonial:"A place where dreams come true.",imageSrc:assetMap.find(a => a.id === "testimonial-3")?.url ?? "/public/images/placeholder.webp"},
              {id:"4",name:"David Kim",role:"Teacher",testimonial:"Outstanding facilities and curriculum.",imageSrc:assetMap.find(a => a.id === "testimonial-4")?.url ?? "/public/images/placeholder.webp"}
            ]}
          />
        </div>
      </div>

      <div id="blog" data-section="blog" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <BlogCardOne
            title="Latest News"
            description="Stay updated with our latest events and announcements."
            blogs={[
              {id:"1",category:"Event",title:"Annual Sports Day",excerpt:"A fun-filled day with sports events and prizes.",imageSrc:assetMap.find(a => a.id === "blog-1")?.url ?? "/public/images/placeholder.webp",authorName:"John Doe",authorAvatar:assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp",date:"20 Mar 2025"}
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <ContactCenterForm
            title="Get in Touch"
            description="We'd love to hear from you. Send us a message."
            inputs={[
              {name:"name",type:"text",placeholder:"Your Name",required:true},
              {name:"email",type:"email",placeholder:"Your Email",required:true}
            ]}
            textarea={{name:"message",placeholder:"Your Message",rows:5,required:true}}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <FooterBaseReveal
            columns={[
              {title:"School",items:[{label:"About",href:"about"},{label:"Contact",href:"contact"}]},
              {title:"Community",items:[{label:"Blog",href:"blog"},{label:"Events",href:"events"}]}
            ]}
            copyrightText="© 2025 | St Claret School"
          />
        </div>
      </div>

    </ThemeProvider>
  );
}
