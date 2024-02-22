document.addEventListener("DOMContentLoaded", function() {
    // Initialize CodeMirror
    var editor = CodeMirror(document.getElementById('mermaid-input'), {
      mode: "htmlmixed",
      lineNumbers: true,
      theme: "default",
    });
  
    const output = document.getElementById('mermaid-output');
  
    editor.on("change", function() {
      updateOutput(editor.getValue());
    });
  
    function updateOutput(markup) {
      output.innerHTML = '<div class="mermaid">' + markup + '</div>';
      mermaid.init(undefined, '.mermaid');
  
      // Initialize panzoom for the Mermaid diagram
      const mermaidDiagrams = output.getElementsByClassName('mermaid');
      if (mermaidDiagrams.length > 0) {
        panzoom(mermaidDiagrams[0], {
          maxZoom: 20,
          minZoom: 0.5,
          zoomSpeed: 0.065,
          contain: 'outside'
        });
      }
    }
  
    // Initialize Split.js
    Split(['#left-panel', '#right-panel'], {
      gutterSize: 8,
      cursor: 'col-resize'
    });
  });