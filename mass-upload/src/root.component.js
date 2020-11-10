import React from "react";
import './root.component.css';
import SearchFiles from './components/SearchFiles';

export default function Root() {
  return (
    <div className="boxContainer">
      <SearchFiles/>
    </div>
  )
}
