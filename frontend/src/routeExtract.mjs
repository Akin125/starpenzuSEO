import App from './App';
import {Route, Routes} from "react-router-dom";

function extractRoutes(element, routes) {
    if (element.type === Routes) {
        React.Children.forEach(element.props.children, child => {
            extractRoutes(child, routes);
        });
    } else if (element.type === Route) {
        const { path, element: Component } = element.props;
        routes.push({ path, Component });
    } else if (element.props.children) {
        React.Children.forEach(element.props.children, child => {
            extractRoutes(child, routes);
        });
    }
}

function extractRoutesFromApp() {
    const routes = [];
    const appElement = <App />;
    extractRoutes(appElement, routes);
    return routes;
}

export default extractRoutesFromApp ;
