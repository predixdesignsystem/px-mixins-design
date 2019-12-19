/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/* N/A */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-mixins-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-mixins-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-mixins-design" description="The Predix UI Mixins module is a fork of the inuitcss Mixins Module and contains mixins for use across other Predix UI modules." layer="tools" sassdoc-path="sassdoc.json" dependencies="[
    &quot;http://github.com/PredixDev/px-defaults-design&quot;
  ]" selected-options="{{selectedOptions}}" hide-demo-container="true">

<!-- 2: Set Options -->
<!-- N/A -->

<!-- 3: Make HTML Demo -->
<!-- N/A -->

<!-- 4: Set Import Slot -->
<section slot="import">
@import "px-mixins-design/_tools.mixins.scss";
</section>

<!-- 5: Set Usage HTML -->
<section slot="usage">
The following Sass mixins are provided:

### inuit-font-size
Generates rem sized fonts with line height from pixel sizes.<br>
Can take the following parameters:
\`\`\`
<!-- @param {Number}  \$inuit-font-size           - Font size in pixels -->
<!-- @param {Number}  \$inuit-line-height [auto]  - Line height in pixels -->

@include inuit-font-size(\$inuit-font-size, \$inuit-line-height: auto);
\`\`\`

### border-right-left
Swaps horizontal border placement if HTML direction switched to \`dir=rtl\`. <br>
Can take the following parameters:
\`\`\`
<!-- @param {String}  \$inuit-border-position         - Left or right border -->
<!-- @param {Color}   \$inuit-border-color [inherit]  - Border color -->
<!-- @param {Number}  \$inuit-border-width [1px]      - Border width -->
<!-- @param {String}  \$inuit-border-style            - CSS border style value -->

@include border-right-left(\$inuit-border-position, \$inuit-border-color: inherit, \$inuit-border-width: 1px, \$inuit-border-style: solid);
\`\`\`

### font-face
Generates webfont-friendly font families.<br>
Can take the following parameters:

\`\`\`
<!-- @param {String}  \$font-family      - Name of font family @font-face will use -->
<!-- @param {String}  \$file-path        - Path to webfont file -->
<!-- @param {String}  \$weight [normal]  - CSS Font weight value -->
<!-- @param {String}  \$style [normal]   - CSS Font style value -->

@include font-face(\$font-family, \$file-path, \$weight: normal, \$style: normal);
\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-mixins-design-demo'
});