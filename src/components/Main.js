import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'
import { graphql } from "gatsby"

import blog_hackathonTeam from '../images/hackathonTeam.jpg'
import about_luciaFalls from '../images/lucia.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={about_luciaFalls} alt="" /></span>
          <p>Thank you for visiting my site! I am a technologist in the Pacific Northwest. I got my start by realizing I always gravitated toward data and technical roles in any job, and later learned to automate my administrative roles.

          <br/><br/>I am also a volunteer with <a href="https://www.womenwhocode.com/portland" target="_blank">Women Who Code Portland</a>. My main focus is on making sure there are technical workshops available to attend because they were important to me in my inital journey to become a technologist.

          <br/><br/>In the time I don't spend working, Meetup-ing, or studying, I spend time being obsessed with my boarder collie. If I’m not at work or home, it’s a safe bet I’m on a motorcycle or on the water in a kayak somewhere.</p>
          {close}
        </article>

        <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Blog</h2>
          <span className="image main"><img src={blog_hackathonTeam} alt="" /></span>
          <p>I leave you with this blog, a way for me to show you how I think as I broaden my skillset and throw gasoline on my passion for building things.</p>
          
        <br/><div align='center'><span className="icon fa-tree"> </span><span className="icon fa-tree"> </span><span className="icon fa-tree"> </span></div><br/><br/>
          
          <h2>Discovery into Tech</h2>
          <p>I was getting started at a bank as an administrative assistant. Fast forward about three months, and I was sitting at my desk, determined to find a way to finish a particular task that was a time drain faster.
          <br/><br/><strong>Enter: </strong>Learning to Google better than the average bear.
          <br/><br/>I discovered the macro recorder in Excel. It made working with code that solved my real-world problems so much less intimidating. I am thankful to a coworker that helped me learn how to Google the right terms, because once I got better searching for what I needed, I was unstoppable.
          <br/><br/>When I had started with the Bank, I didn't know Excel very well. In less than a year after I started with the Bank, I had created a management scorecard that was used throughout the enterprise. When that project was taken off my hands, my boss asked me if I could think of a way to capture data at a certain point in our process. Before I left his office the gears were turning, and I put together the mock-up for a mini-app that was was later also adopted throughout the enterprise.
          <br/><br/>Later that year, I went to my first Meetup or two, then a Hackathon, and thus began the Meetup addition. Continuing to attend workshops, I learned about development and gained a more holistic feel for working with people in tech. It was official, I wanted in.</p>

        <br/><div align='center'><span className="icon fa-tree"> </span><span className="icon fa-tree"> </span><span className="icon fa-tree"> </span></div><br/><br/>

          <h2>Web Scraping With Python</h2>
          <p><strong>Tl;Dr: </strong>BeautifulSoup made this project fun! It's an amazing module.
          <br/><a href="http://www.github.com/hnsvill/webScraping" target="_blank">GitHib Repo</a>
          <br/><br/><strong>Introduction</strong>

          <br/>I was very flattered when a friend of mine that I know from somewhere different than the Portland Meetup scene came to me for help on an app she wants to build. We went out to talk and she described wanting to build an app for her own use to catalog a list of lists. Through talking, we found that we are both very passionate about the things we do. We also learned that with our likes and dislikes, we make a great team. She is a talented artist and can create visually pleasing products on an extensive selection of different media. I can compliment that with how much I like to work with data and easily excite on the utility of the things I build. I like to call it building "a thing that does a thing." After getting our roles loosely outlined, I decided my first contribution would be to provide data to get started on. It would be easier to design a database and functionalities of the site with real data to work from.

          <br/><br/><strong>Setting Goals for the Spider</strong>

          <br/>Based on the need for the spider, my goal is to put a bunch of the potential data into an Excel spreadsheet in order to look at patterns and begin to structure a database. I want to be nice to the people I am collecting data from, and I don't need to scrape tons of sites. I'm thinking I want a program that includes the following:


          <br/><br/><ol>
            <li>A robots.txt loader that checks if the site can be scraped and passes the list of directories that are disallowed to another function to make sure the program won't touch those</li>
            <li>A function to call at various points of the program that makes the crawler behave more like a human in order to avoid crashing the server - slowing the bot regardless of if robots.txt requests wait periods or not</li>
            <li>A function to of course, parse the data. I'd like it to be sent to Excel to make it easy to test and temporarily manipulate</li>
            <li>A function that sends a notification to my phone to let me know it's complete</li>
          </ol>
</p>

          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
            <Contact/>
          <ul className="icons">
            <li><a href="http://www.linkedin.com/in/hnsvill" className="icon fa-linkedin"  target="_blank"><span className="label">Facebook</span></a></li>
            <li><a href="http://www.github.com/hnsvill" className="icon fa-github" target="_blank"><span className="label">GitHub</span></a></li>
            <li><a href="http://twitter.com/hnsvill" className="icon fa-twitter"  target="_blank"><span className="label">Twitter</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main