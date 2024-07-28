import logo from "./logo.svg";
import { useState } from "react";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <PopoverGroup>
        <Popover>
          <PopoverButton>Product</PopoverButton>
          <PopoverPanel>{/* ... */}</PopoverPanel>
        </Popover>

        <Popover>
          <PopoverButton>Solutions</PopoverButton>
          <PopoverPanel>{/* ... */}</PopoverPanel>
        </Popover>

        <Popover>
          <PopoverButton>Pricing</PopoverButton>
          <PopoverPanel>{/* ... */}</PopoverPanel>
        </Popover>
      </PopoverGroup>
    </div>
  );
}

export default App;
