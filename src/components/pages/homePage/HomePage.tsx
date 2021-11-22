import React from "react";
import ProjectHealthSummary from "../../widgetsUI/projectHealthSummary/ProjectHealthSummary";

const HomePage: React.FC = () => {
  return (
    <>
      <ProjectHealthSummary />
      <h1>Features</h1>
      <h2>React Demo</h2>
      <p>React demo featuring preferred application architecture and approach to codling to create a maintainable enterprise application</p>
      <ul>
        <li>Dynamic css themes</li>
        <li>No third party frameworks, keeping code simple to follow</li>
        <li>Code splitting</li>
        <li>Strongly Typed contexts</li>
        <li>Command based context updates</li>
        <li>Repository extracted from component</li>
        <li>Loosely coupled ui components using context to pass data</li>
        <li>Strongly typed routes</li>
        <li>Multi Level Routing</li>
        <li>Low code components</li>
        <li>All models strongly typed</li>
        <li>Simple Pages composed of reusable components</li>
        <li>Shared Layouts</li>
        <li>Reusable Components</li>
        <li>Example UI Components such as panels, pagination, tags, ratings, navigation, theme selectors</li>
        <li>No Magic strings</li>
        <li>Examples of function factories (sorting)</li>
        <li>No CSS in pages for cleaner code</li>
        <li>Experimental navigation using state context, adding in browser url later using a single custom hook</li>
      </ul>
    </>
  );
};

export default HomePage;
