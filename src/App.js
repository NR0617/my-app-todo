import React, { useState } from "react";
import Nav from "./components/Nav";
import TodoList from "./pages/TodoList";
import InputPage from "./pages/InputPage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initialState } from "./assets/state";

function App() {
    const [schedule, setSchedule] = useState(initialState);

    return (
        <Router>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <TodoList
                            setSchedule={setSchedule}
                            schedule={schedule}
                        />
                    }
                />
                <Route
                    path="/input"
                    element={
                        <InputPage
                            setSchedule={setSchedule}
                            schedule={schedule}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
