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
   <Link href="Home"><a>Home Page</a></Link><br/>
   <Link href="Duration"><a>Duration</a></Link> <br/>
   <Link href="Location"><a>location</a></Link><br/>
   <Link href="Category"><a>Category</a></Link><br/>
   <Link href="Result"><a>Result</a></Link><br/>
   <Link href="Tips"><a>Tips</a></Link><br/>
   <Link href="Summary"><a>Summary</a></Link><br/>
   <Link href="Tutorial"><a>Tutorial</a></Link>

</div>
 
export default Index;