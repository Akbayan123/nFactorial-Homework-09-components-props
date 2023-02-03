import './article.css';
import Avatar from "./avatar.png"

function Posts(props) {
    console.log(props);
    return (
        <div id="Newslist">
          <div className="news">
            <div className="news-text">
               <div className="infotop">
               <img src={Avatar} alt=""/>
                 <p className="name">Authors name</p>
                 <p className="data">in</p>
                 <p className="name">Topics name ·</p>
                 <p className="data">7 july</p>
              </div>
              <div className="text">
                <p id="title">{props.title}</p> 
                <p id="body">{props.body}</p>
             </div>
             <div className="infobottom">
                <button>Java Script</button>
                <p>12 min read</p>
                <p>·</p>
                <p>Selected for you</p>
            </div>
          </div>
          <img id='news-img' src={props.src} alt=""/>
        </div>
        <hr />
       </div>
    )
}

export default Posts;