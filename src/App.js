import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';  // hoặc './App.css' tùy vào file bạn đã thêm
import myRoutes from './routes';
import { Toaster } from "react-hot-toast";

 class App extends Component {
  render() {
    return (
        <Router>
             <div>
             <Toaster position="top-center" reverseOrder={false} />
                {/*routes here */}
                <Routes>
                    {this.showContent(myRoutes)};
                </Routes>
                {/* <Button color="blue">Click Me</Button> */}
            </div>
      </Router>
    )
  }
  showContent = (routes) => {
    var result = null;
    if(routes.length > 0){
        result = routes.map((route, index) => {
            if(route.routeChild){    
              return <Route
                key={index}
                path={route.path}
                element={route.main()} >
                    {this.showContent(route.routeChild)}
                  </Route>
            }
            return <Route
                key={index}
                path={route.path}
                element={route.main()} />
           
        });
    }
    

    return result;
  }
}


export default App;