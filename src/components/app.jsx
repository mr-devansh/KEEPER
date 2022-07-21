import React from "react";
import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import Notes from "../notes";

function App() {
 return (
 <div>
    <Header/>
    {Notes.map(noteItem=>
      (<Note
         key={noteItem.key}
         title={noteItem.title}
         content={noteItem.content}
   />
   )
)}
    <Footer/>
 </div> 
 );
}
export default App;