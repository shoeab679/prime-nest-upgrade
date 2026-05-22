import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ModularKitchens from "./pages/ModularKitchens";
import Wardrobes from "./pages/Wardrobes";
import TVUnits from "./pages/TVUnits";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/modular-kitchens"} component={ModularKitchens} />
      <Route path={"/wardrobes"} component={Wardrobes} />
      <Route path={"/tv-units"} component={TVUnits} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/terms-and-conditions"} component={TermsAndConditions} />
      <Route path={"terms-and-conditions"} component={TermsAndConditions} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
