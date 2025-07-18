import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Accommodations from "./pages/Accommodations";
import BoysAccommodations from "./pages/BoysAccommodations";
import GirlsAccommodations from "./pages/GirlsAccommodations";
import AccommodationDetail from "./pages/AccommodationDetail";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import NavrangpuraPG from "./pages/NavrangpuraPG";
import VaishnodevicirclePG from "./pages/VaishnodevicirclePG";
import StXaviersCollegePG from "./pages/StXaviersCollegePG";
import GLSUniversityPG from "./pages/GLSUniversityPG";
import NirmaUniversityPG from "./pages/NirmaUniversityPG";
import KarnavatiUniversityPG from "./pages/KarnavatiUniversityPG";
import UvarsadPG from "./pages/UvarsadPG";
import AdaniUniversityPG from "./pages/AdaniUniversityPG";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route path="/boys-accommodations" element={<BoysAccommodations />} />
            <Route path="/girls-accommodations" element={<GirlsAccommodations />} />
            <Route path="/accommodations/:slug" element={<AccommodationDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/navrangpura-pg-accommodation" element={<NavrangpuraPG />} />
            <Route path="/vaishnodevi-circle-student-housing" element={<VaishnodevicirclePG />} />
            <Route path="/pg-near-st-xaviers-college" element={<StXaviersCollegePG />} />
            <Route path="/student-accommodation-gls-university" element={<GLSUniversityPG />} />
            <Route path="/pg-near-nirma-university" element={<NirmaUniversityPG />} />
            <Route path="/karnavati-university-student-housing" element={<KarnavatiUniversityPG />} />
            <Route path="/uvarsad-pg-accommodation" element={<UvarsadPG />} />
            <Route path="/adani-university-student-accommodation" element={<AdaniUniversityPG />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
