module.exports = {
  "extends": ["stylelint-config-standard", "stylelint-config-recess-order"],
  "rules": {
    "at-rule-no-unknown": [true, {"ignoreAtRules" :[
      "mixin", "extend", "content", "include"
    ]}],
    // "no-descending-specificity": null // 禁止特异性较低的选择器在特异性较高的选择器之后重写
  }
}
