'use strict';

module.exports = {
  rules: {
    'no-ajax': require('./rules/no-ajax'),
    'no-attr': require('./rules/no-attr'),
    'no-bind': require('./rules/no-bind'),
    'no-class': require('./rules/no-class'),
    'no-clone': require('./rules/no-clone'),
    'no-closest': require('./rules/no-closest'),
    'no-css': require('./rules/no-css'),
    'no-data': require('./rules/no-data'),
    'no-deferred': require('./rules/no-deferred'),
    'no-delegate': require('./rules/no-delegate'),
    'no-each': require('./rules/no-each'),
    'no-find': require('./rules/no-find'),
    'no-global-eval': require('./rules/no-global-eval'),
    'no-html': require('./rules/no-html'),
    'no-in-array': require('./rules/no-in-array'),
    'no-is': require('./rules/no-is'),
    'no-map': require('./rules/no-map'),
    'no-merge': require('./rules/no-merge'),
    'no-param': require('./rules/no-param'),
    'no-parent': require('./rules/no-parent'),
    'no-parents': require('./rules/no-parents'),
    'no-prop': require('./rules/no-prop'),
    'no-serialize': require('./rules/no-serialize'),
    'no-text': require('./rules/no-text'),
    'no-trigger': require('./rules/no-trigger'),
    'no-trim': require('./rules/no-trim'),
    'no-val': require('./rules/no-val'),
    'no-wrap': require('./rules/no-wrap')
  },
  configs: {
    deprecated: {
      rules: {
        "jquery/no-ajax": 2,
        "jquery/no-attr": 2,
        "jquery/no-bind": 2,
        "jquery/no-class": 2,
        "jquery/no-clone": 2,
        "jquery/no-closest": 2,
        "jquery/no-css": 2,
        "jquery/no-data": 2,
        "jquery/no-deferred": 2,
        "jquery/no-delegate": 2,
        "jquery/no-each": 2,
        "jquery/no-find": 2,
        "jquery/no-global-eval": 2,
        "jquery/no-html": 2,
        "jquery/no-in-array": 2,
        "jquery/no-is": 2,
        "jquery/no-map": 2,
        "jquery/no-merge": 2,
        "jquery/no-param": 2,
        "jquery/no-parent": 2,
        "jquery/no-parents": 2,
        "jquery/no-prop": 2,
        "jquery/no-serialize": 2,
        "jquery/no-text": 2,
        "jquery/no-trigger": 2,
        "jquery/no-trim": 2,
        "jquery/no-val": 2,
        "jquery/no-wrap": 2
      }
    }
  }
}
