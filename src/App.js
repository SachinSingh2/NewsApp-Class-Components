import "./App.css";
import Navbar from "./Components/Navbar";
import React, { Component } from "react";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

state = {
  progress:0
}

setProgress = (progress)=>{
  this.setState({progress:progress})
}

  render() {
    return (
      <div>
        <>
          <BrowserRouter>
          <Navbar />
           {/* <News setProgress={setProgress}setProgress-{setProgress}pageSize={6} country="in" category="general" /> */}

           <LoadingBar
           height={3}
        color='#f11946'
        progress={this.state.progress}
  
      />

            <Routes>

              <Route exact path="/general" element={<News setProgress={this.setProgress} key={'general'}  pageSize={9} country="in" category="general" />} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} key={'sports'}  pageSize={9} country="in" category="sports" />} />
              <Route exact path="/business" element={<News setProgress={this.setProgress} key={'business'} pageSize={9} country="in" category="business" />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key={'entertainment'} pageSize={9} country="in" category="entertainment" />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress} key={'health'} pageSize={9} country="in" category="health" />} />
              <Route exact path="/Technology" element={<News setProgress={this.setProgress} key={'Tech'} pageSize={9} country="in" category="Technology" />} />
              <Route exact path="/science" element={<News setProgress={this.setProgress} key={'science'} pageSize={9} country="in" category="science" />} />
               
            </Routes>
          </BrowserRouter>
        </>
      </div>
    );
  }
}
