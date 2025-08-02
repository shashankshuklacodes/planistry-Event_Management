// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "../style/ServiceDetail.css";

const serviceData = {
  birthday: {
    title: "Birthday Planning",
    description: "We craft unforgettable birthday experiences tailored to your theme, age, and vision.",
    images: ["/images/bday1.webp", "/images/bday2.webp", "/images/bday3.jpg", "/images/bday4.jpg", "/images/bday5.jpg", "/images/bday6.webp", "/images/bday7.webp", "/images/bday8.webp", "/images/bday9.jpg"],
    paragraph:["Planistry turns every birthday into a vibrant celebration with personalized themes, exciting activities, and thoughtful planning. Whether it's a child’s fairytale-themed party, a teenager’s dance night, or a milestone celebration for adults, we handle everything from invitations to thank-you notes. Our team curates custom decorations, entertainment (like magicians, DJs, photo booths), gourmet food, and party favors. We also organize interactive zones, game setups, and fun stations that keep guests engaged and delighted. Parents can enjoy the moment while we take care of logistics, cake arrangements, music, safety, and cleanup. We ensure that every birthday feels special, joyful, and memorable."]

  },
  anniversary: {
    title: "Anniversary Celebration",
    description: "Celebrate lasting love with our elegant and intimate anniversary event setups.",
    images: ["/images/ann1.jpg", "/images/ann2.jpg", "/images/ann3.jpg", "/images/ann4.jpg", "/images/ann5.jpg", "/images/ann6.jpg", "/images/ann7.jpg", "/images/ann8.jpg", "/images/ann9.jpg"],
    paragraph:["At Planistry, we believe anniversaries are not just about marking time—they’re about celebrating love, commitment, and shared memories. Whether it’s your first year together or your golden jubilee, we craft unforgettable anniversary experiences tailored to your story. Our team plans everything from romantic private dinners and destination getaways to large family gatherings and themed parties. We offer venue selection, decor design, floral arrangements, live music, photo slideshows, customized cakes, and interactive guest activities. For milestone anniversaries, we also help recreate wedding day elements, organize vow renewals, and gather heartfelt messages from friends and family. Every detail—from mood lighting to custom playlists and memory walls—is thoughtfully curated to reflect the couple’s journey. We take care of logistics, catering, transportation, and guest coordination, so you can focus solely on the joy of reliving your special bond. With Planistry, your anniversary becomes a heartfelt celebration that’s as unique and beautiful as your love story."]
  },
  camping: {
    title: "Camping Trip Planning",
    description: "We organize adventurous and safe camping trips with all essentials included.",
    images: ["/images/camp1.jpg", "/images/camp2.jpg","/images/camp3.jpg","/images/camp4.jpg","/images/camp5.jpg","/images/camp6.jpg","/images/camp7.jpg","/images/camp8.jpg","/images/camp9.jpg"],
    paragraph:["Experience the thrill of the outdoors with Planistry’s expertly organized camping events. Whether you're planning a weekend escape for families, a school adventure trip, or a corporate nature retreat, we handle every detail to ensure a safe, enjoyable, and memorable experience. Our camping services include site selection in scenic locations, tent and gear setup, campfire arrangements, trekking and nature trail planning, and professional guides for group activities. We offer customizable packages with adventure sports like rock climbing, zip-lining, kayaking, or stargazing sessions under expert supervision. Hygienic meals, portable washrooms, medical kits, and 24/7 emergency support are part of our standard offerings to ensure comfort and safety. Educational workshops, team-building games, and survival skill sessions can be included for a more enriching experience. Whether you're looking for rustic wilderness or glamping luxury, Planistry brings together nature, adventure, and comfort to make your camping event unforgettable."]
  },
  corporate: {
    title: "Corporate Events",
    description: "Boost morale and build teams with our expert corporate event planning services.",
    images: ["/images/corp1.jpg", "/images/corp2.jpg", "/images/corp3.jpg", "/images/corp4.jpg", "/images/corp5.jpg", "/images/corp6.jpg", "/images/corp7.jpg", "/images/corp8.jpg", "/images/corp9.jpg"],
    paragraph:["Our corporate event planning service is crafted to align your brand goals with impactful experiences. We specialize in organizing product launches, conferences, seminars, annual meetings, team-building retreats, and awards nights. From venue logistics and tech setups to guest accommodations and high-quality catering, Planistry ensures that every detail resonates with professionalism and innovation. We work with AV teams to handle live streaming, LED walls, projection mapping, and interactive kiosks, providing a modern and engaging environment for your attendees. Our experts also assist with branding, customized gifts, feedback collection, and media coverage to help you leave a lasting impression. Whether it's an executive gathering or a large-scale expo, we blend efficiency and elegance to elevate your brand presence."]
  },
  party: {
    title: "Party Planning",
    description: "From wild parties to cozy get-togethers, we handle it all with style.",
    images: ["/images/party1.jpg", "/images/party2.jpg", "/images/party3.jpg", "/images/party4.jpg", "/images/party5.jpg", "/images/party6.jpg", "/images/party7.jpg", "/images/party8.jpg", "/images/party9.jpg"],
    paragraph:["Bring music to life with Planistry’s expert concert and live event management. Whether you're hosting a solo artist, a band festival, or a DJ night, we take care of artist coordination, stage setup, lighting, sound engineering, security, and crowd control. Our network of performers, technicians, sponsors, and media professionals allows us to create seamless, high-energy experiences for audiences of any scale. We manage licensing, ticketing, promotions, vendor stalls, emergency plans, and backstage operations. From intimate gigs to full-blown stadium events, our production team ensures that every beat, spotlight, and cheer is timed to perfection."]
  },
  wedding: {
    title: "Wedding Planning",
    description: "Elegant, detailed, and romantic wedding events that match your dreams.",
    images: ["/images/wed1.jpg", "/images/wed2.jpg"],
    paragraph:["At Planistry, we turn your dream wedding into a beautiful reality with meticulous planning and heartfelt creativity. Our wedding planning service covers every aspect of your big day—from venue selection and decoration to guest management and vendor coordination. Whether you envision an intimate ceremony or a grand destination wedding, we curate themes, manage timelines, and design experiences that reflect your unique love story. Our team works closely with couples and families to understand cultural traditions, budget preferences, and aesthetic desires. With access to top-tier photographers, caterers, designers, and entertainment providers, we ensure every moment is magical. We also handle legal formalities, RSVP tracking, seating arrangements, and last-minute contingencies, making your journey to the altar stress-free and joyful."]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return <div className="not-found">Service not found</div>;
  }

  return (
    <div className="service-detail">
      <div className="service-header">
        <h1>{service.title}</h1>
        <p>{service.description}</p> 
      </div>


      <div className="paragraph">
        <p>{service.paragraph}</p>
       </div>
   
  
      <div className="gallery">

        {service.images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`${service.title} ${index + 1}`} />
          </div>

        ))}
       
      </div>
      
     
    </div>
    
  );
};

export default ServiceDetail;
