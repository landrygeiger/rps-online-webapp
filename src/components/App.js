import React from "react";
import PageHeader from "./PageHeader";
import MainPageContentDisplay from "./MainPageContentDisplay";
import GameDisplay from "./game/GameDisplay";
import ProtectedRoute from "./ProtectedRoute";
import PlayerDashboard from "./dashboard/PlayerDashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, SignUp } from "./AuthComponents";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { SocketProvider } from "../contexts/SocketContext";


class App extends React.Component {
    render() {
        return (
            <AuthProvider>
                <Router>
                    <PageHeader />
                    <Container className="d-flex align-items-center justify-content-center"
                                style={{ minHeight: "calc(100vh - 225px", margin:"50px auto"}}>
                                { /* 125px for header, 100px for margin*/ }
                        <Switch>
                            <SocketProvider>
                                <Route path="/" exact component={MainPageContentDisplay} />
                                <Route path="/login" component={Login} exact />
                                <Route path="/signup" component={SignUp} exact />
                                <Route path="/user/:userId" component={PlayerDashboard}/>
                                <ProtectedRoute path="/game/:gameId" component={GameDisplay} />
                            </SocketProvider>
                        </Switch>
                    </Container>
                </Router>
            </AuthProvider>
        );
    }
}

export default App;