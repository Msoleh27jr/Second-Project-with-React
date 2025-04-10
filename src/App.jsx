import React from 'react'
import './App.css'
import logo from './assets/Group (1).png'
import imgFirstSection from './assets/Group.png'
import overThouthenMembers from './assets/Group 5 (1).png'
import trustPilot from './assets/Group (2).png'
import imgThirdSection from './assets/Group (3).png'
import NetflixImg from './assets/Group (4).png'
import YouTubeImg from './assets/Group (5).png'
import PrimeVideo from './assets/Group (6).png'
import hbo from './assets/Group (7).png'
import fourImg from './assets/Group (8).png'
import fiveImg from './assets/Group (9).png'
import Elips from './assets/Ellipse 14 (Stroke).png'
import noLimit from './assets/No Limit.png'
import fastVPN from './assets/Fastest VPN.png'
import policy from './assets/Policy.png'
import doubleDot from './assets/Group (10).png'
import selenaImg from './assets/Mask Group (5).png'
import startImg from './assets/image.png'
import seventhImg from './assets/Group (11).png'
import drownArrow from './assets/Down Arrow.png'
import farm from './assets/Frame (12).png'
import GroupTwo from './assets/Group 23.png'
import social from './assets/Group 25.png'

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="" />
          <ul className='headerUl'>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
          <aside>
            <button className='logIn'>Log in</button>
            <button className='signUp'>Sign up</button>
          </aside>
        </nav>
        <section className='firstSection'>
          <aside>
            <h1>Get access to worlwide content</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <p>Start from <span className='price'>$2.99</span> / month</p>
            <button className='getStartedBtn'>Get Started</button>
            <p className='moneyBack'>* 30-Days money back gurantee</p>
          </aside>
          <img className='firstSectionImg' src={imgFirstSection} alt="" />
        </section>
      </header>
      <section className='secondSecond'>
        <img src={trustPilot} alt="" />
        <img src={overThouthenMembers} alt="" />
        <img src={trustPilot} alt="" />
      </section>
      <section className='thirdSection'>
        <img className='imagethird' src={imgThirdSection} alt="" />
        <aside className='asideThird'>
          <h2 className='thirdH'>One gateway endless entertainment</h2>
          <p className='thirdP'>Content at the tip of your fingers! With thousands of servers and millions of IPs, you can access websites and enjoy your favourite movies, TV shows, games, and more; in over 190 countries.</p>
          <div className='iconsDiv'>
            <img src={NetflixImg} alt="" />
            <img src={YouTubeImg} alt="" />
            <img src={PrimeVideo} alt="" />
            <img src={hbo} alt="" />
          </div>
        </aside>
      </section>
      <section className='thirdSection'>
        <aside className='asideThird'>
          <h2 className='thirdH'>Putting power back into your hands</h2>
          <p className='thirdP'>Instant protection to enhance your online privacy. Browse the internet safety and anonymously.</p>
          <button className='getStrbtn'>Get Started</button>
        </aside>
        <img className='imagethird' src={fourImg} alt="" />
      </section>
      <section className='thirdSection'>
        <img className='imagethird' src={fiveImg} alt="" />
        <aside className='asideThird'>
          <h2 className='thirdH'>30 Days money back guarantee</h2>
          <p className='thirdP'>Since we trust that you will fall in love with vping, we offer our users the option to try it for 30 days. If you don’t enjoy the experience, we will give you a 100% refund.</p>
          <button className='getStrbtn'>Get Started</button>
        </aside>
      </section>
      <section className='fifthSection'>
        <h2 className='fifthSectionH'>Save big with our annual plans</h2>
        <p className='fifthP'>Sign up and save a ton! No logs. No hidden fees.</p>
        <div className='divForPrice'>
        <div className='PriceDiv'>
          <h3 className='namePlan'>Premium Plan</h3>
          <h2 className='yearFifth'>3 Years</h2>
          <h2 className='PriceValue'><span className='priceDol'>$2.99</span> / month</h2>
          <h2 className='salePrice'>$107.55<span className='sale'> $537.30</span></h2>
          <p className='buildP'>Build every 3 years</p>
          <h2 className='nameCheck'><span className='check'>ノ</span>Unlimited bandwitch</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>Encrypted connection</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>No traffic logs</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>Works on all devices</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>Instant setup</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>Torrent allowed</h2>
          <button className='submitBtn'>Subscribe</button>
        </div>
        <div className='PriceDiv'>
          <h3 className='namePlan'>Popular Plan</h3>
          <h2 className='yearFifth'>1 Years</h2>
          <h2 className='PriceValue'><span className='priceDol'>$7.59</span> / month</h2>
          <h2 className='salePrice'>$92.26<span className='sale'> $170.88</span></h2>
          <p className='buildP'>Build every years</p>
          <h2 className='nameCheck'><span className='check'>ノ</span>Unlimited bandwitch</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>Encrypted connection</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>No traffic logs</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>Works on all devices</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>Instant setup</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>Torrent allowed</h2>
          <button className='submitBtn'>Subscribe</button>
        </div>
        <div className='PriceDiv'>
          <h3 className='namePlan'>Basic Plan</h3>
          <h2 className='yearFifth'>Monthly</h2>
          <h2 className='PriceValue'><span className='priceDol'>$14.99</span> / month</h2>
          <h2 className='salePrice'>$107.55<span className='sale'> $537.30</span></h2>
          <p className='buildP'>billed monthly</p>
          <h2 className='nameCheck'><span className='check'>ノ</span>Unlimited bandwitch</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>Encrypted connection</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>No traffic logs</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>Works on all devices</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>Instant setup</h2>
          <h2 className='nameCheck'><span className='check'>ノ</span>Torrent allowed</h2>
          <button className='submitBtn'>Subscribe</button>
        </div>
        </div>
      </section>
      <section className='sixthSection'>
        <img className='elips' src={Elips} alt="" />
        <div className='premium'>
          <h2 className='premiulH'>A premium experience</h2>
          <div className='premiumDiv'>
            <div className='iconsDivSix'>
              <img src={noLimit} alt="" />
              <h3 className='noLimits'>No Limits</h3>
              <p className='limitP'>Enjoy unlimited data - nothing will stop you!</p>
            </div>
            <div className='iconsDivSix'>
              <img src={policy} alt="" />
              <h3 className='noLimits'>100% Safe</h3>
              <p className='limitP'>All your data is encrypted, keeping you safe!</p>
            </div>
            <div className='iconsDivSix'>
              <img src={fastVPN} alt="" />
              <h3 className='noLimits'>Fastest VPN</h3>
              <p className='limitP'>HD Streaming with fastest VPN,  no buffering!</p>
            </div>
            <div className='iconsDivSix'>
              <img src={policy} alt="" />
              <h3 className='noLimits'>No-Logs Policy</h3>
              <p className='limitP'>Maintain your online privacy and anonymity.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='seventhSection'>
        <div className='divForPandH'>
        <h2 className='seventhH'>The highest rated VPN</h2>
        <p className='seventhP'>Trusted and loved by our users</p>
        </div>
        <div className='flexForSeventh'>
          <div className='salinaComment'>
            <div className='comentss'>
            <img src={doubleDot} alt="" />
            <p className='CommentP'>Since we trust that you will fall in love with vping, we offer our users the option to try it for 30 days. If you don’t enjoy the experience, we will give you a 100% refund. It is a long established fact that a reader will be distracted.</p>
            </div>
            <div className='divComents'>
              <img src={selenaImg} alt="" />
              <div>
                <h2 className='nameSalina'>Salina Gomez</h2>
                <span className='dateComment'>Aug 15, 2021</span>
                <img className='starts' src={startImg} alt="" />
              </div>
            </div>
          </div>
          <img className='imgStr' src={seventhImg} alt="" />
        </div>
      </section>
      <section className='eightSection'>
        <h2 className='eightH'>Questions users are asking</h2>
        <div className='nameQuestion'>
          <div className='questionTask'>
            <h2 className='eightHSec'>Which plan is right for me?</h2>
            <img src={drownArrow} alt="" />
          </div>
          <div className='questionTask'>
            <h2 className='eightHSec'>How does your pricing work?</h2>
            <img src={drownArrow} alt="" />
          </div>
          <div className='questionTask'>
            <h2 className='eightHSec'>What if I change my mind?</h2>
            <img src={drownArrow} alt="" />
          </div>
          <div className='questionTask'>
            <h2 className='eightHSec'>Can I change my plan?</h2>
            <img src={drownArrow} alt="" />
          </div>
          <div className='questionTask'>
            <h2 className='eightHSec'>What payment methods do you accept?</h2>
            <img src={drownArrow} alt="" />
          </div>
          <div className='questionTask'>
            <h2 className='eightHSec'>Can I use my account on multiple devices?</h2>
            <img src={drownArrow} alt="" />
          </div>
          <div className='questionTask'>
            <h2 className='eightHSec'>What is the 30-days money back policy?</h2>
            <img src={drownArrow} alt="" />
          </div>
          <div className='questionTask'>
            <h2 className='eightHSec'>How can I manage my billing</h2>
            <img src={drownArrow} alt="" />
          </div>
        </div>
      </section>
      <section className='lastSection'>
        <div className='lastDiv'>
          <img src={farm} alt="" />
          <div className='divlast'>
            <h2 className='getLast'>Get what you need online, completely undetected.</h2>
            <p>30 Day money back guarantee. If you’re not 100% satisfied with vping. We’ll refund your payment. No hassle, no risk.</p>
            <img className='imagethird' src={GroupTwo} alt="" />
            <p>Start from <span className='price'>$2.99</span> / month</p>
            <button className='getStartedBtn'>Get Started</button>
          </div>
        </div>
      <footer>
        <div className='firstCon'>
          <img className='firstConImg' src={logo} alt="" />
          <p className='firstConP'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <ul className='firstss'>
          <li className='Pss'>Product</li>
          <li>Download</li>
          <li>Pricing</li>
          <li>Server</li>
          <li>VPN for Business</li>
          <li>VPN for Non-Profit</li>
        </ul>
        <ul className='firstss'>
          <li className='Pss'>Company</li>
          <li>What’s is VPN?</li>
          <li>FAQ</li>
          <li>Tuitorials</li>
          <li>About us</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className='firstss'>
          <img className='social' src={social} alt="" />
        </ul>
      </footer>
      </section>
    </div>
  )
}

export default App