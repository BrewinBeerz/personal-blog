import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import Blog from "../blog/Blog";
import PostDetails from "../blog/PostDetails";
import Photos from "../photos/Photos";
import Projects from "../projects/Projects";
import Recipes from "../recipes/Recipes";
import Travel from "../travel/Travel";
import Arches from "../photos/albums/Arches";
import Canyonlands from "../photos/albums/Canyonlands";
import GrandCanyon from "../photos/albums/GrandCanyon";

export default function Router() {
  return (
    <div className="content">
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/postdetails/:id" component={PostDetails} />
      <Route path="/photos" component={Photos} />
      <Route path="/projects" component={Projects} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/travel" component={Travel} />
      <Route path="/arches" component={Arches} />
      <Route path="/canyonlands" component={Canyonlands} />
      <Route path="/grandcanyon" component={GrandCanyon} />
    </div>
  );
}
