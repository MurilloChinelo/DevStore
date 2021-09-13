import { BrowserRouter, Switch, Route } from 'react-router-dom'


import DevStore from './pages/devstore'



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={DevStore} />
            </Switch>
        </BrowserRouter>
    )
}