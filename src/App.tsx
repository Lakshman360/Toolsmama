import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Suspense, lazy } from "react";
import { TOOLS } from "./registry/tools";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const ToolPage = lazy(() => import("./pages/ToolPage"));
const Tools = lazy(() => import("./pages/Tools"));
const Blog = lazy(() => import("./pages/Blog"));
const CompressImages = lazy(() => import("./pages/blog/CompressImages"));
const BestPDFTools = lazy(() => import("./pages/blog/BestPDFTools"));
const Base64Encoding = lazy(() => import("./pages/blog/Base64Encoding"));
const StudentTools = lazy(() => import("./pages/blog/StudentTools"));
const MergePDF = lazy(() => import("./pages/blog/MergePDF"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tools" element={<Tools />} />
            <Route path="tools.html" element={<Tools />} />
            <Route path="tool/:id" element={<ToolPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/compress-images" element={<CompressImages />} />
            <Route path="blog/free-pdf-tools" element={<BestPDFTools />} />
            <Route path="blog/base64-encoding" element={<Base64Encoding />} />
            <Route path="blog/tools-for-students" element={<StudentTools />} />
            <Route path="blog/merge-pdf-files" element={<MergePDF />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
        <p className="text-slate-500 font-medium animate-pulse">Loading SmartConverter...</p>
      </div>
    </div>
  );
}
