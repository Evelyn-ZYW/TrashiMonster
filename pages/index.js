import Link from 'next/link';
import './index.css';
import Router from 'next/router';

function ClickIndex(){
  
  setTimeout(function(){
      Router.push("/Location");
  }, 1000)
}


const Index = () => <div>Index
  <p />
  
  <Link href="Duration"><a>Duration</a></Link>
   <Link href="Home"><a>Home Page</a></Link>
   <Link href="Location"><a>location</a></Link>
   <Link href="Category"><a>Category</a></Link>
   <Link href="Result"><a>Result</a></Link>
   <Link href="Tips"><a>Tips</a></Link>
   <Link href="Summary"><a>Summary</a></Link>
   <Link href="Tutorial"><a>Tutorial</a></Link>

</div>
 
export default Index;