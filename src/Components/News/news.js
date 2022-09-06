import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../Acceuil/NavBar/NavBar'
import Card from '../Acceuil/SecondSection/Card/Card'
import { lastsNews } from './data/data'
import ReadMore from './modal/readMore'
import "./news.css"
import franceD from "./assets/icons/france.ico"

export const newsContext=React.createContext();

export default function News() {
    const [country,setCountry] = useState("us")
    const [news,setNews] = useState([])
    const [readMore,setReadMore]=useState({})
    useEffect(()=>
    {
        fetch("https://newsapi.org/v2/top-headlines?country="+country+"&category=health&apiKey=08ef44916cfb4d77abd95ae17073ffa3")
        .then(res => {
            res.json().then(data => {
                setNews(data.articles)
                
            })
        })
    },[])
    useEffect(()=>
    {
        fetch("https://newsapi.org/v2/top-headlines?country="+country+"&category=health&apiKey=08ef44916cfb4d77abd95ae17073ffa3")
        .then(res => {
            res.json().then(data => {
                setNews(data.articles)
                sessionStorage.setItem("data",JSON.stringify(data.articles) )
            })
        })
    },[country])
    function handleChangeCountry(e)
    {
        setCountry(e)
    }

    
    function getData(data)
    {
        setReadMore(news[data.btnId])
    }

  return (
    <>
    
    <div className='container news-container'>
        <div className='row'>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-5 lastes-News-brand'>
                        <h2><strong>Lastes News</strong></h2>
                    </div>
                    <div className='col select-country-news'>
                        <select className='form-select text-center' onChange={e => handleChangeCountry(e.target.value)} id='select-country-news' name='select-country-news'>
                            <option value="us"><strong>United States</strong></option>
                            <option value="eg"><strong>Egypt</strong></option>
                            <option value="fr"><strong>France</strong></option>
                            <option value="de"><strong>Germany</strong></option>
                            <option value="it"><strong>Italy</strong></option>
                            <option value="sa"><strong>Saudi Arabia</strong></option>
                            <option value="tr"><strong>Turkey</strong></option>
                            

                        </select>
                    </div>
                </div>
                <div className='row '>
                       {news.map((item,index) => {
                        return <div className='col-lg-3 col-md-6 col-sm-12  news-cards-list d-flex'> <Card key={index} title={item.title} description={item.description} urlToImage={item.urlToImage} btnId={index} getData={getData} /> </div>
                       })}
                </div>
            </div>
        </div>
    </div>
    <ReadMore data={readMore} />
    </>
  )
}
