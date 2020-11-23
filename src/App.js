import React, { Component } from 'react';
import userSolid from './user-solid.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

// 03519F

function App() {
  let posts = 'test'
  
  return (
    <div className="App">
      <div className="blueNav">
        <div className="projectName"> 
          <li><b><a href="">Stone Manager</a></b></li>
          <li><b><a href="">내 정보</a></b></li>
        </div>
        <div className="myPage">
          <a href=""><img src = {userSolid} className="userImg" /></a>
          <li><b><a href="">마이 페이지</a></b></li>
          <li><b><a href="">로그아웃</a></b></li>
        </div>
      </div> 

      <div className="myProfile">
        <hr></hr>
        <h4>{ posts }</h4>
        <button className="btn btn-primary">Click</button>

      </div>

    </div>
  );
}



export default App;





