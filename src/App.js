import './App.css';
import logo from './images/female-daily-logo.png';
import profile from './images/Profile.png';
import React, { useEffect, useState } from 'react';
import user from './images/user.png';
import star from './images/Star.png';
import star1 from './images/Star-1.png';
import popular from './images/popular.png';
import userIcon from './images/user-icon.png';
import menu from './images/menu-icon.png';
import message from './images/message-icon.png';
import video from './images/videos.png';
import google from './images/google-play.png'
import appStore from './images/app-store.png'

function App() {
  const [editor, setEditor] = useState([]);
  const [articles, setArticles] = useState([]);
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp');
      const data = await res.json();

      setEditor(data["editor's choice"]);
      setArticles(data["latest articles"])
      setReview(data["latest review"])
    }
    fetchData();
  }, []);

  const rating = (rate) => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        result.push(<img src={star} alt="" key={i} />)
      } else {
        result.push(<img src={star1} alt="" key={i} />)
      }
    }

    return (
      <div className="star">
        {result}
      </div>
    )
  }

  const next = document.getElementById('next');
  const previous = document.getElementById('previous');
  const slide = document.getElementsByClassName('slide');
  const pagi = document.getElementsByClassName('page');

  const [page, setPage] = useState(0);

  const nextPage = (page) => {
    for (let i of slide) {
      if (page === 0) {
        i.style.left = "0px";
        next.style.opacity = '1';
      }
      if (page === 1) {
        i.style.left = "-1300px";
        next.style.opacity = '0.5';
        previous.style.opacity = '1';
        pagi[0].style.opacity = '0.5';
        pagi[1].style.opacity = '1';
      }
      if (page > 1) { setPage(1) }
    }
  }

  const previousPage = (page) => {
    for (let i of slide) {
      if (page === 0) {
        i.style.left = "0px";
        next.style.opacity = '1';
        previous.style.opacity = '0.5';
        pagi[0].style.opacity = '1';
        pagi[1].style.opacity = '0.5';
      }
      if (page === 1) {
        i.style.left = "-1300px";
        next.style.opacity = '0.5';
        previous.style.opacity = '1';
      }
      if (page < 0) { setPage(0) }
    }
  }

  return (
    <>
      {/* NAVBAR START */}
      <section>
        <div className="navbar-wrap">
          <div className="navbar-container">
            <div className="navbar-brand">
              <button id="hamburger" name="hambuger" type="button" className="">
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
              </button>
              <img src={logo} alt="Female Daily" />
            </div>
            <input type="text" placeholder="Search products, articles, topics, brands, etc" />
            <button>
              <img src={profile} alt="" />
              LOGIN/SIGNUP
            </button>
          </div>
        </div>
        <div className="navbar-content">
          <h4>SKINCARE</h4>
          <h4>MAKE UP</h4>
          <h4>BODY</h4>
          <h4>HAIR</h4>
          <h4>FRAGRANCE</h4>
          <h4>NAILS</h4>
          <h4>TOOLS</h4>
          <h4>BRANDS</h4>
        </div>
      </section>
      {/* NAVBAR END */}

      {/* ADS START */}
      <section>
        <div className="top-frame">
          <h1>TOP FRAME 970X50</h1>
        </div>
        <div className="billboard">
          <h1>BILLBOARD 970X250</h1>
        </div>
      </section>
      {/* ADS END */}

      {/* EDITOR CHOICE START */}
      <section>
        <div className="container">
          <h1>Editor's Choice</h1>
          <h3>Curated with love</h3>
          <div className="editor-wrap">

            {editor.map((el, i) => (
              <div className="editor-content" key={i}>
                <div className="editor-user">
                  <div className="user">
                    <img src={user} alt="" />
                  </div>
                  <div className="text-user">
                    <h4>{el.editor}</h4>
                    <h5>{el.role}</h5>
                  </div>
                </div>

                <img src={el.product.image} alt="" />
                <div className="rating">
                  <h3>{el.product.rating}</h3>
                  {rating(Math.round(el.product.rating))}
                </div>
                <h3 style={{ marginBottom: "5px" }}>{el.product.name}</h3>
                <h3 style={{ fontWeight: "600" }}>{el.product.description}</h3>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* EDITOR CHOICE END */}

      {/* BANNER START */}
      <section>
        <div className="banner-container">
          <div className="banner-text">
            <div className="banner-text-wrap">
              <h1>Looking for products that are just simply perfect for you?</h1>
              <h3>Here are some products that we believe match your skin, hair, and body! Have we mentioned that they solve your concerns too?</h3>
              <button>See My Matches</button>
            </div>
          </div>

          <div className="editor-content no-border">
            <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
            <h4>Match Skin Type</h4>
            <div className="rating">
              <h3>4.9</h3>
              <div className="star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <p>(7)</p>
              </div>
            </div>
            <h3 style={{ marginBottom: "5px" }}>JUICE BEAUTY</h3>
            <h3 style={{ fontWeight: "600" }}>Phyto-Pigments Flawless Serum</h3>
            <h3 style={{ fontWeight: "600", opacity: "0.5" }}>Rosy Beige</h3>
          </div>
          <div className="editor-content no-border">
            <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
            <h4>Match Skin Type</h4>
            <div className="rating">
              <h3>4.9</h3>
              <div className="star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <p>(7)</p>
              </div>
            </div>
            <h3 style={{ marginBottom: "5px" }}>JUICE BEAUTY</h3>
            <h3 style={{ fontWeight: "600" }}>Phyto-Pigments Flawless Serum</h3>
            <h3 style={{ fontWeight: "600", opacity: "0.5" }}>Rosy Beige</h3>
          </div>
          <div className="editor-content no-border">
            <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
            <h4>Match Skin Type</h4>
            <div className="rating">
              <h3>4.9</h3>
              <div className="star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <p>(7)</p>
              </div>
            </div>
            <h3 style={{ marginBottom: "5px" }}>JUICE BEAUTY</h3>
            <h3 style={{ fontWeight: "600" }}>Phyto-Pigments Flawless Serum</h3>
            <h3 style={{ fontWeight: "600", opacity: "0.5" }}>Rosy Beige</h3>
          </div>
        </div>
      </section>
      {/* BANNER END */}

      {/* INTERNAL CAMPAIGN ONLY */}
      <section>
        <div className="billboard">
          <div style={{ textAlign: "center" }}>
            <h1>Horizontal 970X250</h1>
            <h1>Internal campaign only</h1>
          </div>
        </div>
      </section>
      {/* INTERNAL CAMPAIGN ONLY */}

      {/* LASTEST ARTICLES START */}
      <section>
        <div className="container">
          <h1>Latest Articles</h1>
          <div className="articles-head">
            <h3>So you can make better purchase decision</h3>
            <h4>See more {'>'}</h4>
          </div>

          <div className="articles-wrap">
            {articles.map((el, i) => (
              <div className="articles-content" key={i}>
                <img src={el.image} alt="" />
                <div className="articles-text">
                  <h2>{el.title}</h2>
                  <h4>{el.author} | <span>{el.published_at}</span></h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* LASTEST ARTICLES END */}

      {/* LATEST REVIEWS START */}
      <section>
        <div className="container reviews-container">
          <div className="reviews">
            <div>
              <h1>Latest Reviews</h1>
              <div className="articles-head">
                <h3>So you can make better purcase decision</h3>
                <h4>See more {'>'}</h4>
              </div>
            </div>
          </div>

          <div className="reviews">

            <div className="reviews-wrap">
              {reviews.map((el, i) => (
                <div className="review-content" key={i}>
                  <div className="review-content-head">
                    <img src={el.product.image} alt={el.product.desc} />
                    <div>
                      <h3>{el.product.desc}</h3>
                      <h3 style={{ fontWeight: "500" }}>{el.product.name}</h3>
                    </div>
                  </div>

                  <div className="review-content-body">
                    <div className="review-rating">
                      {rating(el.star)}
                      <p>2 hours ago</p>
                    </div>
                    <p>{el.comment}... <span>Read more</span></p>
                  </div>

                  <div className="review-user">
                    <div className="review-user-text">
                      <img src={user} alt="" />
                      <h3>{el.user}</h3>
                      <h5>{el.profile.join(', ')}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mr2">
              <h1>MR2 300x250</h1>
            </div>
          </div>
        </div>
      </section>
      {/* LATEST REVIEWS END */}

      {/* POPULAR GROUP START */}
      <section>
        <div className="container">
          <h1>Popular Groups</h1>
          <div className="articles-head">
            <h3>Where the beauty TALK are</h3>
            <h4>See more {'>'}</h4>
          </div>

          <div className="popular-wrap">
            <div className="popular-content">
              <img src={popular} alt="" />
              <h2>Embrace the Curl</h2>

              <div className="popular-detail">
                <img src={userIcon} alt="" />
                <img src={menu} alt="" />
                <img src={message} alt="" />
              </div>

              <h3>May our curls pop and never stop!</h3>
            </div>

            <div className="popular-content">
              <img src={popular} alt="" />
              <h2>Embrace the Curl</h2>

              <div className="popular-detail">
                <img src={userIcon} alt="" />
                <img src={menu} alt="" />
                <img src={message} alt="" />
              </div>

              <h3>May our curls pop and never stop!</h3>
            </div>

            <div className="popular-content">
              <img src={popular} alt="" />
              <h2>Embrace the Curl</h2>

              <div className="popular-detail">
                <img src={userIcon} alt="" />
                <img src={menu} alt="" />
                <img src={message} alt="" />
              </div>

              <h3>May our curls pop and never stop!</h3>
            </div>

            <div className="popular-content">
              <img src={popular} alt="" />
              <h2>Embrace the Curl</h2>

              <div className="popular-detail">
                <img src={userIcon} alt="" />
                <img src={menu} alt="" />
                <img src={message} alt="" />
              </div>

              <h3>May our curls pop and never stop!</h3>
            </div>
          </div>
        </div>
      </section>
      {/* POPULAR GROUP END */}

      {/* LATEST VIDEOS START */}
      <section>
        <div className="container">
          <h1>Latest Video</h1>
          <div className="articles-head">
            <h3>Watch and learn, ladies</h3>
            <h4>See more {'>'}</h4>
          </div>

          <div className="video-wrap">
            <img src={video} alt="" />
            <div className="video-content">
              <img src={video} alt="" />
              <img src={video} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* LATEST VIDEOS END */}

      {/* TRENDING START */}
      <section>
        <div className="container trending-container">
          <h1>Trending This Week</h1>
          <h3>See our weekly most reviewed products</h3>

          <div className="trending-wrap">
            <div className="slider">

              <div className="slide">
                <div className="editor-content no-border">
                  <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
                  <div className="rating">
                    <h3>4.9</h3>
                    <div className="star">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <p>(7)</p>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: "5px" }}>SKINCEUTICALS</h3>
                  <h3 style={{ fontWeight: "600px" }}>C E Ferulic</h3>
                  <h3 style={{ fontWeight: "600px", opacity: "0.5" }}>Rosy Beige</h3>
                </div>
              </div>

              <div className="slide">
                <div className="editor-content no-border">
                  <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
                  <div className="rating">
                    <h3>4.9</h3>
                    <div className="star">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <p>(7)</p>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: "5px" }}>SKINCEUTICALS</h3>
                  <h3 style={{ fontWeight: "600px" }}>C E Ferulic</h3>
                  <h3 style={{ fontWeight: "600px", opacity: "0.5" }}>Rosy Beige</h3>
                </div>
              </div>

              <div className="slide">
                <div className="editor-content no-border">
                  <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
                  <div className="rating">
                    <h3>4.9</h3>
                    <div className="star">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <p>(7)</p>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: "5px" }}>SKINCEUTICALS</h3>
                  <h3 style={{ fontWeight: "600px" }}>C E Ferulic</h3>
                  <h3 style={{ fontWeight: "600px", opacity: "0.5" }}>Rosy Beige</h3>
                </div>
              </div>

              <div className="slide">
                <div className="editor-content no-border">
                  <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
                  <div className="rating">
                    <h3>4.9</h3>
                    <div className="star">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <p>(7)</p>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: "5px" }}>SKINCEUTICALS</h3>
                  <h3 style={{ fontWeight: "600px" }}>C E Ferulic</h3>
                  <h3 style={{ fontWeight: "600px", opacity: "0.5" }}>Rosy Beige</h3>
                </div>
              </div>

              <div className="slide">
                <div className="editor-content no-border">
                  <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
                  <div className="rating">
                    <h3>4.9</h3>
                    <div className="star">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <p>(7)</p>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: "5px" }}>SKINCEUTICALS</h3>
                  <h3 style={{ fontWeight: "600px" }}>C E Ferulic</h3>
                  <h3 style={{ fontWeight: "600px", opacity: "0.5" }}>Rosy Beige</h3>
                </div>
              </div>

              <div className="slide">
                <div className="editor-content no-border">
                  <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
                  <div className="rating">
                    <h3>4.9</h3>
                    <div className="star">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <p>(7)</p>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: "5px" }}>SKINCEUTICALS</h3>
                  <h3 style={{ fontWeight: "600px" }}>C E Ferulic</h3>
                  <h3 style={{ fontWeight: "600px", opacity: "0.5" }}>Rosy Beige</h3>
                </div>
              </div>

              <div className="slide">
                <div className="editor-content no-border">
                  <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
                  <div className="rating">
                    <h3>4.9</h3>
                    <div className="star">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <p>(7)</p>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: "5px" }}>SKINCEUTICALS</h3>
                  <h3 style={{ fontWeight: "600px" }}>C E Ferulic</h3>
                  <h3 style={{ fontWeight: "600px", opacity: "0.5" }}>Rosy Beige</h3>
                </div>
              </div>

              <div className="slide">
                <div className="editor-content no-border">
                  <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
                  <div className="rating">
                    <h3>4.9</h3>
                    <div className="star">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <p>(7)</p>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: "5px" }}>SKINCEUTICALS</h3>
                  <h3 style={{ fontWeight: "600px" }}>C E Ferulic</h3>
                  <h3 style={{ fontWeight: "600px", opacity: "0.5" }}>Rosy Beige</h3>
                </div>
              </div>

              <div className="slide">
                <div className="editor-content no-border">
                  <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
                  <div className="rating">
                    <h3>4.9</h3>
                    <div className="star">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <p>(7)</p>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: "5px" }}>SKINCEUTICALS</h3>
                  <h3 style={{ fontWeight: "600px" }}>C E Ferulic</h3>
                  <h3 style={{ fontWeight: "600px", opacity: "0.5" }}>Rosy Beige</h3>
                </div>
              </div>

              <div className="slide">
                <div className="editor-content no-border">
                  <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" alt="" />
                  <div className="rating">
                    <h3>4.9</h3>
                    <div className="star">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <p>(7)</p>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: "5px" }}>SKINCEUTICALS</h3>
                  <h3 style={{ fontWeight: "600px" }}>C E Ferulic</h3>
                  <h3 style={{ fontWeight: "600px", opacity: "0.5" }}>Rosy Beige</h3>
                </div>
              </div>
            </div>
            <div className="navigation">
              <span id="previous" onClick={() => {
                if (page > 0) {
                  setPage(page - 1);
                  previousPage(page - 1)
                }
              }}>‹</span>
              <div className="page"></div>
              <div className="page"></div>
              <span id="next" onClick={() => {
                if (page < 1) {
                  setPage(page + 1);
                  nextPage(page + 1)
                }
              }}>›</span>
            </div>
          </div>
        </div>
      </section>
      {/* TRENDING END */}

      {/* TOP BRANDS START */}
      <div className="container">
        <h1>Top Brands</h1>
        <div className="articles-head">
          <h3>We all know and love</h3>
          <h4>See more {'>'}</h4>
        </div>

        <div className="brands">
          {/* NIVEA */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="24.5" style={{ fill: "#0032a0" }}></circle><path d="M13.828,20.722h-2.1v4.457c-1.84-1.65-3.676-3.3-5.561-4.947v9.046h2.1V24.821c1.752,1.555,3.633,3.3,5.562,4.947Zm4.657,8.553h-2.1V20.722h2.1Zm5.443.49c-1.488-2.8-2.978-6.017-4.466-9.046h2.364l2.1,4.634,2.022-4.634h2.316c-1.442,3.037-2.888,6.242-4.333,9.049Zm10.977-7.174H31.351v1.476h3.558v1.866H31.351V27.4h3.558v1.866h-5.66V20.716h5.66Zm5.336-2.359c-1.445,2.852-2.89,5.927-4.335,9.046H38.1l.437-1.025h3.421l.439,1.025H44.67C43.172,26.159,41.684,23.04,40.241,20.232Zm-1.089,6.416,1.089-2.488,1.052,2.488Z" style={{ fill: "#fff" }}></path></svg>
          {/* THE BODY SOAP */}
          <img src="https://www.thebodyshop.co.id/media/Window_2020/The_Body_Shop.png" alt="" />

          {/* INNISFREE */}
          <img src="https://www.innisfree.com/id/id/resources/images/renewal/header_logo.svg" alt="" style={{ width: "150px" }} />

          {/* MAYBELINE */}
          <img src="https://scontent.fcgk22-1.fna.fbcdn.net/v/t1.18169-9/13707640_1175862065767179_593571965999535645_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEVYGNPjDoMbPxz9cmHZ67EcnH_WEsXofFycf9YSxeh8bYK6CHArrrUAL2B2exqNFRTGca8owV3PDT2swvUQn1Q&_nc_ohc=FnbJ9w5pUYgAX9op4Re&_nc_ht=scontent.fcgk22-1.fna&oh=00_AT9HGqJTvL790EK5lBUTm-zqetkeB1aZViGet3Zy1R0WEw&oe=62EB47CC" alt="" style={{ width: "200px" }} />

          {/* THE ORDINARY */}
          <div style={{ cursor: "pointer" }}>
            <h2 style={{ fontWeight: "600" }}>The</h2>
            <h1>Ordinary.</h1>
          </div>
        </div>

        <div className="female-daily">
          <h2>Female Daily - Find everything you want to know about beauty on Female Daily</h2>
          <h3>Product Reviews, Tips {'&'} Tricks, Expert and Consumer Opinions, Beauty Tutorial, Discussions, Beauty Workshops, anything! We are here to be your friendly solution to all things beauty, inside and out!</h3>
        </div>
      </div>
      {/* TOP BRANDS END */}

      {/* FOOTER START */}
      <section>
        <div className="footer-container">
          <div className="footer-wrap">
            <div className="footer-content">
              <h4>About Us</h4>
              <h4>Feedback</h4>
              <h4>Contact</h4>
            </div>
            <div className="footer-content">
              <h4>Terms & Conditions</h4>
              <h4>Privacy Policy</h4>
              <h4>Help</h4>
            </div>
            <div className="footer-content">
              <h4>Awards</h4>
              <h4>Newsletter</h4>
            </div>
            <div className="footer-download">
              <h4>Download Our Mobile App</h4>

              <div className='download'>
                <img src={appStore} alt="" />
                <img src={google} alt="" />
              </div>

              <div className="sosmed">
                <svg role="img" width='40px' fill='#3b5998' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                <svg role="img" width='40px' fill='#00acee' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                <svg role="img" width='40px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                <svg role="img" width='40px' fill='#c4302b' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </div>
            </div>
          </div>

          <div className="footer-sosmed">
            <div className="brand">
              <img src={logo} alt="" />
              <h4>Copyright Ⓒ 2015-2017 Female Daily Network • All rights reserved</h4>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER END */}
    </>
  );
}

export default App;
