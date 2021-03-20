import './App.css';
import  * as AI from "react-icons/ai";
function App() {
  return (
    <div className="app">
             <div className="form">
               <div className="form__logo">
                 FEAHTED
               </div>
               <form>
                 <input type="text" placeholder="Full Name"/>
                 <input type="password" placeholder="Password" />
                 <input type="password" placeholder="Confirm Password"/>
                 <input type="email" placeholder="Email" />
                 <button onClick={(e) => {e.preventDefault()}} className="form__btn">Sign Up</button>
               </form>
             <div className="form__sign">Have an account?<a href="#">Sign In</a></div>
             <div className="form__social">
               <div className="social__title">
                 or you can sign in with
               </div>
               <div className="social__items">
                 <a href="#"><AI.AiFillGithub/></a>
                 <a href="#"><AI.AiFillGoogleCircle/></a>
                 <a href="#"><AI.AiFillFacebook/></a>
               </div>
             </div>
             </div>
    </div>
  );
}

export default App;
