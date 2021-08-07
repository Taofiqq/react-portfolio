import React from 'react'
import './testimonial.scss'

const Testimonial = () => {
    const data = [
        {
          id: 1,
          name: "Qasim Abbas",
          title: "Senior IOS Developer",
          img:
            "https://qasimabbas.com/articles/wp-content/uploads/2020/12/1596454615149-150x150.png",
          icon: "assets/twitter.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Michael Wojtkiewicz",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Keith",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];
    return (
        <div className="testimonial" id="testimonial">
                <h1>Testimonials</h1>          
                <div className="container">
                    {data.map(d => (
                        <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="resource/right-arrow.png" className="left" alt="" />
                            <img className="user" src={d.img} alt="" />
                        </div>
                        <div className="center">
                           {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h3>{d.title}</h3>
                        </div>
                    </div>
                    ))}
                    
                </div>
        </div>
    )
}

export default Testimonial
