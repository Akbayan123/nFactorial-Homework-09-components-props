import './App.css';
import Article from './components/article.js'
import Logo from './components/logo.js'
import Footer from './components/footer.js'
import Image1 from './image/Img 1.png'
import Image2 from './image/Img 2.png'
import Image3 from './image/Img 3.png'
function App() {

  const articles = [
    {
      id: 1,
      title: "7 Practical CSS Tips",
      body: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
      src: Image1
    },
    {
      id: 2,
      title: "7 Practical CSS Tips",
      body: `Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
      You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...`,
      src: Image2
    },
      {
      id: 3,
      title: "7 Practical CSS Tips",
      body: `Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
      You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...`,
      src: Image3
      }
    ]

  return (
    <div className="App">
      <Logo />
      {
        articles.map(item=> <Article key={item.id} title={item.title} body={item.body} src={item.src}/>)
      }
      <Footer />
    </div>
  );
}

export default App;
