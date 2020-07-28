import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"

//CSS
import "./custom.scss"
import "./app.scss"
import "./icons.css"

// TRANS STUFF STARTS
import { setTranslations, setDefaultLanguage } from "react-multi-lang"
import cs from "./lang/cs.json"
import en from "./lang/en.json"
// TRANS STUFF ENDS

//Components
import { Menu } from "./components"

//Pages
import { Home } from "./pages"

const App = () => {
  useEffect(() => {
    setTranslations({ cs, en })
    setDefaultLanguage("cs")
  }, [])

  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
