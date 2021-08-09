import React,{useState, useEffect} from 'react'
import './portfolio.scss'
import PortfolioList from '../PortfolioList/PortfolioList'
import {featuredPortfolio, reactPortfolio, nodePortfolio, tailwindPortfolio, elementaryPortfolio} from '../../data'

const Portfolio = () => {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured", 
            title:"Pinned"
        },
        {
            id: "reactjs", 
            title:"React"
        },
        {
            id: "nodejs", 
            title:"NodeJS"
        },
        {
            id: "tailcss", 
            title:"Tailwind"
        },
        {
            id: "elementary", 
            title:"HTML/CSS/JS"
        },
    ]

    useEffect(() => {
        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
                case "reactjs":
                    setData(reactPortfolio);
                    break;
                    case "nodejs":
                        setData(nodePortfolio);
                        break;
                        case "tailcss":
                            setData(tailwindPortfolio);
                            break;
                            case "elementary":
                                setData(elementaryPortfolio);
                                break;
                                default:
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
          <h1>Featured</h1>
          <ul>
              {
                  list.map((item) => (
                      <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                      ))
              }
          </ul>
          <div className="container">
              {data.map((d) => (
                  <div className="item">
                  <img src={d.img} alt="covid-19 vaccine" />
                  <h3>{d.title}</h3>
                  {/* <a href={d.visit}>Demo</a> */}
              </div>
              ))}
                 
          </div>
        </div>
    )
}

export default Portfolio
