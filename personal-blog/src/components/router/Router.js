import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import Blog from "../blog/Blog";
import PostDetails from "../blog/PostDetails";
import Albums from "../albums/Albums"
import Projects from "../projects/Projects";
import Recipes from "../recipes/Recipes";
import Travel from "../travel/Travel";

export default function Router() {
  return (
    <div className="content">
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/postdetails/:id" component={PostDetails} />
      <Route path="/albums" component={Albums} />
      <Route path="/projects" component={Projects} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/travel" component={Travel} />
    </div>
  );
}
