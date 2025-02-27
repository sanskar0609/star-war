import { useEffect } from "react";

const VismeForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="visme_d"
      data-title="Registration Form Template"
      data-url="n01rzk04-registration-form-template?fullPage=true"
      data-domain="forms"
      data-full-page="true"
      data-min-height="100vh"
      data-form-id="117010"
    ></div>
  );
};

export default VismeForm;
