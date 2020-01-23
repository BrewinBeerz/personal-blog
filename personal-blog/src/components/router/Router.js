import React from "react";
import { Route } from "react-router-dom";
import Home from "../home/Home";
import Blog from "../blog/Blog";
import Photos from "../photos/Photos";
import Projects from "../projects/Projects";
import Recipes from "../recipes/Recipes";
import Travel from "../travel/Travel";
import Arches from "../photos/Arches";
import Canyonlands from "../photos/Canyonlands";
import GrandCanyon from "../photos/GrandCanyon";

export default function Router() {
  return (
    <div className="content">
      <Route exact path="/" component={Home} />
      <Route exact path="/Blog" component={Blog} />
      <Route exact path="/Photos" component={Photos} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Recipes" component={Recipes} />
      <Route exact path="/Travel" component={Travel} />
      <Route exact path="/Arches" component={Arches} />
      <Route exact path="/Canyonlands" component={Canyonlands} />
      <Route exact path="/GrandCanyon" component={GrandCanyon} />
    </div>
  );
}
