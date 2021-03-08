import { getRenderer } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/mnt/c/Users/andre/vc/.codedoc/content/theme.ts';installTheme();
import { zoomOnFormula } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/formula/zoom-on-formula.js';zoomOnFormula();
import { codeSelection } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { reloadOnChange } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { CollapseControl } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { GithubSearch } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/mnt/c/Users/andre/vc/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';

const components = {
  'JYELWz5+q1eDk/r0nwDlEQ==': ToCPrevNext,
  'TbpHsbc5Lwd/VXzqZdF48w==': CollapseControl,
  'WaR+XlNmZpQREERUFJ2p1Q==': GithubSearch,
  'F5eDiSW5pznGSCelpPj8yw==': ToCToggle,
  'nKN90RfFUVD3W5A0Eg5UCA==': DarkModeSwitch,
  'HZdXs0rGOjG4DaiSfXSFRg==': ConfigTransport
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
