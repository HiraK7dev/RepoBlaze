import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Markdown from 'react-markdown'

function Playground() {

  const [markdown, setmarkDown] = useState(``);
  function onChangingMarkdown(event){
    setmarkDown(event.target.value);
  }
  return (
    <>
      <Navbar />
      <div className="h-full w-full flex justify-center items-start">
        {/* Text Editor */}
        <div className="w-1/2 h-full p-4 pr-2">
          <div className="mockup-code h-[89dvh] pl-4">
            <pre>
              <code>
                <textarea value={markdown} onChange={onChangingMarkdown} className="bg-transparent w-full h-[80dvh] resize-none focus:outline-none placeholder-gray-600" placeholder="Drop your markdown here..."></textarea>
              </code>
            </pre>
          </div>
        </div>
        {/* Code Generator */}
        <div className="w-1/2 h-full p-4 pl-2">
          <div className="bg-neutral w-full h-[89dvh] rounded-xl p-8 font-mono overflow-auto">
            {
              markdown === `` ? <p className="text-gray-600">View Panel...</p> : <Markdown className="prose">{markdown}</Markdown>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Playground;
