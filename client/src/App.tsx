import { Switch, Route } from "wouter";
import { useState, useRef } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Ecosystem from "./pages/Ecosystem";
import Community from "./pages/Community";
import Membership from "./pages/Membership";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Disclaimer from "./pages/Disclaimer";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import GlobalSearch from "./components/GlobalSearch";
import Footer from "./components/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/ecosystem" component={Ecosystem}/>
      <Route path="/community" component={Community}/>
      <Route path="/membership" component={Membership}/>
      <Route path="/privacy-policy" component={PrivacyPolicy}/>
      <Route path="/terms-and-conditions" component={TermsAndConditions}/>
      <Route path="/disclaimer" component={Disclaimer}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const globalSearchRef = useRef<{ openSearch: () => void }>(null);

  const handleSearchOpen = () => {
    globalSearchRef.current?.openSearch();
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Navigation onSearchOpen={handleSearchOpen} />
        <main className="pt-20">
          <Router />
        </main>
        <Footer />
        <ScrollToTop />
        <GlobalSearch ref={globalSearchRef} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
