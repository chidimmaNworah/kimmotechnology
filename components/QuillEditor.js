// components/QuillEditor.js
import dynamic from "next/dynamic";
import { useEffect, useState, useMemo } from "react";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// Register image resize module on client side
if (typeof window !== "undefined") {
  const Quill = require("react-quill-new").Quill;
  if (Quill) {
    try {
      const ImageResize = require("quill-image-resize-module-react").default;
      Quill.register("modules/imageResize", ImageResize);
    } catch (e) {
      console.warn("Image resize module not available:", e);
    }
  }
}

const quillFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
  "color",
  "background",
  "code-block",
  "script",
  "clean",
  "width",
  "height",
  "style",
];

const defaultModules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
  imageResize: {
    parchment:
      typeof window !== "undefined"
        ? require("react-quill-new").Quill?.import("parchment")
        : null,
    modules: ["Resize", "DisplaySize"],
  },
};

export default function QuillEditor({ value, onChange, placeholder = "" }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Memoize modules so reference stays stable across re-renders
  const modules = useMemo(() => defaultModules, []);

  if (!mounted) return null;

  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={quillFormats}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="quill-editor-dark"
      />
      <style jsx global>{`
        /* Quill editor dark theme styles */
        .quill-editor-dark {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid #1e293b;
          border-radius: 8px;
          overflow: hidden;
        }
        .quill-editor-dark .ql-toolbar {
          background: #0f172a;
          border: none;
          border-bottom: 1px solid #1e293b;
        }
        .quill-editor-dark .ql-toolbar .ql-stroke {
          stroke: #94a3b8;
        }
        .quill-editor-dark .ql-toolbar .ql-fill {
          fill: #94a3b8;
        }
        .quill-editor-dark .ql-toolbar .ql-picker {
          color: #94a3b8;
        }
        .quill-editor-dark .ql-toolbar .ql-picker-options {
          background: #0f172a;
          border-color: #1e293b;
        }
        .quill-editor-dark .ql-toolbar button:hover .ql-stroke,
        .quill-editor-dark .ql-toolbar button.ql-active .ql-stroke {
          stroke: #22d3ee;
        }
        .quill-editor-dark .ql-toolbar button:hover .ql-fill,
        .quill-editor-dark .ql-toolbar button.ql-active .ql-fill {
          fill: #22d3ee;
        }
        .quill-editor-dark .ql-container {
          border: none;
          font-family: "Outfit", sans-serif;
          font-size: 0.875rem;
        }
        .quill-editor-dark .ql-editor {
          min-height: 200px;
          color: #f1f5f9;
          padding: 1rem;
        }
        .quill-editor-dark .ql-editor.ql-blank::before {
          color: #64748b;
          font-style: normal;
        }
        .quill-editor-dark .ql-editor a {
          color: #22d3ee;
        }
        /* Responsive images in editor */
        .quill-editor-dark .ql-editor img {
          max-width: 100%;
          height: auto;
          cursor: pointer;
          border-radius: 6px;
        }
        .quill-editor-dark .ql-editor img.is-resizing {
          outline: 2px solid #22d3ee;
        }
        /* Image resize module overlay */
        .ql-image-resize-container {
          border: 1px dashed #22d3ee !important;
        }
        .ql-image-resize-handle {
          width: 10px !important;
          height: 10px !important;
          background: #22d3ee !important;
          border: none !important;
        }
      `}</style>
    </>
  );
}
