import { lazy } from "react";
import { 
  ImageIcon, FileText, Type, Code, Calculator, Zap, Search, Ruler, MoreHorizontal,
  FilePlus, Scissors, RotateCw, Layers, Split, FileImage, FileArchive, Hash,
  CaseSensitive, AlignLeft, SortAsc, Copy, Braces, Settings, Globe, FileJson,
  Calendar, Percent, CreditCard, Coins, Lock, QrCode, Fingerprint, Dices,
  Tag, BarChart, Link, Scale, Thermometer, Clock, Volume2, Mic, Palette, Timer,
  Binary, Square, HardDrive, Layout, Activity, ShieldCheck, Terminal, Cpu,
  Database, List, MessageSquare, Music, Video, Wind, Sun, Cloud, Newspaper,
  Quote, CheckSquare, Edit3, Image as ImageIcon2
} from "lucide-react";
import { Tool } from "../types/tool";

// This registry will eventually contain 300+ tools.
// We only include implemented tools in the 'component' field.
export const TOOLS: Tool[] = [
  // IMAGE TOOLS (40)
  {
    id: "image-compressor",
    name: "Image Compressor",
    description: "Reduce image file size with quality control.",
    category: "image",
    icon: ImageIcon,
    component: lazy(() => import("../pages/tools/ImageCompressor")),
    seoTitle: "Compress Image Online Free - ToolsMama",
    metaDescription: "Compress images online for free without losing quality. Reduce file size of JPEG, PNG, and WebP images instantly in your browser.",
    keywords: ["image compressor", "compress image online", "reduce image size", "free image compressor", "online image optimizer"],
    content: {
      whatIsIt: "The Image Compressor is a powerful online utility designed to reduce the file size of your images while maintaining the highest possible quality. In today's digital world, large image files can significantly slow down your website, leading to poor user experience and lower search engine rankings. Our Image Compressor helps you optimize your images for the web, social media, or email attachments by intelligently reducing their file size without compromising on visual clarity. It supports popular formats like JPEG, PNG, and WebP, making it an essential tool for web developers, photographers, content creators, and anyone looking to save storage space or speed up website loading times. Whether you're a professional designer or a casual user, this tool provides a simple, fast, and secure way to optimize your visual assets.",
      howItWorks: "This tool works entirely within your web browser using the HTML5 Canvas API. When you upload an image, the tool re-renders it onto a virtual canvas and then re-exports it with optimized compression settings. You can adjust the quality slider to find the perfect balance between file size and image quality. Because this process happens locally on your device, your private images are never uploaded to any server, ensuring total privacy and security. You get the optimized image instantly, without waiting for uploads or downloads to a remote server.",
      keyFeatures: ["Adjustable compression quality (10-100%)", "Real-time file size preview before downloading", "Supports popular formats like JPEG, PNG, and WebP", "100% client-side processing for maximum privacy", "Fast, secure, and completely free to use", "No installation or account required"],
      benefits: ["Saves valuable storage space on your devices and servers", "Improves website performance and page loading speed", "Faster image sharing via email, messaging apps, or social media", "Maintains privacy as no data is ever uploaded or stored", "Free to use with no limits on the number of images you can compress"],
      whenToUse: "Use this tool whenever you need to reduce the size of an image for web use, email attachments, or to save space on your hard drive. It's particularly useful for optimizing website assets to improve SEO and user experience, preparing images for social media platforms with size limits, or simply managing your personal photo collection more efficiently."
    }
  },
  {
    id: "image-resizer",
    name: "Image Resizer",
    description: "Change image dimensions easily.",
    category: "image",
    icon: Layers,
    component: lazy(() => import("../pages/tools/ImageResizer")),
    seoTitle: "Resize Image Online Free - ToolsMama",
    metaDescription: "Resize images online for free. Change image dimensions (width and height) while maintaining aspect ratio. Fast and secure browser-based tool.",
    keywords: ["image resizer", "resize image online", "change image dimensions", "free image resizer", "online photo resizer"],
    content: {
      whatIsIt: "The Image Resizer is a simple yet effective tool that allows you to change the dimensions of your images. Whether you need to shrink a large photo for a profile picture, scale an image to fit a specific layout, or prepare assets for different screen sizes, this tool provides a quick and easy way to adjust width and height without needing complex photo editing software. It's designed to be intuitive, allowing you to resize images in just a few clicks while maintaining the visual integrity of your original files.",
      howItWorks: "By utilizing the browser's built-in Canvas API, the Image Resizer redraws your image at the new specified dimensions. You can choose to maintain the original aspect ratio to prevent distortion or enter custom values for both width and height. The entire process is handled locally on your machine, meaning your images are never uploaded to a server, ensuring your privacy and security. Once resized, you can instantly download the new version of your image.",
      keyFeatures: ["Maintain aspect ratio toggle to prevent distortion", "Custom width and height input fields", "Instant live preview of resized image", "Supports multiple image formats including JPG, PNG, and WebP", "Privacy-focused local processing with no server uploads"],
      benefits: ["Perfect for meeting social media profile picture requirements", "Reduces overall file size by shrinking dimensions for faster web loading", "Easy to use for non-technical users without complex software", "No software installation or account registration required", "Completely free to use with no hidden limits"],
      whenToUse: "Use the Image Resizer when you have specific dimension requirements for an image, such as for a website banner, a social media post, a printed document, or an email signature. It's also great for reducing the footprint of high-resolution photos before sharing them online."
    }
  },
  {
    id: "jpg-to-png",
    name: "JPG to PNG",
    description: "Convert JPG images to PNG format.",
    category: "image",
    icon: FileImage,
    component: lazy(() => import("../pages/tools/JPGtoPNG")),
    seoTitle: "Convert JPG to PNG Online Free - ToolsMama",
    metaDescription: "Convert JPG images to PNG format online for free. Maintain high quality and transparency. Fast, secure, and browser-based conversion.",
    keywords: ["jpg to png", "convert jpg to png", "online image converter", "free jpg to png", "image format converter"],
    content: {
      whatIsIt: "The JPG to PNG converter is a specialized tool designed to transform your JPEG images into the PNG format. PNG is a lossless format that supports transparency, making it ideal for logos, graphics, and images that require high detail without compression artifacts. Unlike JPEG, which uses lossy compression, PNG preserves every pixel of your original image, ensuring that your graphics remain sharp and clear.",
      howItWorks: "This tool uses the browser's Canvas API to read the pixel data from your JPG file and then re-encodes it as a PNG file. Since PNG is a lossless format, the resulting image will retain all the original detail of the source JPG. The conversion happens entirely on your device, ensuring your files are never uploaded to a server, keeping your data private and secure.",
      keyFeatures: ["Lossless conversion maintaining original quality", "Supports transparency (if the source supports it)", "Fast, browser-based processing", "No file size limits", "Privacy-focused local conversion"],
      benefits: ["Better quality for graphics and text-heavy images", "Supports transparent backgrounds for web design", "Compatible with all modern web browsers", "No need to upload files to a remote server", "Completely free to use with no hidden costs"],
      whenToUse: "Use this tool when you need to convert a JPG image to PNG for use in web design, especially if you need to add transparency later, want to avoid further compression loss, or are preparing graphics for professional use."
    }
  },
  {
    id: "png-to-jpg",
    name: "PNG to JPG",
    description: "Convert PNG images to JPG format.",
    category: "image",
    icon: FileImage,
    component: lazy(() => import("../pages/tools/PNGtoJPG")),
    seoTitle: "Convert PNG to JPG Online Free - ToolsMama",
    metaDescription: "Convert PNG images to JPG format online for free. Reduce file size while maintaining good quality. Fast and secure browser-based tool.",
    keywords: ["png to jpg", "convert png to jpg", "online image converter", "free png to jpg", "reduce image file size"],
    content: {
      whatIsIt: "The PNG to JPG converter allows you to easily transform PNG images into the more compressed JPEG format. This is particularly useful for reducing the file size of large PNG images, making them easier to share and faster to load on websites.",
      howItWorks: "The tool reads your PNG file using the browser's Canvas API and exports it as a JPEG. You can often adjust the quality to find the perfect balance between file size and visual clarity. All processing is done locally in your browser.",
      keyFeatures: ["Efficient file size reduction", "Adjustable quality settings", "Fast conversion speed", "Privacy-focused processing", "Supports all modern browsers"],
      benefits: ["Significantly smaller file sizes", "Faster website loading times", "Easier to share via email or messaging apps", "No data leaves your device", "Free and easy to use"],
      whenToUse: "Use this tool when you have large PNG files that don't require transparency and you want to reduce their file size for web use or storage."
    }
  },
  {
    id: "image-rotator",
    name: "Image Rotator",
    description: "Rotate images by 90, 180, or 270 degrees.",
    category: "image",
    icon: RotateCw,
    component: lazy(() => import("../pages/tools/ImageRotator")),
    seoTitle: "Rotate Image Online Free - ToolsMama",
    metaDescription: "Rotate images online for free. Quickly rotate your photos by 90, 180, or 270 degrees. Fast, secure, and works entirely in your browser.",
    keywords: ["image rotator", "rotate image online", "flip image online", "free image rotator", "online photo rotator"],
    content: {
      whatIsIt: "The Image Rotator is a handy tool for quickly adjusting the orientation of your images. Whether you've taken a photo in portrait mode that should be landscape, or you just need to flip an image for creative reasons, this tool makes it simple to rotate images in 90-degree increments.",
      howItWorks: "Using the browser's Canvas API, the tool loads your image and applies a rotation transformation before re-rendering it. This ensures that the rotation is precise and doesn't introduce any unnecessary compression artifacts. The entire process is handled locally on your device.",
      keyFeatures: ["Rotate 90° clockwise/counter-clockwise", "Rotate 180°", "Live preview of rotated image", "Supports multiple image formats", "Privacy-first local processing"],
      benefits: ["Quickly fix orientation issues", "No need for heavy photo editing software", "Maintains original image quality", "Fast and responsive interface", "Completely free"],
      whenToUse: "Use this tool when you have images that are oriented incorrectly or when you need to quickly flip an image for a presentation, website, or social media post."
    }
  },
  {
    id: "webp-converter",
    name: "Convert WebP",
    description: "Convert images to modern WebP format.",
    category: "image",
    icon: FileImage,
    component: lazy(() => import("../pages/tools/WebPConverter")),
    seoTitle: "Convert to WebP Online Free - ToolsMama",
    metaDescription: "Convert images to WebP format online for free. Modern WebP images provide superior compression and quality for the web. Fast and secure browser-based tool.",
    keywords: ["webp converter", "convert to webp", "online webp converter", "free webp converter", "modern image format"],
    content: {
      whatIsIt: "The WebP Converter is a modern utility that transforms your traditional images (like JPG and PNG) into the highly efficient WebP format. WebP is a modern image format that provides superior lossless and lossy compression for images on the web, helping to make websites faster.",
      howItWorks: "This tool leverages the browser's native support for WebP encoding. It takes your source image, renders it to a canvas, and then exports it using the WebP format with adjustable quality settings. This conversion happens entirely within your browser.",
      keyFeatures: ["Superior compression efficiency", "Adjustable quality slider", "Supports conversion from JPG and PNG", "Fast and secure local processing", "Modern web standard"],
      benefits: ["Significantly smaller file sizes than JPG/PNG", "Faster website page loads", "Better SEO rankings due to speed", "No server-side processing required", "Free to use"],
      whenToUse: "Use this tool when you are optimizing images for a website and want to use the most modern and efficient format available to improve performance and user experience."
    }
  },

  // PDF TOOLS (30)
  {
    id: "merge-pdf",
    name: "Merge PDF",
    description: "Combine multiple PDFs into one file.",
    category: "pdf",
    icon: FilePlus,
    component: lazy(() => import("../pages/tools/MergePDF")),
    seoTitle: "Merge PDF Online Free - ToolsMama",
    metaDescription: "Merge multiple PDF files into one online for free. Easily combine PDF documents in seconds. Fast, secure, and browser-based tool.",
    keywords: ["merge pdf", "combine pdf", "join pdf files", "free pdf merger", "online pdf joiner"],
    content: {
      whatIsIt: "The Merge PDF tool is a powerful utility that allows you to combine multiple PDF documents into a single, cohesive file. This is perfect for organizing related documents, creating portfolios, or simplifying file management.",
      howItWorks: "This tool uses the `pdf-lib` library to process PDF files directly in your browser. It reads the pages from each uploaded PDF and appends them into a new document. Your sensitive documents never leave your computer, ensuring total privacy.",
      keyFeatures: ["Combine multiple PDFs easily", "Reorder files before merging", "Fast and secure local processing", "No file size limits (browser dependent)", "Privacy-focused"],
      benefits: ["Organize your documents better", "Easier to share a single file instead of many", "Saves time compared to manual merging", "Maintains document quality", "Completely free"],
      whenToUse: "Use this tool when you have several PDF files that belong together, such as chapters of a book, monthly reports, or multiple certificates that you need to submit as one document."
    }
  },
  {
    id: "split-pdf",
    name: "Split PDF",
    description: "Extract pages from your PDF file.",
    category: "pdf",
    icon: Split,
    component: lazy(() => import("../pages/tools/SplitPDF")),
    seoTitle: "Split PDF Online Free - ToolsMama",
    metaDescription: "Split PDF files online for free. Extract specific pages or split a large PDF into multiple smaller documents. Fast, secure, and browser-based tool.",
    keywords: ["split pdf", "extract pdf pages", "divide pdf", "free pdf splitter", "online pdf extractor"],
    content: {
      whatIsIt: "The Split PDF tool allows you to break down large PDF documents into smaller, more manageable files. You can choose to extract specific pages or split the entire document into individual pages.",
      howItWorks: "Using the `pdf-lib` library, this tool processes your PDF locally. It allows you to specify page ranges or individual pages to extract, and then generates new PDF files containing only those pages. No data is ever uploaded to our servers.",
      keyFeatures: ["Extract specific page ranges", "Split into individual pages", "Fast and secure local processing", "Maintain original document quality", "Privacy-first approach"],
      benefits: ["Reduce file size by removing unneeded pages", "Share only relevant parts of a document", "Easily organize large reports", "No software installation needed", "Free to use"],
      whenToUse: "Use this tool when you have a large PDF but only need a few pages from it, or when you want to separate a combined document into its original parts."
    }
  },
  {
    id: "compress-pdf",
    name: "Compress PDF",
    description: "Reduce PDF file size without losing quality.",
    category: "pdf",
    icon: FileArchive,
    component: lazy(() => import("../pages/tools/CompressPDF")),
    seoTitle: "Compress PDF Online Free - ToolsMama",
    metaDescription: "Reduce PDF file size online for free while maintaining quality. Fast, secure, and browser-based PDF compression tool.",
    keywords: ["compress pdf", "reduce pdf size", "shrink pdf", "free pdf compressor", "online pdf optimizer"],
    content: {
      whatIsIt: "The Compress PDF tool is designed to reduce the file size of your PDF documents without significantly compromising their quality. This is essential for meeting email attachment limits or saving storage space.",
      howItWorks: "This tool uses the `pdf-lib` library to optimize the internal structure of the PDF, such as compressing images and removing unnecessary metadata. All processing happens locally in your browser, ensuring your documents remain private.",
      keyFeatures: ["Efficient file size reduction", "Maintain document readability", "Fast and secure local processing", "No file size limits", "Privacy-focused"],
      benefits: ["Easier to share large PDFs via email", "Saves storage space on your device", "Improves document loading times", "No data leaves your computer", "Completely free"],
      whenToUse: "Use this tool when you have a PDF that is too large to send via email or when you want to optimize your digital archives for better storage efficiency."
    }
  },
  {
    id: "pdf-to-jpg",
    name: "PDF to JPG",
    description: "Convert PDF pages into JPG images.",
    category: "pdf",
    icon: FileImage,
    component: lazy(() => import("../pages/tools/PDFToJPG")),
    seoTitle: "Convert PDF to JPG Online Free - ToolsMama",
    metaDescription: "Convert PDF pages into high-quality JPG images online for free. Fast, secure, and browser-based PDF to image conversion.",
    keywords: ["pdf to jpg", "convert pdf to image", "pdf to jpeg", "free pdf to jpg converter", "online pdf to image"],
    content: {
      whatIsIt: "The PDF to JPG tool allows you to convert each page of a PDF document into a separate, high-quality JPG image. This is useful for sharing specific pages as images or using them in presentations.",
      howItWorks: "This tool uses `pdfjs-dist` to render PDF pages onto a canvas and then exports them as JPG images. The entire process is handled locally on your device, ensuring your documents are never uploaded to a server.",
      keyFeatures: ["Convert all pages to JPG", "High-quality image output", "Fast and secure local processing", "No file size limits", "Privacy-focused"],
      benefits: ["Easily share PDF pages as images", "Use PDF content in image-only platforms", "No software installation required", "Maintains visual integrity", "Free to use"],
      whenToUse: "Use this tool when you need to extract a page from a PDF to use as an image in a social media post, a blog, or a presentation."
    }
  },
  {
    id: "jpg-to-pdf",
    name: "JPG to PDF",
    description: "Convert JPG images into a PDF document.",
    category: "pdf",
    icon: FilePlus,
    component: lazy(() => import("../pages/tools/JPGToPDF")),
    seoTitle: "Convert JPG to PDF Online Free - ToolsMama",
    metaDescription: "Convert JPG images into a single PDF document online for free. Easily combine photos into a PDF. Fast, secure, and browser-based tool.",
    keywords: ["jpg to pdf", "convert image to pdf", "jpeg to pdf", "free jpg to pdf converter", "online image to pdf"],
    content: {
      whatIsIt: "The JPG to PDF tool allows you to combine one or more JPG images into a single PDF document. This is a great way to create digital albums, portfolios, or to package scanned documents.",
      howItWorks: "This tool uses the `jspdf` library to create a new PDF document and embed your uploaded JPG images into it. The conversion happens entirely in your browser, keeping your photos private and secure.",
      keyFeatures: ["Convert multiple JPGs to one PDF", "Adjustable page orientation", "Fast and secure local processing", "No file size limits", "Privacy-focused"],
      benefits: ["Create professional PDF documents from images", "Easier to share multiple photos as one file", "No data leaves your device", "Fast and responsive", "Completely free"],
      whenToUse: "Use this tool when you have scanned photos or documents that you want to combine into a single PDF for easy sharing or archiving."
    }
  },
  {
    id: "pdf-to-word",
    name: "PDF to Word",
    description: "Convert PDF documents into Word files.",
    category: "pdf",
    icon: FileText,
    component: lazy(() => import("../pages/tools/PDFToWord")),
    seoTitle: "Convert PDF to Word Online Free - ToolsMama",
    metaDescription: "Convert PDF documents into editable Word (.docx) files online for free. Fast, secure, and browser-based PDF to Word conversion.",
    keywords: ["pdf to word", "convert pdf to docx", "pdf to editable word", "free pdf to word converter", "online pdf to word"],
    content: {
      whatIsIt: "The PDF to Word tool allows you to transform your PDF documents into editable Microsoft Word (.docx) files. This makes it easy to modify the content of a PDF without needing specialized editing software.",
      howItWorks: "This tool uses `pdfjs-dist` to extract text from the PDF and then uses the `docx` library to generate a new Word document with that text. Note that complex layouts might not be perfectly preserved. All processing is local.",
      keyFeatures: ["Convert PDF to editable .docx", "Extract text accurately", "Fast and secure local processing", "No file size limits", "Privacy-focused"],
      benefits: ["Easily edit PDF content in Word", "Saves time retyping documents", "No software installation required", "Maintains text content", "Free to use"],
      whenToUse: "Use this tool when you have a PDF document that you need to update or repurpose and want to work with it in a familiar word processor like Microsoft Word."
    }
  },
  {
    id: "word-to-pdf",
    name: "Word to PDF",
    description: "Convert Word documents into PDF files.",
    category: "pdf",
    icon: FilePlus,
    component: lazy(() => import("../pages/tools/WordToPDF")),
    seoTitle: "Convert Word to PDF Online Free - ToolsMama",
    metaDescription: "Convert Microsoft Word (.docx) documents into PDF files online for free. Fast, secure, and browser-based Word to PDF conversion.",
    keywords: ["word to pdf", "convert docx to pdf", "word to pdf converter", "free word to pdf", "online docx to pdf"],
    content: {
      whatIsIt: "The Word to PDF tool allows you to convert your Microsoft Word (.docx) documents into the universally compatible PDF format. This ensures that your document's formatting remains consistent across all devices.",
      howItWorks: "This tool uses the `mammoth` library to convert the Word document's content into HTML/text and then uses `jspdf` to generate a PDF file. The entire conversion happens locally in your browser, ensuring your privacy.",
      keyFeatures: ["Convert .docx to high-quality PDF", "Maintain text formatting", "Fast and secure local processing", "No file size limits", "Privacy-focused"],
      benefits: ["Ensure document formatting is preserved", "Create professional-looking PDFs", "No data leaves your computer", "Fast and responsive", "Completely free"],
      whenToUse: "Use this tool when you've finished a document in Word and want to share it in a format that anyone can open and view exactly as you intended."
    }
  },
  {
    id: "pdf-lock",
    name: "Protect PDF",
    description: "Add a password to your PDF document.",
    category: "pdf",
    icon: ShieldCheck,
    component: lazy(() => import("../pages/tools/PDFLock")),
    seoTitle: "Protect PDF Online Free - ToolsMama",
    metaDescription: "Add a password to your PDF files online for free. Secure your documents with strong encryption. Fast and secure browser-based tool.",
    keywords: ["protect pdf", "password protect pdf", "encrypt pdf", "free pdf locker", "online pdf security"],
    content: {
      whatIsIt: "The Protect PDF tool allows you to add a password to your PDF documents, ensuring that only authorized individuals can open and view the content.",
      howItWorks: "This tool uses the `pdf-lib` library to apply security settings to your PDF. You specify a password, and the tool encrypts the document locally in your browser. No data is ever uploaded to a server.",
      keyFeatures: ["Add password protection", "Fast and secure local processing", "No file size limits", "Privacy-focused"],
      benefits: ["Secure your sensitive information", "Control who can access your documents", "No software installation required", "Maintains document quality", "Completely free"],
      whenToUse: "Use this tool when you have a PDF containing sensitive or private information that you need to share securely."
    }
  },
  {
    id: "pdf-unlock",
    name: "Unlock PDF",
    description: "Remove password from your PDF document.",
    category: "pdf",
    icon: Lock,
    component: lazy(() => import("../pages/tools/PDFUnlock")),
    seoTitle: "Unlock PDF Online Free - ToolsMama",
    metaDescription: "Remove password protection from your PDF files online for free. Easily unlock protected PDFs in seconds. Fast and secure browser-based tool.",
    keywords: ["unlock pdf", "remove pdf password", "decrypt pdf", "free pdf unlocker", "online pdf security"],
    content: {
      whatIsIt: "The Unlock PDF tool allows you to remove password protection from your PDF documents, making them accessible without needing to enter a password every time.",
      howItWorks: "This tool uses the `pdf-lib` library to decrypt your PDF locally in your browser. You provide the current password, and the tool generates a new, unprotected version of the document.",
      keyFeatures: ["Remove password protection", "Fast and secure local processing", "No file size limits", "Privacy-focused"],
      benefits: ["Easier access to your documents", "Remove security from files you own", "No data leaves your computer", "Fast and responsive", "Completely free"],
      whenToUse: "Use this tool when you have a password-protected PDF that you no longer need to keep secure and want to make it easier to open."
    }
  },
  {
    id: "pdf-rotate",
    name: "Rotate PDF",
    description: "Rotate all pages in your PDF document.",
    category: "pdf",
    icon: RotateCw,
    component: lazy(() => import("../pages/tools/PDFRotate")),
    seoTitle: "Rotate PDF Online Free - ToolsMama",
    metaDescription: "Rotate PDF pages online for free. Quickly rotate your PDF documents by 90, 180, or 270 degrees. Fast and secure browser-based tool.",
    keywords: ["rotate pdf", "change pdf orientation", "flip pdf pages", "free pdf rotator", "online pdf tool"],
    content: {
      whatIsIt: "The Rotate PDF tool allows you to change the orientation of all pages in your PDF document. This is perfect for fixing documents that were scanned or saved in the wrong orientation.",
      howItWorks: "This tool uses the `pdf-lib` library to adjust the rotation property of each page in your PDF. The entire process is handled locally on your device, ensuring your documents remain private.",
      keyFeatures: ["Rotate pages by 90, 180, or 270 degrees", "Fast and secure local processing", "No file size limits", "Privacy-focused"],
      benefits: ["Fix orientation issues easily", "No need for complex PDF editors", "Maintains document quality", "Fast and responsive", "Completely free"],
      whenToUse: "Use this tool when you have a PDF that is upside down or sideways and you want to fix its orientation for better readability."
    }
  },
  {
    id: "pdf-extract-pages",
    name: "Extract PDF Pages",
    description: "Extract specific pages from your PDF.",
    category: "pdf",
    icon: Scissors,
    component: lazy(() => import("../pages/tools/PDFExtractPages")),
    seoTitle: "Extract PDF Pages Online Free - ToolsMama",
    metaDescription: "Extract specific pages from your PDF files online for free. Create a new PDF with only the pages you need. Fast and secure browser-based tool.",
    keywords: ["extract pdf pages", "split pdf pages", "get pages from pdf", "free pdf extractor", "online pdf tool"],
    content: {
      whatIsIt: "The Extract PDF Pages tool allows you to select and save specific pages from a PDF document into a new file. This is useful for sharing only the relevant parts of a large document.",
      howItWorks: "This tool uses the `pdf-lib` library to copy specific pages from your source PDF into a new document. The extraction happens entirely in your browser, keeping your data private and secure.",
      keyFeatures: ["Extract specific page ranges", "Fast and secure local processing", "No file size limits", "Privacy-focused"],
      benefits: ["Share only what's necessary", "Reduce file size by extracting only needed pages", "No data leaves your computer", "Fast and responsive", "Completely free"],
      whenToUse: "Use this tool when you have a large report or document but only need to share or keep a few specific pages."
    }
  },
  {
    id: "pdf-delete-pages",
    name: "Delete PDF Pages",
    description: "Remove specific pages from your PDF.",
    category: "pdf",
    icon: Scissors,
    component: lazy(() => import("../pages/tools/PDFDeletePages")),
    seoTitle: "Delete PDF Pages Online Free - ToolsMama",
    metaDescription: "Remove specific pages from your PDF files online for free. Easily delete unwanted pages from your PDF. Fast and secure browser-based tool.",
    keywords: ["delete pdf pages", "remove pdf pages", "cut pdf pages", "free pdf deleter", "online pdf tool"],
    content: {
      whatIsIt: "The Delete PDF Pages tool allows you to remove unwanted pages from your PDF document, helping you clean up and organize your files.",
      howItWorks: "This tool uses the `pdf-lib` library to create a new PDF document that excludes the pages you've specified for deletion. The entire process is handled locally in your browser.",
      keyFeatures: ["Delete specific page ranges", "Fast and secure local processing", "No file size limits", "Privacy-focused"],
      benefits: ["Clean up your documents", "Reduce file size by removing unneeded pages", "No data leaves your device", "Fast and responsive", "Completely free"],
      whenToUse: "Use this tool when you have a PDF that contains unnecessary pages, such as blank pages, cover sheets, or irrelevant sections."
    }
  },
  {
    id: "pdf-reorder-pages",
    name: "Reorder PDF Pages",
    description: "Change the order of pages in your PDF.",
    category: "pdf",
    icon: Layers,
    component: lazy(() => import("../pages/tools/PDFReorderPages")),
    seoTitle: "Reorder PDF Pages Online Free - ToolsMama",
    metaDescription: "Change the order of pages in your PDF files online for free. Easily rearrange PDF pages in seconds. Fast and secure browser-based tool.",
    keywords: ["reorder pdf pages", "rearrange pdf pages", "sort pdf pages", "free pdf reorderer", "online pdf tool"],
    content: {
      whatIsIt: "The Reorder PDF Pages tool allows you to rearrange the sequence of pages in your PDF document, giving you full control over the document's structure.",
      howItWorks: "This tool uses the `pdf-lib` library to create a new PDF document with pages in the sequence you specify. The reordering happens entirely in your browser, ensuring your privacy.",
      keyFeatures: ["Rearrange pages easily", "Fast and secure local processing", "No file size limits", "Privacy-focused"],
      benefits: ["Organize your documents exactly how you want", "Fix out-of-order pages", "No data leaves your computer", "Fast and responsive", "Completely free"],
      whenToUse: "Use this tool when the pages in your PDF are in the wrong order and you need to rearrange them for a more logical flow."
    }
  },

  // TEXT TOOLS (40)
  {
    id: "word-counter",
    name: "Word Counter",
    description: "Live word, character, and sentence count.",
    category: "text",
    icon: Hash,
    component: lazy(() => import("../pages/tools/WordCounter")),
    seoTitle: "Word Counter Online Free - ToolsMama",
    metaDescription: "Count words, characters, and sentences online for free. Get real-time statistics for your text. Fast, secure, and easy to use.",
    keywords: ["word counter", "character counter", "sentence counter", "online word count", "free writing tool"],
    content: {
      whatIsIt: "The Word Counter is a real-time text analysis tool that provides instant statistics on your writing. It counts words, characters (with and without spaces), sentences, and paragraphs, helping you stay within specific limits.",
      howItWorks: "This tool uses JavaScript to analyze the text you type or paste into the input area. It uses regular expressions to accurately identify word boundaries, sentence endings, and paragraph breaks. The analysis happens instantly as you type.",
      keyFeatures: ["Real-time word and character count", "Sentence and paragraph counting", "Clean and simple interface", "Works instantly as you type", "Privacy-focused"],
      benefits: ["Stay within word limits for essays or articles", "Optimize social media posts for character limits", "Improve writing productivity", "No need to use heavy word processors", "Completely free"],
      whenToUse: "Use this tool whenever you are writing content that has specific length requirements, such as academic papers, blog posts, social media updates, or professional emails."
    }
  },
  {
    id: "character-counter",
    name: "Character Counter",
    description: "Count characters with and without spaces.",
    category: "text",
    icon: Type,
    component: lazy(() => import("../pages/tools/CharacterCounter")),
    seoTitle: "Character Counter Online Free - ToolsMama",
    metaDescription: "Count characters online for free. Get instant character counts with and without spaces. Perfect for social media and SEO meta tags.",
    keywords: ["character counter", "count characters", "online character count", "free character counter", "text length tool"],
    content: {
      whatIsIt: "The Character Counter is a specialized tool for tracking the exact number of characters in your text. It provides separate counts for total characters and characters excluding spaces, which is crucial for many online platforms.",
      howItWorks: "The tool uses simple JavaScript string methods to calculate the length of your input text. It dynamically updates the count as you modify the text, providing immediate feedback. All processing is done locally in your browser.",
      keyFeatures: ["Count with and without spaces", "Real-time updates", "Simple and intuitive design", "No data collection", "Fast and responsive"],
      benefits: ["Ensure social media posts fit character limits", "Optimize SEO titles and meta descriptions", "Perfect for developers and writers", "No software needed", "Free to use"],
      whenToUse: "Use this tool when you need to be precise about character counts, such as when writing Twitter posts, SMS messages, or SEO meta tags where every character matters."
    }
  },
  {
    id: "case-converter",
    name: "Case Converter",
    description: "Convert text between uppercase, lowercase, etc.",
    category: "text",
    icon: CaseSensitive,
    component: lazy(() => import("../pages/tools/CaseConverter")),
    seoTitle: "Case Converter Online Free - ToolsMama",
    metaDescription: "Convert text between uppercase, lowercase, sentence case, and more online for free. Fast, secure, and easy to use text formatting tool.",
    keywords: ["case converter", "uppercase to lowercase", "sentence case converter", "online text formatter", "free writing tool"],
    content: {
      whatIsIt: "The Case Converter is a versatile text utility that allows you to quickly change the capitalization of your text. It supports various formats including UPPERCASE, lowercase, Sentence case, Title Case, and more, saving you the time of manual retyping.",
      howItWorks: "This tool uses JavaScript's built-in string manipulation methods to transform your text. Each conversion mode applies a specific logic to the input string, such as capitalizing the first letter of each word for Title Case or converting all characters to lowercase. The transformation is instantaneous and happens entirely in your browser.",
      keyFeatures: ["Multiple conversion modes (Upper, Lower, Sentence, Title)", "One-click copy to clipboard", "Real-time transformation", "Clean and distraction-free interface", "Privacy-focused local processing"],
      benefits: ["Fixes accidental Caps Lock typing", "Easily formats titles and headings", "Saves time on manual text editing", "No data is sent to a server", "Completely free to use"],
      whenToUse: "Use this tool when you have text that is incorrectly capitalized, or when you need to quickly format a block of text for a specific purpose, such as a blog title, a social media post, or a code comment."
    }
  },
  {
    id: "remove-extra-spaces",
    name: "Remove Extra Spaces",
    description: "Clean up messy text by removing extra spaces.",
    category: "text",
    icon: AlignLeft,
    component: lazy(() => import("../pages/tools/RemoveSpaces")),
    seoTitle: "Remove Extra Spaces Online Free - ToolsMama",
    metaDescription: "Remove extra spaces, tabs, and newlines from your text online for free. Clean up messy text instantly. Fast and secure browser-based tool.",
    keywords: ["remove extra spaces", "clean text online", "text whitespace remover", "free text cleaner", "online formatting tool"],
    content: {
      whatIsIt: "The Remove Extra Spaces tool is a simple but powerful utility for cleaning up messy text. It automatically identifies and removes redundant spaces, tabs, and unnecessary newlines, leaving you with clean, well-formatted text.",
      howItWorks: "The tool uses regular expressions to scan your text for patterns of multiple whitespace characters. It replaces these patterns with a single space or removes them entirely based on the selected cleaning mode. This logic is executed locally on your device, ensuring your text remains private.",
      keyFeatures: ["Remove multiple spaces", "Remove leading and trailing whitespace", "Remove empty lines", "Instant results", "Secure and private"],
      benefits: ["Improves text readability", "Prepares text for professional documents", "Reduces file size for code or data", "No software installation needed", "Free and easy to use"],
      whenToUse: "Use this tool when you have copied text from a PDF, website, or document that has inconsistent spacing, or when you want to clean up data before processing it."
    }
  },
  {
    id: "text-sorter",
    name: "Text Sorter",
    description: "Sort lines of text alphabetically.",
    category: "text",
    icon: SortAsc,
    component: lazy(() => import("../pages/tools/TextSorter")),
    seoTitle: "Text Sorter Online Free - ToolsMama",
    metaDescription: "Sort lines of text alphabetically or numerically online for free. Organize lists, names, and data in seconds. Fast and secure browser-based tool.",
    keywords: ["text sorter", "alphabetize list", "sort lines online", "free list organizer", "online data sorter"],
    content: {
      whatIsIt: "The Text Sorter is a practical utility for organizing lists and data. It allows you to sort lines of text alphabetically (A-Z or Z-A) or numerically, making it easy to manage large sets of information.",
      howItWorks: "This tool splits your input text into an array of lines, applies a sorting algorithm, and then joins the lines back together. You can choose different sorting orders and options like case-sensitivity. All processing happens locally in your browser.",
      keyFeatures: ["Alphabetical and numerical sorting", "Ascending and descending order", "Case-sensitive sorting option", "Fast processing of large lists", "Privacy-focused"],
      benefits: ["Quickly organize names, items, or data", "Easier to find information in sorted lists", "Saves time on manual sorting", "No data leaves your device", "Completely free"],
      whenToUse: "Use this tool when you have a long list of items, names, or data points that need to be organized for better readability or further analysis."
    }
  },
  {
    id: "duplicate-remover",
    name: "Duplicate Remover",
    description: "Remove duplicate lines from your text.",
    category: "text",
    icon: Copy,
    component: lazy(() => import("../pages/tools/DuplicateRemover")),
    seoTitle: "Remove Duplicate Lines Online Free - ToolsMama",
    metaDescription: "Remove duplicate lines from your text online for free. Clean up lists and data by eliminating redundant entries. Fast and secure browser-based tool.",
    keywords: ["duplicate remover", "remove duplicate lines", "clean list online", "free data cleaner", "online text utility"],
    content: {
      whatIsIt: "The Duplicate Remover is a specialized tool for cleaning up lists and datasets. It identifies and removes identical lines of text, ensuring that each entry in your list is unique.",
      howItWorks: "The tool processes your text by splitting it into individual lines and then using a Set data structure to filter out duplicates. This ensures that only the first occurrence of each unique line is kept. The entire operation is performed locally on your machine.",
      keyFeatures: ["Remove exact duplicates", "Case-insensitive option", "Count of removed duplicates", "Fast and efficient", "Secure local processing"],
      benefits: ["Cleans up messy data and lists", "Reduces redundant information", "Saves time on manual list cleaning", "Maintains privacy as no data is uploaded", "Free to use"],
      whenToUse: "Use this tool when you have a list of emails, names, or data points that may contain redundant entries, or when you want to ensure a list has only unique items."
    }
  },

  // DEVELOPER TOOLS (40)
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description: "Format, validate, and beautify your JSON.",
    category: "developer",
    icon: Braces,
    component: lazy(() => import("../pages/tools/JSONFormatter")),
    seoTitle: "JSON Formatter & Beautifier Online Free - ToolsMama",
    metaDescription: "Format, validate, and beautify your JSON code online for free. Make messy JSON readable and easy to debug. Fast and secure browser-based tool.",
    keywords: ["json formatter", "beautify json", "json validator", "free json tool", "online developer utility"],
    content: {
      whatIsIt: "The JSON Formatter is an essential tool for developers and data analysts. It takes raw, minified, or messy JSON strings and transforms them into a beautifully formatted, indented, and readable structure, making it much easier to inspect and debug.",
      howItWorks: "This tool uses the built-in `JSON.parse()` and `JSON.stringify()` methods with custom indentation settings. It first validates that the input is a valid JSON string and then re-formats it with consistent spacing and line breaks. All processing happens locally in your browser.",
      keyFeatures: ["Beautify messy JSON", "Validate JSON syntax", "Custom indentation levels", "One-click copy to clipboard", "Privacy-focused local processing"],
      benefits: ["Makes JSON data easy to read", "Helps identify syntax errors", "Speeds up debugging and development", "No data is sent to a server", "Completely free to use"],
      whenToUse: "Use this tool when you have a minified JSON response from an API, or when you are manually creating JSON data and want to ensure it is correctly formatted and readable."
    }
  },
  {
    id: "json-minifier",
    name: "JSON Minifier",
    description: "Compress JSON code by removing whitespace.",
    category: "developer",
    icon: FileJson,
    component: lazy(() => import("../pages/tools/JSONMinifier")),
    seoTitle: "JSON Minifier Online Free - ToolsMama",
    metaDescription: "Compress and minify your JSON code online for free. Reduce file size by removing whitespace and comments. Fast and secure browser-based tool.",
    keywords: ["json minifier", "compress json", "minify json online", "free developer tool", "reduce json file size"],
    content: {
      whatIsIt: "The JSON Minifier is a utility designed to compress JSON data for production use. It removes all unnecessary whitespace, tabs, and newlines, resulting in the smallest possible file size for faster data transmission.",
      howItWorks: "The tool parses your JSON input and then re-serializes it without any indentation or extra spacing. This process ensures that the JSON remains valid while being as compact as possible. All operations are performed locally on your device.",
      keyFeatures: ["Efficient JSON compression", "Removes all unnecessary whitespace", "Fast and responsive", "Privacy-focused processing", "Supports large JSON files"],
      benefits: ["Reduces bandwidth usage", "Speeds up API response times", "Saves storage space", "No data leaves your device", "Free and easy to use"],
      whenToUse: "Use this tool when you are preparing JSON data for production environments, such as for API payloads or configuration files, where minimizing file size is important for performance."
    }
  },
  {
    id: "base64-encoder",
    name: "Base64 Encoder",
    description: "Encode text to Base64 format.",
    category: "developer",
    icon: Settings,
    component: lazy(() => import("../pages/tools/Base64Encoder")),
    seoTitle: "Base64 Encoder Online Free - ToolsMama",
    metaDescription: "Encode text to Base64 format online for free. Convert plain text to secure Base64 strings instantly. Fast and secure browser-based tool.",
    keywords: ["base64 encoder", "encode to base64", "text to base64", "free base64 tool", "online developer utility"],
    content: {
      whatIsIt: "The Base64 Encoder is a reliable utility for converting plain text into Base64 encoded strings. Base64 encoding is widely used in web development and data transmission to represent binary data in an ASCII string format.",
      howItWorks: "This tool uses the browser's built-in `btoa()` function or a custom implementation to transform each character of your input text into its corresponding Base64 representation. The encoding process is performed entirely on your device, ensuring that your data remains private.",
      keyFeatures: ["Instant Base64 encoding", "One-click copy to clipboard", "Supports special characters", "Clean and simple interface", "Privacy-focused local processing"],
      benefits: ["Easily prepare data for data URIs", "Safely transmit binary data over text-based protocols", "No software installation required", "No data is sent to a server", "Completely free to use"],
      whenToUse: "Use this tool when you need to encode text for use in HTML, CSS, or API requests that require Base64 formatted data."
    }
  },
  {
    id: "base64-decoder",
    name: "Base64 Decoder",
    description: "Decode Base64 strings back to text.",
    category: "developer",
    icon: Settings,
    component: lazy(() => import("../pages/tools/Base64Decoder")),
    seoTitle: "Base64 Decoder Online Free - ToolsMama",
    metaDescription: "Decode Base64 strings back to plain text online for free. Quickly translate Base64 encoded data. Fast and secure browser-based tool.",
    keywords: ["base64 decoder", "decode from base64", "base64 to text", "free base64 tool", "online developer utility"],
    content: {
      whatIsIt: "The Base64 Decoder is a practical tool for translating Base64 encoded strings back into their original plain text format. It's an essential utility for developers who need to inspect or recover data that has been encoded for transmission.",
      howItWorks: "The tool utilizes the browser's `atob()` function to reverse the Base64 encoding process. it takes a Base64 string and converts it back into the original sequence of characters. All decoding is performed locally in your browser.",
      keyFeatures: ["Instant Base64 decoding", "Handles standard and URL-safe Base64", "Error detection for invalid strings", "Privacy-focused local processing", "Fast and responsive"],
      benefits: ["Quickly inspect encoded data", "Recover original text from Base64 strings", "No need for command-line tools", "No data leaves your device", "Free and easy to use"],
      whenToUse: "Use this tool when you encounter a Base64 encoded string in a configuration file, API response, or source code and need to see the original text content."
    }
  },
  {
    id: "url-encoder",
    name: "URL Encoder",
    description: "Safely encode URL parameters.",
    category: "developer",
    icon: Globe,
    component: lazy(() => import("../pages/tools/URLEncoder")),
    seoTitle: "URL Encoder Online Free - ToolsMama",
    metaDescription: "Encode URL parameters online for free. Safely convert special characters for use in web addresses. Fast and secure browser-based tool.",
    keywords: ["url encoder", "encode url online", "percent encoding", "free url tool", "online developer utility"],
    content: {
      whatIsIt: "The URL Encoder is a vital tool for web developers and marketers. It converts special characters in a string into a format that can be safely transmitted over the internet as part of a URL (also known as percent-encoding).",
      howItWorks: "This tool uses the JavaScript `encodeURIComponent()` function to replace non-alphanumeric characters with their corresponding percent-encoded equivalents (e.g., a space becomes %20). The encoding happens instantly on your device.",
      keyFeatures: ["Safe URL encoding", "Supports all special characters", "Instant results", "One-click copy", "Privacy-focused"],
      benefits: ["Prevents broken links due to special characters", "Ensures correct data transmission in query strings", "No software needed", "No data is sent to a server", "Completely free"],
      whenToUse: "Use this tool when you are creating links with query parameters that contain spaces, symbols, or non-ASCII characters."
    }
  },
  {
    id: "url-decoder",
    name: "URL Decoder",
    description: "Decode URL-encoded parameters.",
    category: "developer",
    icon: Globe,
    component: lazy(() => import("../pages/tools/URLDecoder")),
    seoTitle: "URL Decoder Online Free - ToolsMama",
    metaDescription: "Decode URL-encoded parameters online for free. Convert percent-encoded strings back to readable text. Fast and secure browser-based tool.",
    keywords: ["url decoder", "decode url online", "percent decoding", "free url tool", "online developer utility"],
    content: {
      whatIsIt: "The URL Decoder is a handy utility for converting percent-encoded URL strings back into human-readable text. It's perfect for analyzing complex URLs and understanding the data being passed in query parameters.",
      howItWorks: "The tool uses the JavaScript `decodeURIComponent()` function to reverse the percent-encoding process. It replaces encoded sequences (like %20) with their original characters (like a space). All decoding is done locally in your browser.",
      keyFeatures: ["Instant URL decoding", "Handles all percent-encoded characters", "Fast and responsive", "Privacy-focused local processing", "Simple interface"],
      benefits: ["Makes complex URLs readable", "Helps debug tracking links and API requests", "No data leaves your device", "No installation required", "Free to use"],
      whenToUse: "Use this tool when you have a URL with messy query parameters and you want to see the actual values being passed."
    }
  },
  {
    id: "html-formatter",
    name: "HTML Formatter",
    description: "Beautify or minify your HTML code.",
    category: "developer",
    icon: Layout,
    component: lazy(() => import("../pages/tools/HTMLFormatter")),
    seoTitle: "HTML Formatter & Beautifier Online Free - ToolsMama",
    metaDescription: "Format and beautify your HTML code online for free. Make messy HTML readable and well-indented. Fast and secure browser-based tool.",
    keywords: ["html formatter", "beautify html", "html beautifier", "free html tool", "online developer utility"],
    content: {
      whatIsIt: "The HTML Formatter is a powerful tool for cleaning up and beautifying your HTML source code. It takes minified or poorly formatted HTML and organizes it with consistent indentation and line breaks, making it much easier to read and maintain.",
      howItWorks: "This tool uses the `js-beautify` library to analyze the structure of your HTML code. It applies configurable rules for indentation, tag placement, and attribute formatting. The entire process is executed locally in your browser.",
      keyFeatures: ["Beautify messy HTML", "Custom indentation settings", "Minification option", "Syntax highlighting preview", "Privacy-focused local processing"],
      benefits: ["Improves code readability and maintainability", "Helps identify missing tags or structure issues", "Speeds up development and debugging", "No data is sent to a server", "Completely free to use"],
      whenToUse: "Use this tool when you have inherited messy HTML code, or when you want to format your code before committing it to a project or sharing it with others."
    }
  },
  {
    id: "css-formatter",
    name: "CSS Formatter",
    description: "Beautify or minify your CSS code.",
    category: "developer",
    icon: Palette,
    component: lazy(() => import("../pages/tools/CSSFormatter")),
    seoTitle: "CSS Formatter & Beautifier Online Free - ToolsMama",
    metaDescription: "Format and beautify your CSS code online for free. Make messy CSS readable and well-organized. Fast and secure browser-based tool.",
    keywords: ["css formatter", "beautify css", "css beautifier", "free css tool", "online developer utility"],
    content: {
      whatIsIt: "The CSS Formatter is an essential utility for web designers and developers. It transforms unorganized or minified CSS code into a clean, well-indented, and readable format, making it easier to manage styles and debug layout issues.",
      howItWorks: "The tool utilizes the `js-beautify` library specifically configured for CSS. It parses your stylesheets and applies consistent formatting rules for selectors, properties, and values. All processing happens locally on your machine.",
      keyFeatures: ["Beautify messy CSS", "Custom indentation levels", "Option to minify CSS", "Instant results", "Privacy-focused local processing"],
      benefits: ["Makes stylesheets easier to read and edit", "Helps identify redundant or broken CSS rules", "Consistent formatting across projects", "No data leaves your device", "Free and easy to use"],
      whenToUse: "Use this tool when you are working with large CSS files, or when you need to de-minify a stylesheet to understand how a website is styled."
    }
  },
  {
    id: "js-formatter",
    name: "JS Formatter",
    description: "Beautify or minify your JavaScript code.",
    category: "developer",
    icon: Terminal,
    component: lazy(() => import("../pages/tools/JSFormatter")),
    seoTitle: "JavaScript Formatter & Beautifier Online Free - ToolsMama",
    metaDescription: "Format and beautify your JavaScript code online for free. Make messy JS readable and well-indented. Fast and secure browser-based tool.",
    keywords: ["js formatter", "beautify javascript", "js beautifier", "free js tool", "online developer utility"],
    content: {
      whatIsIt: "The JS Formatter is a specialized tool for cleaning up and beautifying JavaScript source code. It takes minified or unorganized JS and applies consistent indentation, spacing, and line breaks, making it much easier for developers to read and debug.",
      howItWorks: "This tool uses the `js-beautify` library to parse and re-format your JavaScript code. It follows standard coding conventions to ensure that your code is not only readable but also structurally sound. The formatting is performed entirely in your web browser.",
      keyFeatures: ["Beautify messy JavaScript", "Custom indentation levels", "Supports modern JS syntax", "Instant results", "Privacy-focused local processing"],
      benefits: ["Improves code readability and maintainability", "Helps identify logic errors and structure issues", "Consistent formatting for team projects", "No data is sent to a server", "Completely free to use"],
      whenToUse: "Use this tool when you have minified JavaScript from a library, or when you want to format your own code for better clarity and professional presentation."
    }
  },
  {
    id: "sql-formatter",
    name: "SQL Formatter",
    description: "Beautify your SQL queries.",
    category: "developer",
    icon: Database,
    component: lazy(() => import("../pages/tools/SQLFormatter")),
    seoTitle: "SQL Formatter & Beautifier Online Free - ToolsMama",
    metaDescription: "Format and beautify your SQL queries online for free. Make complex SQL readable and well-organized. Fast and secure browser-based tool.",
    keywords: ["sql formatter", "beautify sql", "sql beautifier", "free sql tool", "online developer utility"],
    content: {
      whatIsIt: "The SQL Formatter is a practical utility for database administrators and developers. It takes raw, single-line, or messy SQL queries and organizes them into a clean, multi-line format with consistent indentation for keywords and clauses.",
      howItWorks: "The tool utilizes the `sql-formatter` library to analyze the structure of your SQL statements. It identifies keywords like SELECT, FROM, WHERE, and JOIN, and applies formatting rules to make the query structure clear. All processing happens locally on your device.",
      keyFeatures: ["Beautify complex SQL queries", "Supports multiple SQL dialects", "Custom indentation settings", "Instant results", "Privacy-focused local processing"],
      benefits: ["Makes complex queries much easier to read", "Helps identify syntax errors in SQL", "Speeds up database debugging", "No data leaves your device", "Free and easy to use"],
      whenToUse: "Use this tool when you have long, unformatted SQL queries from logs or code, or when you want to format a query before sharing it with your team."
    }
  },
  {
    id: "xml-formatter",
    name: "XML Formatter",
    description: "Beautify your XML code.",
    category: "developer",
    icon: FileJson,
    component: lazy(() => import("../pages/tools/XMLFormatter")),
    seoTitle: "XML Formatter & Beautifier Online Free - ToolsMama",
    metaDescription: "Format and beautify your XML code online for free. Make messy XML readable and well-indented. Fast and secure browser-based tool.",
    keywords: ["xml formatter", "beautify xml", "xml beautifier", "free xml tool", "online developer utility"],
    content: {
      whatIsIt: "The XML Formatter is a reliable tool for organizing and beautifying XML data. It takes raw or minified XML strings and transforms them into a structured, indented format, making it much easier to inspect data hierarchies.",
      howItWorks: "This tool uses the `xml-formatter` library to parse the XML structure and apply consistent indentation and line breaks. It ensures that tags are properly nested and readable. The entire process is executed locally in your browser.",
      keyFeatures: ["Beautify messy XML", "Custom indentation levels", "Validates XML structure", "Instant results", "Privacy-focused local processing"],
      benefits: ["Improves readability of complex data structures", "Helps identify nesting errors in XML", "Speeds up data analysis and debugging", "No data is sent to a server", "Completely free to use"],
      whenToUse: "Use this tool when you have a large XML file from an API or configuration, and you need to understand its structure or find specific data points."
    }
  },
  {
    id: "yaml-formatter",
    name: "YAML Formatter",
    description: "Beautify your YAML code.",
    category: "developer",
    icon: FileText,
    component: lazy(() => import("../pages/tools/YAMLFormatter")),
    seoTitle: "YAML Formatter & Beautifier Online Free - ToolsMama",
    metaDescription: "Format and beautify your YAML code online for free. Make messy YAML readable and well-indented. Fast and secure browser-based tool.",
    keywords: ["yaml formatter", "beautify yaml", "yaml beautifier", "free yaml tool", "online developer utility"],
    content: {
      whatIsIt: "The YAML Formatter is a handy utility for cleaning up and organizing YAML configuration files. It ensures consistent indentation and structure, which is critical for YAML since it relies on whitespace for its hierarchy.",
      howItWorks: "The tool uses the `js-yaml` library to parse your YAML input and then re-serializes it with consistent formatting rules. It validates the syntax and ensures that the resulting YAML is both readable and valid. All processing happens locally on your machine.",
      keyFeatures: ["Beautify messy YAML", "Validates YAML syntax", "Custom indentation levels", "Instant results", "Privacy-focused local processing"],
      benefits: ["Prevents errors caused by incorrect indentation", "Makes configuration files easier to read", "Speeds up DevOps and development tasks", "No data leaves your device", "Free and easy to use"],
      whenToUse: "Use this tool when you are working with Kubernetes manifests, CI/CD configurations, or any other YAML-based data and want to ensure it is correctly formatted."
    }
  },
  {
    id: "markdown-preview",
    name: "Markdown Previewer",
    description: "Live preview for your Markdown code.",
    category: "developer",
    icon: Edit3,
    component: lazy(() => import("../pages/tools/MarkdownPreview")),
    seoTitle: "Markdown Previewer Online Free - ToolsMama",
    metaDescription: "Live preview for your Markdown code online for free. See how your Markdown will look when rendered. Fast and secure browser-based tool.",
    keywords: ["markdown previewer", "markdown editor", "live markdown preview", "free markdown tool", "online developer utility"],
    content: {
      whatIsIt: "The Markdown Previewer is a real-time visualization tool for Markdown code. It allows you to type or paste Markdown text and see exactly how it will look when rendered as HTML, making it perfect for documentation and blog writing.",
      howItWorks: "This tool uses the `react-markdown` library to parse your Markdown input and render it as HTML in real-time. As you modify the text, the preview updates instantly, providing immediate feedback on your formatting. All processing happens locally in your browser.",
      keyFeatures: ["Real-time live preview", "Supports standard Markdown syntax", "Clean and responsive interface", "Instant results", "Privacy-focused local processing"],
      benefits: ["Speeds up documentation writing", "Helps catch formatting errors early", "No need for specialized Markdown editors", "No data is sent to a server", "Completely free to use"],
      whenToUse: "Use this tool when you are writing README files, blog posts, or any other content in Markdown and want to ensure the final output looks exactly as intended."
    }
  },
  {
    id: "regex-tester",
    name: "Regex Tester",
    description: "Test your regular expressions.",
    category: "developer",
    icon: Search,
    component: lazy(() => import("../pages/tools/RegexTester")),
    seoTitle: "Regex Tester Online Free - ToolsMama",
    metaDescription: "Test your regular expressions online for free. Validate regex patterns against test strings with real-time results. Fast and secure browser-based tool.",
    keywords: ["regex tester", "test regular expressions", "regex validator", "free regex tool", "online developer utility"],
    content: {
      whatIsIt: "The Regex Tester is a powerful utility for developing and validating regular expressions. It allows you to enter a regex pattern and a test string, and instantly see all matches and capture groups, making it much easier to debug complex patterns.",
      howItWorks: "The tool uses the browser's built-in JavaScript `RegExp` engine to execute your patterns against the test text. It provides real-time feedback and highlights matches as you type. The entire testing process is performed locally on your device.",
      keyFeatures: ["Real-time regex matching", "Supports flags (global, case-insensitive, etc.)", "Displays capture groups", "Instant results", "Privacy-focused local processing"],
      benefits: ["Speeds up regex development", "Helps identify edge cases in patterns", "No need for complex IDE setups", "No data leaves your device", "Free and easy to use"],
      whenToUse: "Use this tool when you are creating or debugging regular expressions for data validation, text processing, or code development."
    }
  },
  {
    id: "cron-generator",
    name: "Cron Generator",
    description: "Generate and explain cron expressions.",
    category: "developer",
    icon: Clock,
    component: lazy(() => import("../pages/tools/CronGenerator")),
    seoTitle: "Cron Expression Generator Online Free - ToolsMama",
    metaDescription: "Generate and explain cron expressions online for free. Easily create schedules for cron jobs with a simple interface. Fast and secure browser-based tool.",
    keywords: ["cron generator", "cron expression builder", "cron job scheduler", "free cron tool", "online developer utility"],
    content: {
      whatIsIt: "The Cron Generator is a helpful utility for developers and system administrators to create and understand cron expressions. Cron expressions are used to schedule tasks (cron jobs) to run periodically at fixed times, dates, or intervals.",
      howItWorks: "This tool uses the `cronstrue` library to translate complex cron syntax into plain English. As you adjust the cron expression, the tool instantly updates the human-readable explanation, ensuring your schedule is exactly what you intend. All processing happens locally in your browser.",
      keyFeatures: ["Generate cron expressions easily", "Translate cron to plain English", "Common preset schedules", "Instant validation", "Privacy-focused local processing"],
      benefits: ["Prevents errors in scheduling critical tasks", "Saves time compared to reading cron manuals", "Helps beginners learn cron syntax", "No data leaves your device", "Completely free to use"],
      whenToUse: "Use this tool when you need to set up a scheduled task on a server, CI/CD pipeline, or any system that relies on cron syntax, and you want to verify the schedule is correct."
    }
  },
  {
    id: "html-entity-converter",
    name: "HTML Entity Converter",
    description: "Encode/decode HTML entities.",
    category: "developer",
    icon: Code,
    component: lazy(() => import("../pages/tools/HTMLEntityConverter")),
    seoTitle: "HTML Entity Encoder & Decoder Online Free - ToolsMama",
    metaDescription: "Encode text to HTML entities or decode them back to plain text online for free. Fast, secure, and browser-based tool.",
    keywords: ["html entity converter", "encode html entities", "decode html entities", "free html tool", "online developer utility"],
    content: {
      whatIsIt: "The HTML Entity Converter is a practical tool for web developers to safely encode special characters into HTML entities, or decode them back into plain text. This is crucial for displaying code snippets or special symbols correctly on web pages.",
      howItWorks: "The tool uses the `he` library to robustly encode and decode text. Encoding replaces characters like `<` and `>` with their entity equivalents (`&lt;` and `&gt;`), while decoding reverses the process. All conversions are performed locally on your device.",
      keyFeatures: ["Encode text to HTML entities", "Decode HTML entities to text", "Handles all standard entities", "Instant results", "Privacy-focused local processing"],
      benefits: ["Prevents XSS vulnerabilities by escaping input", "Ensures code snippets render correctly", "Saves time on manual character replacement", "No data is sent to a server", "Free and easy to use"],
      whenToUse: "Use this tool when you are writing HTML and need to display reserved characters, or when you are processing user input that needs to be safely rendered on a webpage."
    }
  },
  {
    id: "jwt-decoder",
    name: "JWT Decoder",
    description: "Decode and inspect JWT tokens.",
    category: "developer",
    icon: ShieldCheck,
    component: lazy(() => import("../pages/tools/JWTDecoder")),
    seoTitle: "JWT Decoder Online Free - ToolsMama",
    metaDescription: "Decode JSON Web Tokens (JWT) online for free. Inspect header and payload data securely. Fast and secure browser-based tool.",
    keywords: ["jwt decoder", "decode jwt token", "json web token inspector", "free jwt tool", "online developer utility"],
    content: {
      whatIsIt: "The JWT Decoder is an essential utility for developers working with JSON Web Tokens (JWT) for authentication and authorization. It allows you to decode a token and inspect its header and payload to verify claims and data.",
      howItWorks: "This tool uses the `jwt-decode` library to parse the Base64Url encoded segments of your JWT. It extracts the JSON data from the header and payload without needing the secret key (note: it does not verify the signature). All decoding happens locally in your browser.",
      keyFeatures: ["Decode JWT header and payload", "Format JSON output for readability", "Instant decoding", "Does not require the secret key", "Privacy-focused local processing"],
      benefits: ["Helps debug authentication issues", "Allows inspection of token claims (e.g., user roles, expiration)", "No sensitive tokens are sent to a server", "Fast and responsive", "Completely free to use"],
      whenToUse: "Use this tool when you are developing or debugging an application that uses JWTs for session management, and you need to see exactly what data is encoded within a token."
    }
  },
  {
    id: "bcrypt-generator",
    name: "Bcrypt Generator",
    description: "Generate secure Bcrypt hashes.",
    category: "developer",
    icon: Lock,
    component: lazy(() => import("../pages/tools/BcryptGenerator")),
    seoTitle: "Bcrypt Hash Generator Online Free - ToolsMama",
    metaDescription: "Generate secure Bcrypt hashes online for free. Create strong password hashes with adjustable salt rounds. Fast and secure browser-based tool.",
    keywords: ["bcrypt generator", "generate bcrypt hash", "password hashing", "free security tool", "online developer utility"],
    content: {
      whatIsIt: "The Bcrypt Generator is a security tool designed to create strong, salted hashes for passwords. Bcrypt is an industry-standard hashing algorithm that is intentionally slow to resist brute-force attacks.",
      howItWorks: "This tool uses the `bcryptjs` library to generate hashes directly in your browser. You can input a plain text string and adjust the number of salt rounds (work factor). The tool then computes the hash locally, ensuring your passwords are never transmitted over the network.",
      keyFeatures: ["Generate secure Bcrypt hashes", "Adjustable salt rounds (work factor)", "Instant generation", "One-click copy", "Privacy-focused local processing"],
      benefits: ["Creates industry-standard password hashes", "Helps developers test authentication systems", "No sensitive data leaves your device", "No installation required", "Free to use"],
      whenToUse: "Use this tool when you need to manually generate a Bcrypt hash for a database seed, testing an authentication flow, or verifying how different salt rounds affect the hash."
    }
  },
  {
    id: "sha256-generator",
    name: "SHA-256 Generator",
    description: "Generate SHA-256 hashes.",
    category: "developer",
    icon: ShieldCheck,
    component: lazy(() => import("../pages/tools/SHA256Generator")),
    seoTitle: "SHA-256 Hash Generator Online Free - ToolsMama",
    metaDescription: "Generate SHA-256 hashes online for free. Securely hash text and data using the SHA-256 algorithm. Fast and secure browser-based tool.",
    keywords: ["sha256 generator", "generate sha256 hash", "sha-256 calculator", "free security tool", "online developer utility"],
    content: {
      whatIsIt: "The SHA-256 Generator is a cryptographic utility that computes a 256-bit hash value from any input text. SHA-256 is part of the SHA-2 family of cryptographic hash functions and is widely used for data integrity verification and digital signatures.",
      howItWorks: "This tool utilizes the browser's native Web Crypto API (`crypto.subtle.digest`) to calculate the hash. This ensures high performance and security, as the hashing process is executed entirely on your local machine without sending any data to a server.",
      keyFeatures: ["Generate SHA-256 hashes instantly", "Uses native Web Crypto API", "One-click copy to clipboard", "Clean and simple interface", "Privacy-focused local processing"],
      benefits: ["Verify data integrity quickly", "Generate secure identifiers", "No software installation needed", "Your input data remains private", "Completely free to use"],
      whenToUse: "Use this tool when you need to generate a checksum for a file, create a unique identifier based on text, or verify the integrity of data."
    }
  },
  {
    id: "md5-generator",
    name: "MD5 Generator",
    description: "Generate MD5 hashes.",
    category: "developer",
    icon: ShieldCheck,
    component: lazy(() => import("../pages/tools/MD5Generator")),
    seoTitle: "MD5 Hash Generator Online Free - ToolsMama",
    metaDescription: "Generate MD5 hashes online for free. Quickly compute the MD5 checksum of any text. Fast and secure browser-based tool.",
    keywords: ["md5 generator", "generate md5 hash", "md5 calculator", "free security tool", "online developer utility"],
    content: {
      whatIsIt: "The MD5 Generator is a simple utility for computing the MD5 (Message-Digest Algorithm 5) hash of any given text. While MD5 is no longer considered secure for cryptographic purposes like password hashing, it is still widely used as a checksum to verify data integrity.",
      howItWorks: "The tool uses the `crypto-js` library to calculate the 128-bit hash value of your input string. The calculation is performed entirely within your web browser, ensuring that your input data is never transmitted over the internet.",
      keyFeatures: ["Instant MD5 hash generation", "One-click copy to clipboard", "Responsive and clean UI", "No data collection", "Privacy-focused local processing"],
      benefits: ["Quickly generate checksums for files or text", "Useful for legacy systems requiring MD5", "No need to use command-line tools", "Your data remains secure on your device", "Free and easy to use"],
      whenToUse: "Use this tool when you need to generate a quick checksum for non-sensitive data, or when interacting with legacy systems that still utilize MD5 hashing."
    }
  },
  {
    id: "hmac-generator",
    name: "HMAC Generator",
    description: "Generate HMAC authentication codes.",
    category: "developer",
    icon: ShieldCheck,
    component: lazy(() => import("../pages/tools/HMACGenerator")),
    seoTitle: "HMAC Generator Online Free - ToolsMama",
    metaDescription: "Generate HMAC hashes online for free. Support for SHA-256, SHA-512, MD5, and more with a secret key. Fast and secure browser-based tool.",
    keywords: ["hmac generator", "generate hmac", "hmac sha256", "message authentication code", "free security tool"],
    content: {
      whatIsIt: "The HMAC Generator is a cryptographic tool used to calculate a Hash-based Message Authentication Code (HMAC). It combines a cryptographic hash function (like SHA-256 or MD5) with a secret cryptographic key to verify both the data integrity and the authenticity of a message.",
      howItWorks: "This tool uses the `crypto-js` library to compute the HMAC. You provide the message text, a secret key, and select the desired hashing algorithm. The calculation is performed locally in your browser, ensuring your secret key and message are never exposed to a server.",
      keyFeatures: ["Supports multiple algorithms (SHA-256, SHA-512, MD5, etc.)", "Requires a secret key for authentication", "Instant generation", "Privacy-focused local processing", "Clean interface"],
      benefits: ["Verify data integrity and authenticity simultaneously", "Essential for API authentication (e.g., webhooks)", "No software installation required", "Your secret keys remain private", "Completely free to use"],
      whenToUse: "Use this tool when you need to generate or verify an HMAC signature for API requests, webhooks, or secure communication protocols."
    }
  },
  {
    id: "binary-converter",
    name: "Binary Converter",
    description: "Convert text to binary and vice versa.",
    category: "developer",
    icon: Binary,
    component: lazy(() => import("../pages/tools/BinaryConverter")),
    seoTitle: "Binary to Text Converter Online Free - ToolsMama",
    metaDescription: "Convert text to binary or binary to text online for free. Fast, accurate, and secure browser-based tool for developers and students.",
    keywords: ["binary converter", "text to binary", "binary to text", "binary translator", "free developer tool"],
    content: {
      whatIsIt: "The Binary Converter is a simple yet essential tool that translates human-readable text into binary code (0s and 1s) and vice versa. Binary is the fundamental language of computers, representing data using only two states.",
      howItWorks: "The tool uses JavaScript to convert each character of your input text into its corresponding ASCII or UTF-8 numerical value, and then translates that number into an 8-bit binary sequence. The reverse process decodes the binary sequences back into characters. All conversions happen instantly in your browser.",
      keyFeatures: ["Two-way conversion (Text to Binary, Binary to Text)", "Instant translation", "Handles standard ASCII characters", "Clean and simple interface", "Privacy-focused local processing"],
      benefits: ["Helps understand how computers store text", "Useful for computer science students and hobbyists", "No data is sent to a server", "Fast and responsive", "Free to use"],
      whenToUse: "Use this tool for educational purposes, solving puzzles, or when you need to inspect the underlying binary representation of a text string."
    }
  },
  {
    id: "hex-converter",
    name: "Hex Converter",
    description: "Convert between Hex, Dec, Bin, Oct.",
    category: "developer",
    icon: Binary,
    component: lazy(() => import("../pages/tools/HexConverter")),
    seoTitle: "Hex Converter Online Free - ToolsMama",
    metaDescription: "Convert between Hexadecimal, Decimal, Binary, and Octal online for free. Fast, accurate, and secure browser-based tool for developers.",
    keywords: ["hex converter", "hex to decimal", "decimal to hex", "hexadecimal translator", "free developer tool"],
    content: {
      whatIsIt: "The Hex Converter is a versatile utility that translates numbers between different numeral systems: Hexadecimal (base-16), Decimal (base-10), Binary (base-2), and Octal (base-8). Hexadecimal is frequently used in computing as a human-friendly representation of binary values.",
      howItWorks: "This tool uses JavaScript's built-in `parseInt` and `toString` methods with different radix (base) parameters to perform accurate conversions between the numeral systems. All processing is done locally on your device, ensuring privacy and speed.",
      keyFeatures: ["Multi-base conversion (Hex, Dec, Bin, Oct)", "Instant translation", "Handles large numbers", "Clean interface", "Privacy-focused local processing"],
      benefits: ["Useful for analyzing network packets or memory dumps", "Helps in debugging low-level data", "No data leaves your device", "No installation required", "Completely free to use"],
      whenToUse: "Use this tool when you are working with low-level programming, analyzing data streams, or need to convert color codes or memory addresses."
    }
  },
  {
    id: "decimal-converter",
    name: "Decimal Converter",
    description: "Convert between Dec, Hex, Bin, Oct.",
    category: "developer",
    icon: Binary,
    component: lazy(() => import("../pages/tools/DecimalConverter")),
    seoTitle: "Decimal Converter Online Free - ToolsMama",
    metaDescription: "Convert between Decimal, Hexadecimal, Binary, and Octal online for free. Fast, accurate, and secure browser-based tool for developers.",
    keywords: ["decimal converter", "decimal to hex", "decimal to binary", "base 10 converter", "free developer tool"],
    content: {
      whatIsIt: "The Decimal Converter is a straightforward tool that translates standard decimal (base-10) numbers into other common computing numeral systems: Hexadecimal, Binary, and Octal. It also works in reverse, converting those systems back to decimal.",
      howItWorks: "The tool utilizes JavaScript's native number parsing and formatting capabilities to convert values between different bases. It handles the mathematical conversions instantly and entirely within your web browser.",
      keyFeatures: ["Multi-base conversion (Dec, Hex, Bin, Oct)", "Instant translation", "Clear and readable output", "Clean interface", "Privacy-focused local processing"],
      benefits: ["Helps understand numeral systems", "Useful for programming and computer science tasks", "No data is sent to a server", "Fast and responsive", "Free to use"],
      whenToUse: "Use this tool when you need to translate standard numbers into formats used by computers, or when decoding values from technical documentation."
    }
  },
  {
    id: "octal-converter",
    name: "Octal Converter",
    description: "Convert between Oct, Dec, Hex, Bin.",
    category: "developer",
    icon: Binary,
    component: lazy(() => import("../pages/tools/OctalConverter")),
    seoTitle: "Octal Converter Online Free - ToolsMama",
    metaDescription: "Convert between Octal, Decimal, Hexadecimal, and Binary online for free. Fast, accurate, and secure browser-based tool for developers.",
    keywords: ["octal converter", "octal to decimal", "octal to binary", "base 8 converter", "free developer tool"],
    content: {
      whatIsIt: "The Octal Converter is a specialized utility that translates octal (base-8) numbers into Decimal, Hexadecimal, and Binary formats, and vice versa. Octal is often used in computing contexts like Unix file permissions.",
      howItWorks: "This tool converts input values by parsing them according to their base and then formatting them into the target numeral system using JavaScript. All processing happens locally on your device for maximum speed and privacy.",
      keyFeatures: ["Multi-base conversion (Oct, Dec, Hex, Bin)", "Instant translation", "Accurate conversion logic", "Clean interface", "Privacy-focused local processing"],
      benefits: ["Useful for working with legacy systems or specific file permissions", "Helps in understanding different numeral systems", "No data leaves your device", "No installation required", "Completely free to use"],
      whenToUse: "Use this tool when you encounter octal encoded data in legacy systems, or when you need to calculate Unix file permissions (like chmod 755)."
    }
  },
  {
    id: "ascii-converter",
    name: "ASCII Converter",
    description: "Convert text to ASCII and vice versa.",
    category: "developer",
    icon: Binary,
    component: lazy(() => import("../pages/tools/AsciiConverter")),
    seoTitle: "ASCII to Text Converter Online Free - ToolsMama",
    metaDescription: "Convert text to ASCII codes or ASCII to text online for free. Fast, accurate, and secure browser-based tool for developers.",
    keywords: ["ascii converter", "text to ascii", "ascii to text", "ascii code translator", "free developer tool"],
    content: {
      whatIsIt: "The ASCII Converter is a fundamental tool that translates text characters into their corresponding ASCII (American Standard Code for Information Interchange) numerical codes, and vice versa. It's essential for understanding how text is represented in computers.",
      howItWorks: "The tool uses JavaScript to determine the ASCII code (a number from 0 to 127, or extended ASCII up to 255) for each character in your input. For decoding, it converts those numbers back into characters. All processing is done locally in your browser.",
      keyFeatures: ["Two-way conversion (Text to ASCII, ASCII to Text)", "Instant translation", "Space-separated output for readability", "Clean interface", "Privacy-focused local processing"],
      benefits: ["Essential for learning computer science basics", "Helps debug character encoding issues", "No data is sent to a server", "Fast and responsive", "Free to use"],
      whenToUse: "Use this tool when you need to find the exact ASCII value of a character, or when decoding a sequence of ASCII numbers back into a readable string."
    }
  },
  {
    id: "morse-code",
    name: "Morse Code",
    description: "Translate text to Morse code.",
    category: "developer",
    icon: Zap,
    component: lazy(() => import("../pages/tools/MorseCode")),
    seoTitle: "Morse Code Translator Online Free - ToolsMama",
    metaDescription: "Translate text to Morse code or decode Morse code back to text online for free. Fast, accurate, and secure browser-based tool.",
    keywords: ["morse code translator", "text to morse code", "decode morse code", "morse code generator", "free online tool"],
    content: {
      whatIsIt: "The Morse Code Translator is a fun and practical tool that converts standard text into Morse code (dots and dashes) and can also decode Morse code back into readable text. Morse code is a historic method of transmitting text information as a series of on-off tones, lights, or clicks.",
      howItWorks: "The tool uses a predefined dictionary mapping each letter, number, and common punctuation mark to its corresponding Morse code sequence. It instantly translates your input character by character. All translation happens locally in your browser.",
      keyFeatures: ["Two-way translation (Text to Morse, Morse to Text)", "Instant conversion", "Supports letters, numbers, and basic punctuation", "Clean interface", "Privacy-focused local processing"],
      benefits: ["Learn and practice Morse code", "Encode secret messages", "No data is sent to a server", "Fast and responsive", "Completely free to use"],
      whenToUse: "Use this tool for educational purposes, solving puzzles, or communicating in situations where traditional text transmission isn't possible."
    }
  },

  // CALCULATOR TOOLS (40)
  {
    id: "age-calculator",
    name: "Age Calculator",
    description: "Calculate your exact age in years, months, days.",
    category: "calculator",
    icon: Calendar,
    component: lazy(() => import("../pages/tools/AgeCalculator")),
    seoTitle: "Age Calculator Online Free - ToolsMama",
    metaDescription: "Calculate your exact age in years, months, and days online for free. Find out exactly how old you are today. Fast and secure browser-based tool.",
    keywords: ["age calculator", "calculate my age", "how old am i", "exact age calculator", "free online calculator"],
    content: {
      whatIsIt: "The Age Calculator is a simple yet precise tool that determines your exact age based on your date of birth. It calculates the time elapsed between your birth date and the current date, providing a detailed breakdown.",
      howItWorks: "This tool uses JavaScript's Date object to calculate the difference between the selected birth date and today's date. It accounts for leap years and varying month lengths to accurately compute your age in years, months, and days. All calculations are performed locally on your device.",
      keyFeatures: ["Calculates exact age in years, months, and days", "Easy-to-use date picker", "Instant results", "Clean and intuitive interface", "Privacy-focused local processing"],
      benefits: ["Quickly find out your exact age", "Useful for filling out forms requiring precise age", "No personal data is sent to a server", "Fast and responsive", "Free to use"],
      whenToUse: "Use this tool when you need to know your exact age for official documents, applications, or just out of curiosity."
    }
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Easily calculate percentages and differences.",
    category: "calculator",
    icon: Percent,
    component: lazy(() => import("../pages/tools/PercentageCalculator")),
    seoTitle: "Percentage Calculator Online Free - ToolsMama",
    metaDescription: "Calculate percentages, percentage change, and differences online for free. Solve math problems quickly and easily. Fast and secure browser-based tool.",
    keywords: ["percentage calculator", "calculate percentage", "percentage difference", "percentage change", "free online calculator"],
    content: {
      whatIsIt: "The Percentage Calculator is a versatile mathematical tool designed to solve common percentage-related problems. Whether you need to find a specific percentage of a number, calculate the percentage change between two values, or determine what percentage one number is of another, this tool handles it all.",
      howItWorks: "The tool provides multiple calculation modes. You simply input your numbers into the relevant fields, and the underlying JavaScript logic instantly applies the correct mathematical formulas to compute the result. All calculations happen locally in your browser.",
      keyFeatures: ["Multiple calculation modes (X% of Y, X is what % of Y, % change)", "Instant results as you type", "Handles decimals and large numbers", "Clean interface", "Privacy-focused local processing"],
      benefits: ["Saves time on manual calculations", "Prevents mathematical errors", "Useful for finance, shopping, and statistics", "No data leaves your device", "Completely free to use"],
      whenToUse: "Use this tool for calculating tips, determining discounts, analyzing statistical data, or solving everyday math problems involving percentages."
    }
  },
  {
    id: "emi-calculator",
    name: "EMI Calculator",
    description: "Calculate your monthly loan installments.",
    category: "calculator",
    icon: CreditCard,
    component: lazy(() => import("../pages/tools/EMICalculator")),
    seoTitle: "EMI Calculator Online Free - ToolsMama",
    metaDescription: "Calculate your Equated Monthly Installment (EMI) for home, car, or personal loans online for free. Fast and secure browser-based tool.",
    keywords: ["emi calculator", "loan calculator", "monthly installment calculator", "mortgage calculator", "free financial tool"],
    content: {
      whatIsIt: "The EMI (Equated Monthly Installment) Calculator is an essential financial tool that helps you determine the fixed monthly payment required to pay off a loan over a specific period. It's commonly used for home loans, car loans, and personal loans.",
      howItWorks: "This tool uses the standard EMI mathematical formula: `E = P * r * (1+r)^n / ((1+r)^n - 1)`. You input the principal loan amount, the annual interest rate, and the loan tenure (in months or years). The JavaScript logic then calculates the monthly payment, total interest, and total amount payable instantly in your browser.",
      keyFeatures: ["Calculates monthly EMI accurately", "Displays total interest payable", "Shows total payment amount", "Instant results", "Privacy-focused local processing"],
      benefits: ["Helps in financial planning and budgeting", "Allows you to compare different loan options", "No sensitive financial data is sent to a server", "Fast and responsive", "Free to use"],
      whenToUse: "Use this tool before taking out any loan to understand your monthly financial commitment and the total cost of borrowing."
    }
  },
  {
    id: "gst-calculator",
    name: "GST Calculator",
    description: "Calculate Goods and Services Tax (GST).",
    category: "calculator",
    icon: Coins,
    component: lazy(() => import("../pages/tools/GSTCalculator")),
    seoTitle: "GST Calculator Online Free - ToolsMama",
    metaDescription: "Calculate Goods and Services Tax (GST) online for free. Easily add or remove GST from prices. Fast and secure browser-based tool.",
    keywords: ["gst calculator", "calculate gst", "add gst", "remove gst", "free tax calculator"],
    content: {
      whatIsIt: "The GST (Goods and Services Tax) Calculator is a handy tool for businesses and consumers to quickly determine the amount of GST applicable to a product or service. It can calculate the tax to be added to a net price, or extract the tax amount from a gross price.",
      howItWorks: "The tool provides options to either 'Add GST' or 'Remove GST'. You input the base amount and the applicable GST rate percentage. The JavaScript logic then calculates the tax amount and the final total price instantly. All calculations are performed locally on your device.",
      keyFeatures: ["Add GST to a base price", "Remove GST from a total price", "Customizable GST rates", "Instant calculation", "Privacy-focused local processing"],
      benefits: ["Simplifies invoicing and billing", "Helps consumers understand the tax component of a price", "Prevents calculation errors", "No financial data leaves your device", "Completely free to use"],
      whenToUse: "Use this tool when generating invoices, calculating retail prices, or when you need to know how much tax you are paying on a purchase."
    }
  },
  {
    id: "discount-calculator",
    name: "Discount Calculator",
    description: "Calculate final price after discount.",
    category: "calculator",
    icon: Tag,
    component: lazy(() => import("../pages/tools/DiscountCalculator")),
    seoTitle: "Discount Calculator Online Free - ToolsMama",
    metaDescription: "Calculate the final price after applying a discount online for free. Find out how much you save during sales. Fast and secure browser-based tool.",
    keywords: ["discount calculator", "sale price calculator", "calculate savings", "percent off calculator", "free online calculator"],
    content: {
      whatIsIt: "The Discount Calculator is a practical tool for shoppers and retailers to quickly determine the final price of an item after a percentage discount has been applied. It also clearly shows the total amount saved.",
      howItWorks: "You input the original price of the item and the discount percentage. The tool's JavaScript logic calculates the discount amount by multiplying the original price by the percentage, and then subtracts that amount to find the final sale price. The calculation happens instantly in your browser.",
      keyFeatures: ["Calculates final sale price", "Displays the exact amount saved", "Handles decimals for precise pricing", "Instant results", "Privacy-focused local processing"],
      benefits: ["Helps you make informed purchasing decisions during sales", "Useful for retailers setting up promotional pricing", "No data is sent to a server", "Fast and responsive", "Free to use"],
      whenToUse: "Use this tool while shopping online or in-store to quickly figure out what an item will actually cost after a 'percent off' promotion."
    }
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index (BMI).",
    category: "calculator",
    icon: Activity,
    component: lazy(() => import("../pages/tools/BMICalculator")),
    seoTitle: "BMI Calculator Online Free - ToolsMama",
    metaDescription: "Calculate your Body Mass Index (BMI) online for free. Check if you are at a healthy weight based on your height and weight. Fast and secure.",
    keywords: ["bmi calculator", "body mass index", "calculate bmi", "healthy weight calculator", "free health tool"],
    content: {
      whatIsIt: "The BMI (Body Mass Index) Calculator is a simple health assessment tool that estimates your body fat based on your height and weight. It provides a numerical value that categorizes your weight status (e.g., underweight, normal, overweight, obese).",
      howItWorks: "The tool uses the standard BMI formula: weight (kg) / [height (m)]^2. You can input your measurements in metric (cm/kg) or imperial (feet/inches/lbs) units. The JavaScript logic performs the calculation and instantly displays your BMI score and corresponding category.",
      keyFeatures: ["Supports metric and imperial units", "Instant BMI calculation", "Displays weight category", "Clean and intuitive interface", "Privacy-focused local processing"],
      benefits: ["Provides a quick assessment of your weight status", "Helps in setting health and fitness goals", "No personal health data is sent to a server", "Fast and responsive", "Completely free to use"],
      whenToUse: "Use this tool as a general guide to check if your weight falls within a healthy range for your height."
    }
  },
  {
    id: "sales-tax-calculator",
    name: "Sales Tax Calculator",
    description: "Calculate total price with sales tax.",
    category: "calculator",
    icon: Coins,
    component: lazy(() => import("../pages/tools/SalesTaxCalculator")),
    seoTitle: "Sales Tax Calculator Online Free - ToolsMama",
    metaDescription: "Calculate the total price including sales tax online for free. Easily find the tax amount and final cost. Fast and secure browser-based tool.",
    keywords: ["sales tax calculator", "calculate sales tax", "tax amount calculator", "total price calculator", "free financial tool"],
    content: {
      whatIsIt: "The Sales Tax Calculator is a practical utility for quickly determining the amount of sales tax on a purchase and the final total price. It's useful for both consumers wanting to know the final cost and businesses calculating tax for invoices.",
      howItWorks: "You input the pre-tax price of an item and the applicable sales tax rate percentage. The tool calculates the tax amount by multiplying the price by the tax rate, and then adds it to the original price to give you the total cost. All calculations happen locally.",
      keyFeatures: ["Calculates exact tax amount", "Displays final total price", "Handles decimals for precise pricing", "Instant results", "Privacy-focused local processing"],
      benefits: ["Prevents surprises at the checkout", "Helps businesses ensure accurate billing", "No financial data leaves your device", "Fast and responsive", "Free to use"],
      whenToUse: "Use this tool when shopping in areas where sales tax is not included in the displayed price, or when preparing estimates and invoices."
    }
  },
  {
    id: "tip-calculator",
    name: "Tip Calculator",
    description: "Calculate tips and split bills.",
    category: "calculator",
    icon: CreditCard,
    component: lazy(() => import("../pages/tools/TipCalculator")),
    seoTitle: "Tip Calculator & Bill Splitter Online Free - ToolsMama",
    metaDescription: "Calculate restaurant tips and split the bill among friends online for free. Fast, accurate, and secure browser-based tool.",
    keywords: ["tip calculator", "bill splitter", "gratuity calculator", "split the check", "free online calculator"],
    content: {
      whatIsIt: "The Tip Calculator is a convenient tool designed to help you figure out the appropriate gratuity for a service and easily split the total bill among a group of people.",
      howItWorks: "You input the total bill amount, select or enter a tip percentage, and specify the number of people sharing the bill. The tool calculates the total tip, the grand total, and exactly how much each person owes. All calculations are performed instantly in your browser.",
      keyFeatures: ["Calculates total tip amount", "Calculates grand total", "Splits the bill evenly among multiple people", "Instant results", "Privacy-focused local processing"],
      benefits: ["Takes the math out of tipping", "Makes splitting group dinners easy and fair", "No data is sent to a server", "Fast and responsive on mobile devices", "Completely free to use"],
      whenToUse: "Use this tool at restaurants, bars, or for any service where tipping is customary and you need to divide the cost with others."
    }
  },
  {
    id: "compound-interest-calculator",
    name: "Compound Interest",
    description: "Calculate growth with compound interest.",
    category: "calculator",
    icon: BarChart,
    component: lazy(() => import("../pages/tools/CompoundInterestCalculator")),
    seoTitle: "Compound Interest Calculator Online Free - ToolsMama",
    metaDescription: "Calculate the future value of your investments with compound interest online for free. Fast and secure browser-based financial tool.",
    keywords: ["compound interest calculator", "investment calculator", "future value calculator", "interest compounding", "free financial tool"],
    content: {
      whatIsIt: "The Compound Interest Calculator is a powerful financial tool that helps you project the future value of an investment or savings account. It demonstrates how your money grows over time when interest is calculated on both the initial principal and the accumulated interest.",
      howItWorks: "You input the initial principal amount, the annual interest rate, the compounding frequency (e.g., monthly, annually), and the time period. The tool uses the compound interest formula to calculate the total future value and the total interest earned, processing everything locally.",
      keyFeatures: ["Calculates future investment value", "Adjustable compounding frequencies", "Displays total interest earned", "Instant results", "Privacy-focused local processing"],
      benefits: ["Helps in long-term financial planning and retirement saving", "Visualizes the power of compounding", "No sensitive financial data leaves your device", "Fast and responsive", "Free to use"],
      whenToUse: "Use this tool when evaluating savings accounts, planning investments, or trying to understand how a debt might grow over time if left unpaid."
    }
  },
  {
    id: "simple-interest-calculator",
    name: "Simple Interest",
    description: "Calculate simple interest on principal.",
    category: "calculator",
    icon: BarChart,
    component: lazy(() => import("../pages/tools/SimpleInterestCalculator")),
    seoTitle: "Simple Interest Calculator Online Free - ToolsMama",
    metaDescription: "Calculate simple interest on loans or savings online for free. Find the total interest and final amount quickly. Fast and secure browser-based tool.",
    keywords: ["simple interest calculator", "calculate interest", "loan interest calculator", "savings interest", "free financial tool"],
    content: {
      whatIsIt: "The Simple Interest Calculator is a straightforward financial utility used to determine the interest charge on a loan or the interest earned on savings, where the interest is calculated only on the original principal amount.",
      howItWorks: "The tool uses the basic formula: `Interest = Principal * Rate * Time`. You input the principal amount, the annual interest rate, and the time period. The JavaScript logic instantly calculates the total interest and the final total amount in your browser.",
      keyFeatures: ["Calculates total simple interest", "Displays final total amount", "Easy-to-use interface", "Instant results", "Privacy-focused local processing"],
      benefits: ["Quickly estimate costs for short-term loans", "Understand basic interest earnings", "No financial data is sent to a server", "Fast and responsive", "Completely free to use"],
      whenToUse: "Use this tool for calculating interest on personal loans, short-term borrowing, or basic savings accounts that do not use compounding."
    }
  },

  // GENERATOR TOOLS (30)
  {
    id: "password-generator",
    name: "Password Generator",
    description: "Create strong, random, secure passwords.",
    category: "generator",
    icon: Lock,
    component: lazy(() => import("../pages/tools/PasswordGenerator")),
    seoTitle: "Strong Password Generator Online Free - ToolsMama",
    metaDescription: "Generate strong, random, and secure passwords online for free. Customize length and characters. Fast and secure browser-based tool.",
    keywords: ["password generator", "strong password creator", "random password generator", "secure password maker", "free security tool"],
    content: {
      whatIsIt: "The Password Generator is a crucial security tool designed to create strong, unpredictable, and highly secure passwords. Using strong passwords is the first line of defense against unauthorized access to your online accounts.",
      howItWorks: "This tool uses the browser's cryptographically secure random number generator (`crypto.getRandomValues()`) to select characters from your chosen sets (uppercase, lowercase, numbers, symbols). The password generation happens entirely on your device, ensuring no one else sees it.",
      keyFeatures: ["Cryptographically secure generation", "Customizable password length", "Options to include/exclude specific character types", "One-click copy to clipboard", "Privacy-focused local processing"],
      benefits: ["Protects your accounts from brute-force attacks", "Eliminates the risk of using weak or easily guessable passwords", "Your generated passwords are never sent over the internet", "Fast and responsive", "Free to use"],
      whenToUse: "Use this tool whenever you are creating a new online account, updating an old password, or setting up a secure system that requires a strong credential."
    }
  },
  {
    id: "qr-generator",
    name: "QR Code Generator",
    description: "Generate QR codes from any text or URL.",
    category: "generator",
    icon: QrCode,
    component: lazy(() => import("../pages/tools/QRGenerator")),
    seoTitle: "QR Code Generator Online Free - ToolsMama",
    metaDescription: "Create custom QR codes from text, URLs, or contact info online for free. Download high-quality QR code images instantly. Fast and secure.",
    keywords: ["qr code generator", "create qr code", "make qr code", "free qr code maker", "url to qr code"],
    content: {
      whatIsIt: "The QR Code Generator is a versatile tool that converts any text, website URL, or contact information into a scannable Quick Response (QR) code image. These codes can be easily read by smartphone cameras.",
      howItWorks: "You simply enter your desired text or URL into the input field. The tool uses a JavaScript library to instantly encode that information into a 2D barcode matrix (the QR code). You can then download the generated image.",
      keyFeatures: ["Instantly generates QR codes", "Supports URLs, plain text, and more", "Downloadable high-quality images", "Clean and simple interface", "Privacy-focused local processing"],
      benefits: ["Makes sharing links and information effortless", "Great for marketing materials, business cards, and menus", "No data is sent to a server for generation", "Fast and responsive", "Completely free to use"],
      whenToUse: "Use this tool when you need to bridge the physical and digital worlds, allowing people to quickly access a website or text by scanning an image with their phone."
    }
  },
  {
    id: "uuid-generator",
    name: "UUID Generator",
    description: "Generate random UUIDs (v4) for your projects.",
    category: "generator",
    icon: Fingerprint,
    component: lazy(() => import("../pages/tools/UUIDGenerator")),
    seoTitle: "UUID/GUID Generator Online Free - ToolsMama",
    metaDescription: "Generate random, unique UUIDs (v4) and GUIDs online for free. Create single or multiple identifiers instantly. Fast and secure developer tool.",
    keywords: ["uuid generator", "guid generator", "random uuid", "create uuid v4", "free developer tool"],
    content: {
      whatIsIt: "The UUID (Universally Unique Identifier) Generator is a developer tool that creates random, 128-bit numbers used to uniquely identify information in computer systems. It specifically generates Version 4 UUIDs, which are based on random numbers.",
      howItWorks: "The tool utilizes the browser's built-in `crypto.randomUUID()` function (or a secure polyfill) to generate highly random, collision-resistant identifiers. You can choose to generate a single UUID or a batch of them simultaneously.",
      keyFeatures: ["Generates standard Version 4 UUIDs", "Option to generate multiple UUIDs at once", "One-click copy to clipboard", "Instant generation", "Privacy-focused local processing"],
      benefits: ["Ensures unique identifiers for database records, session IDs, or file names", "No server interaction required", "Fast and reliable", "Completely free to use"],
      whenToUse: "Use this tool during software development when you need guaranteed unique keys for database entries, tracking IDs, or any scenario requiring a globally unique identifier."
    }
  },
  {
    id: "lorem-ipsum",
    name: "Lorem Ipsum",
    description: "Generate placeholder text for projects.",
    category: "generator",
    icon: FileText,
    component: lazy(() => import("../pages/tools/LoremIpsum")),
    seoTitle: "Lorem Ipsum Generator Online Free - ToolsMama",
    metaDescription: "Generate standard Lorem Ipsum placeholder text online for free. Customize paragraphs, words, or lists for your design projects. Fast and easy.",
    keywords: ["lorem ipsum generator", "placeholder text", "dummy text generator", "web design text", "free lorem ipsum"],
    content: {
      whatIsIt: "The Lorem Ipsum Generator is a classic utility for web designers, graphic designers, and publishers. It creates standard 'dummy' text used to fill spaces in a layout to demonstrate the visual form of a document or a web page without relying on meaningful content.",
      howItWorks: "You select the amount of text you need (e.g., number of paragraphs, words, or sentences). The tool's JavaScript logic then pieces together standard Latin-like words from the traditional Lorem Ipsum passage to generate the requested volume of text.",
      keyFeatures: ["Customizable length (paragraphs, words, bytes)", "Generates standard, recognizable placeholder text", "One-click copy to clipboard", "Instant generation", "Privacy-focused local processing"],
      benefits: ["Helps designers focus on layout and typography without being distracted by readable content", "Saves time compared to typing gibberish", "Fast and responsive", "Completely free to use"],
      whenToUse: "Use this tool when creating wireframes, mockups, or templates where you need to show how text will look before the actual copy is written."
    }
  },

  // SEO TOOLS (30)
  {
    id: "meta-tag-generator",
    name: "Meta Tag Generator",
    description: "Generate SEO meta tags for your website.",
    category: "seo",
    icon: Tag,
    component: lazy(() => import("../pages/tools/MetaTagGenerator")),
    seoTitle: "Meta Tag Generator Online Free - ToolsMama",
    metaDescription: "Create SEO-friendly HTML meta tags for your website online for free. Generate title, description, and keyword tags easily. Fast and secure.",
    keywords: ["meta tag generator", "seo tags creator", "html meta tags", "generate meta description", "free seo tool"],
    content: {
      whatIsIt: "The Meta Tag Generator is an essential SEO (Search Engine Optimization) tool that helps webmasters and developers create the HTML `<meta>` tags needed to describe a webpage's content to search engines like Google.",
      howItWorks: "You fill out a simple form with your page's title, description, keywords, author, and other relevant details. The tool instantly formats this information into correct HTML meta tag syntax, ready to be pasted into the `<head>` section of your website.",
      keyFeatures: ["Generates standard SEO meta tags (title, description, keywords)", "Supports Open Graph (Facebook) and Twitter Card tags", "Live preview of the generated HTML code", "One-click copy to clipboard", "Privacy-focused local processing"],
      benefits: ["Improves your website's visibility in search engine results", "Ensures your links look great when shared on social media", "Saves time writing HTML manually", "Completely free to use"],
      whenToUse: "Use this tool when building a new webpage or optimizing an existing one to ensure search engines and social platforms understand your content."
    }
  },
  {
    id: "robots-generator",
    name: "Robots.txt Generator",
    description: "Create a robots.txt file for your site.",
    category: "seo",
    icon: FileText,
    component: lazy(() => import("../pages/tools/RobotsGenerator")),
    seoTitle: "Robots.txt Generator Online Free - ToolsMama",
    metaDescription: "Generate a custom robots.txt file for your website online for free. Control search engine crawlers and improve your SEO. Fast and easy.",
    keywords: ["robots.txt generator", "create robots.txt", "seo crawler control", "generate robots file", "free seo tool"],
    content: {
      whatIsIt: "The Robots.txt Generator is a crucial SEO tool that helps you create a `robots.txt` file. This file tells search engine crawlers (like Googlebot) which pages or sections of your website they are allowed to visit and index, and which they should ignore.",
      howItWorks: "You use a simple interface to define rules. You can select specific user-agents (search engines) and specify directories or files to 'Allow' or 'Disallow'. The tool instantly translates your choices into the correct robots.txt syntax.",
      keyFeatures: ["Easy-to-use interface for defining crawl rules", "Supports all major search engine bots", "Option to include a link to your XML sitemap", "Instant generation of the text file", "Privacy-focused local processing"],
      benefits: ["Prevents search engines from indexing private or duplicate content", "Optimizes crawl budget by directing bots to important pages", "Requires no coding knowledge", "Completely free to use"],
      whenToUse: "Use this tool when launching a new website, restructuring an existing one, or when you need to hide specific directories (like admin panels) from search results."
    }
  },
  {
    id: "sitemap-generator",
    name: "Sitemap Generator",
    description: "Generate an XML sitemap for search engines.",
    category: "seo",
    icon: Search,
    component: lazy(() => import("../pages/tools/SitemapGenerator")),
    seoTitle: "XML Sitemap Generator Online Free - ToolsMama",
    metaDescription: "Create an XML sitemap for your website online for free. Help search engines index your pages faster. Fast, secure, and easy to use.",
    keywords: ["xml sitemap generator", "create sitemap", "generate xml sitemap", "seo sitemap tool", "free seo tool"],
    content: {
      whatIsIt: "The XML Sitemap Generator is an SEO tool designed to create a structured list of your website's URLs in XML format. This file acts as a roadmap for search engines, helping them discover, crawl, and index your pages more efficiently.",
      howItWorks: "You manually input the URLs of your website, along with optional metadata like the last modified date, change frequency, and priority. The tool then formats this data into a valid XML sitemap structure that you can copy or download.",
      keyFeatures: ["Generates valid XML sitemap syntax", "Allows setting change frequency and priority for each URL", "Clean and intuitive interface", "Instant generation", "Privacy-focused local processing"],
      benefits: ["Improves website indexation by search engines", "Crucial for large websites or sites with complex architecture", "Helps search engines understand the relative importance of your pages", "Completely free to use"],
      whenToUse: "Use this tool to create a sitemap to submit to Google Search Console or Bing Webmaster Tools, especially when launching a new site or adding significant new content."
    }
  },

  // CONVERTER TOOLS (30)
  {
    id: "unit-converter",
    name: "Unit Converter",
    description: "Convert between various units of measurement.",
    category: "converter",
    icon: Ruler,
    component: lazy(() => import("../pages/tools/UnitConverter")),
    seoTitle: "Unit Converter Online Free - ToolsMama",
    metaDescription: "Convert between various units of measurement including length, weight, temperature, and volume online for free. Fast and accurate.",
    keywords: ["unit converter", "measurement converter", "convert units", "length converter", "weight converter", "free online converter"],
    content: {
      whatIsIt: "The Unit Converter is a comprehensive tool that allows you to translate values from one unit of measurement to another across various categories, such as length, weight, temperature, and volume.",
      howItWorks: "You select the category of measurement, input the value you want to convert, choose the 'from' unit, and select the 'to' unit. The tool uses standard conversion factors to instantly calculate and display the equivalent value.",
      keyFeatures: ["Supports multiple categories (Length, Weight, Temperature, etc.)", "Extensive list of units within each category", "Instant conversion as you type", "Clean and intuitive interface", "Privacy-focused local processing"],
      benefits: ["Saves time looking up conversion formulas", "Ensures accuracy in calculations", "Useful for cooking, travel, science, and everyday tasks", "Completely free to use"],
      whenToUse: "Use this tool whenever you need to convert measurements, like changing miles to kilometers, pounds to kilograms, or Fahrenheit to Celsius."
    }
  },
  {
    id: "currency-converter",
    name: "Currency Converter",
    description: "Real-time currency exchange rate converter.",
    category: "converter",
    icon: Coins,
    component: lazy(() => import("../pages/tools/CurrencyConverter")),
    seoTitle: "Currency Converter Online Free - ToolsMama",
    metaDescription: "Convert currencies with real-time exchange rates online for free. Check the latest foreign exchange rates instantly. Fast and accurate.",
    keywords: ["currency converter", "exchange rate calculator", "foreign exchange", "convert money", "free currency tool"],
    content: {
      whatIsIt: "The Currency Converter is a financial tool that allows you to calculate the value of one currency in terms of another. It provides up-to-date exchange rates for major global currencies.",
      howItWorks: "You input the amount you want to convert, select the base currency, and choose the target currency. The tool fetches the latest exchange rates from a reliable API and instantly calculates the converted amount.",
      keyFeatures: ["Real-time or recently updated exchange rates", "Supports a wide range of global currencies", "Instant calculation", "Clean and easy-to-use interface"],
      benefits: ["Helps travelers budget for international trips", "Assists businesses with cross-border transactions", "Provides quick insights into currency fluctuations", "Free to use"],
      whenToUse: "Use this tool when planning international travel, shopping on foreign websites, or analyzing global financial markets."
    }
  },
  {
    id: "time-converter",
    name: "Time Converter",
    description: "Convert between different time units.",
    category: "converter",
    icon: Clock,
    component: lazy(() => import("../pages/tools/TimeConverter")),
    seoTitle: "Time Unit Converter Online Free - ToolsMama",
    metaDescription: "Convert between seconds, minutes, hours, days, and other time units online for free. Fast, accurate, and easy to use.",
    keywords: ["time converter", "convert time units", "seconds to minutes", "hours to days", "free online converter"],
    content: {
      whatIsIt: "The Time Converter is a simple utility that translates a duration of time from one unit to another. It handles conversions between milliseconds, seconds, minutes, hours, days, weeks, and years.",
      howItWorks: "You enter a numerical value, select the unit you are converting from, and choose the unit you want to convert to. The tool applies the standard mathematical conversions (e.g., 60 seconds in a minute) to provide the exact equivalent instantly.",
      keyFeatures: ["Supports a wide range of time units", "Handles very large or very small numbers", "Instant calculation as you type", "Privacy-focused local processing"],
      benefits: ["Useful for scientific calculations, project planning, and everyday scheduling", "Prevents manual calculation errors", "Fast and responsive", "Completely free to use"],
      whenToUse: "Use this tool when you need to know how many hours are in a specific number of days, or convert milliseconds to seconds for programming tasks."
    }
  },
  {
    id: "color-converter",
    name: "Color Converter",
    description: "Convert between HEX, RGB, HSL, and more.",
    category: "converter",
    icon: Palette,
    component: lazy(() => import("../pages/tools/ColorConverter")),
    seoTitle: "Color Converter (HEX, RGB, HSL) Online Free - ToolsMama",
    metaDescription: "Convert colors between HEX, RGB, and HSL formats online for free. Essential tool for web designers and developers. Fast and accurate.",
    keywords: ["color converter", "hex to rgb", "rgb to hex", "hsl converter", "web design color tool", "free developer tool"],
    content: {
      whatIsIt: "The Color Converter is an essential tool for web designers and developers. It translates color values between different formats commonly used in digital design and CSS, primarily HEX, RGB (Red, Green, Blue), and HSL (Hue, Saturation, Lightness).",
      howItWorks: "You input a color value in one format (e.g., a HEX code like `#FF5733`). The tool's underlying logic parses this value and mathematically converts it into the other formats (e.g., `rgb(255, 87, 51)` and `hsl(11, 100%, 60%)`), displaying them instantly.",
      keyFeatures: ["Converts between HEX, RGB, and HSL", "Visual color preview", "Accepts various input formats", "One-click copy to clipboard", "Privacy-focused local processing"],
      benefits: ["Ensures color consistency across different design tools and codebases", "Saves time compared to manual conversion", "Helps understand color relationships", "Completely free to use"],
      whenToUse: "Use this tool when translating a design mockup into CSS, or when you need to adjust the opacity (alpha channel) of a HEX color by converting it to RGBa."
    }
  },

  // MISC TOOLS (20)
  {
    id: "ip-lookup",
    name: "IP Lookup",
    description: "Find location and info for any IP address.",
    category: "misc",
    icon: Globe,
    component: lazy(() => import("../pages/tools/IPLookup")),
    seoTitle: "IP Address Lookup Tool Online Free - ToolsMama",
    metaDescription: "Find the geographical location, ISP, and other details of any IP address online for free. Fast and accurate IP lookup tool.",
    keywords: ["ip lookup", "find ip address", "ip location", "ip geolocation", "free network tool"],
    content: {
      whatIsIt: "The IP Lookup tool is a network utility that retrieves geographical and network information associated with a specific IP (Internet Protocol) address. It helps identify where an IP address is located in the real world.",
      howItWorks: "You enter an IPv4 or IPv6 address. The tool queries a secure, third-party geolocation database API. The API returns details such as the country, region, city, approximate latitude/longitude, and the Internet Service Provider (ISP) associated with that IP.",
      keyFeatures: ["Supports IPv4 and IPv6 addresses", "Provides country, city, and region data", "Identifies the ISP or organization", "Displays approximate location on a map (if supported)", "Fast retrieval"],
      benefits: ["Useful for network troubleshooting and security analysis", "Helps identify the origin of website traffic or suspicious activity", "Provides quick insights into network routing", "Free to use"],
      whenToUse: "Use this tool when you need to investigate the source of an unknown connection, verify the location of a server, or troubleshoot network routing issues."
    }
  },
  {
    id: "user-agent-parser",
    name: "User Agent Parser",
    description: "Parse and analyze browser user agent strings.",
    category: "misc",
    icon: Terminal,
    component: lazy(() => import("../pages/tools/UserAgentParser")),
    seoTitle: "User Agent Parser Online Free - ToolsMama",
    metaDescription: "Parse and analyze browser user agent strings online for free. Extract browser, OS, and device information instantly. Fast developer tool.",
    keywords: ["user agent parser", "parse user agent", "browser string analyzer", "detect browser os", "free developer tool"],
    content: {
      whatIsIt: "The User Agent Parser is a developer tool that breaks down a complex User-Agent string sent by a web browser into readable components. It identifies the browser name, version, operating system, and device type.",
      howItWorks: "You paste a User-Agent string into the tool. It uses a specialized parsing library or regular expressions to analyze the string's patterns and extract the specific details about the client's software and hardware environment.",
      keyFeatures: ["Identifies browser name and version", "Detects operating system and version", "Determines device type (desktop, mobile, tablet)", "Clean, structured output", "Privacy-focused local processing"],
      benefits: ["Essential for debugging browser-specific issues", "Helps analyze web server logs", "Assists in building device-specific web experiences", "Fast and responsive", "Completely free to use"],
      whenToUse: "Use this tool when investigating bug reports from users, analyzing traffic logs, or writing code that needs to adapt to different browser capabilities."
    }
  },
  {
    id: "random-number",
    name: "Random Number",
    description: "Generate random numbers within a range.",
    category: "misc",
    icon: Dices,
    component: lazy(() => import("../pages/tools/RandomNumber")),
    seoTitle: "Random Number Generator Online Free - ToolsMama",
    metaDescription: "Generate random numbers within a specific range online for free. Perfect for giveaways, games, and statistics. Fast and secure.",
    keywords: ["random number generator", "rng", "generate random number", "random picker", "free online tool"],
    content: {
      whatIsIt: "The Random Number Generator is a simple utility that produces a number chosen by chance within a specified minimum and maximum range.",
      howItWorks: "You define the lower and upper limits (minimum and maximum). The tool uses JavaScript's built-in `Math.random()` function to generate a pseudo-random decimal, scales it to your specified range, and rounds it to the nearest whole number.",
      keyFeatures: ["Customizable minimum and maximum range", "Generates whole numbers", "Instant generation", "Clean and simple interface", "Privacy-focused local processing"],
      benefits: ["Ensures fairness in random selections", "Useful for a wide variety of applications", "Fast and responsive", "Completely free to use"],
      whenToUse: "Use this tool for picking contest winners, rolling virtual dice, statistical sampling, or any situation where you need an unbiased, random selection."
    }
  }
];
