import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProjectDetail from './screens/ProjectDetail';
import Home from './screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ProjectDetail} path="/project/:name" />
        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
